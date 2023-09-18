import { DailyExchangeData } from "./../types/DailyExchangeData.d";
import React, { useState } from "react";
import { FormData } from "../types/FormData";
import { useFetchExchange } from "./useFetchExchange";
import { v4 as uuidv4 } from "uuid";
import { MILLISECONDS_IN_A_DAY } from "../constants";

export const useExchange = () => {
  const [dailyExchangeExpanded, setDailyExchangeExpanded] = useState(false);
  const { onSubmit } = useFetchExchange();

  const generateKey = uuidv4();

  const currencyCodeInputProps = {
    maxLength: 3,
    pattern: "^[A-Z]{3}$",
    onInput: (event: React.ChangeEvent<HTMLInputElement>) => {
      event.target.value = event.target.value.toUpperCase().slice(0, 3);
    },
  };

  const getDifferenceInDays = (firstDate: Date, secondDate: Date): number => {
    return (firstDate.getTime() - secondDate.getTime()) / MILLISECONDS_IN_A_DAY;
  };

  const toMidnight = (date: Date): Date => {
    const newDate = new Date(date);
    newDate.setHours(0, 0, 0, 0);
    return newDate;
  };

  const getLastThirtyDays = (dailyExchangeData: DailyExchangeData[]) => {
    const currentDate = toMidnight(new Date());
    const hasDailyExchangeData = Boolean(dailyExchangeData.length > 0);

    if (hasDailyExchangeData)
      return dailyExchangeData.filter((data: DailyExchangeData) => {
        const itemDate = toMidnight(new Date(data.date));
        const differenceInDays = getDifferenceInDays(currentDate, itemDate);
        return differenceInDays <= 30;
      });
    return [];
  };

  const handleExpand = (formData: FormData) => {
    setDailyExchangeExpanded(!dailyExchangeExpanded);
    if (!dailyExchangeExpanded) {
      onSubmit(formData, true);
    }
  };

  return {
    getLastThirtyDays,
    currencyCodeInputProps,
    generateKey,
    dailyExchangeExpanded,
    handleExpand,
  };
};
