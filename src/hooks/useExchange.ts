/* eslint-disable no-param-reassign */
import { DailyExchangeData } from "../types/DailyExchangeData.d";
import { MILLISECONDS_IN_A_DAY } from "../constants";
import Formatter from "../utils/Formatter";

export const useExchange = () => {
  const currencyCodeInputProps = {
    maxLength: 3,
    pattern: "^[A-Z]{3}$",
    onInput: (event: React.ChangeEvent<HTMLInputElement>) => {
      event.target.value = event.target.value.toUpperCase().slice(0, 3);
    },
  };

  const toMidnight = (date: Date): Date => {
    const adjustedDate = new Date(date);
    adjustedDate.setHours(0, 0, 0, 0);
    return adjustedDate;
  };

  const getDifferenceInDays = (firstDate: Date, secondDate: Date): number => {
    return (firstDate.getTime() - secondDate.getTime()) / MILLISECONDS_IN_A_DAY;
  };

  const filterLastThirtyDays = (dailyExchangeData: DailyExchangeData[]) => {
    const currentDate = toMidnight(new Date());

    return dailyExchangeData.filter((data: DailyExchangeData) => {
      const dataDate = toMidnight(new Date(data.date));
      const differenceInDays = getDifferenceInDays(currentDate, dataDate);
      return differenceInDays <= 30;
    });
  };

  const compareCloseToPrevious = (
    data: DailyExchangeData,
    index: number,
    lastThirtyDays: DailyExchangeData[],
  ) => {
    const currentClose = Number(data.close);
    const previousClose = Number(
      lastThirtyDays[index + 1]?.close || currentClose,
    );

    const comparisonPercentage = Formatter.ruleOfThreePercent(
      currentClose,
      previousClose,
    );

    return (Number(comparisonPercentage) - 100).toFixed(2);
  };

  return {
    compareCloseToPrevious,
    filterLastThirtyDays,
    currencyCodeInputProps,
  };
};

export default useExchange;
