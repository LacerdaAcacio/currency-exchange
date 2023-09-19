import { useMutation } from "react-query";
import axios from "axios";
import { useState } from "react";
import Formatter from "../utils/Formatter";
import { EXCHANGE_URL } from "../constants";
import { ExchangeParams } from "../types/ParamsData";
import { CurrentExchangeData } from "../types/CurrentExchangeData";
import { DailyExchange } from "../types/DailyExchangeData";

export const useFetchExchange = () => {
  const [hasExchangeData, setHasExchangeData] = useState(false);

  const getExchange = async (
    params: ExchangeParams,
    isDaily: boolean = false,
  ) => {
    const endpoint = isDaily ? "dailyExchangeRate" : "currentExchangeRate";
    return `${EXCHANGE_URL}${endpoint}${Formatter.objectToQueryString(params)}`;
  };

  const getExchangeResponse = (response: {
    data: CurrentExchangeData | DailyExchange;
  }) => {
    const responseData = response.data;
    const hasRequestSucceeded = responseData?.success;

    setHasExchangeData(hasRequestSucceeded);

    return responseData;
  };

  const fetchExchangeRateMutation = useMutation(
    async ({
      data,
      isDaily,
    }: {
      data: CurrentExchangeData | DailyExchange;
      isDaily: boolean;
    }) => {
      const exchangeURL = await getExchange(data, isDaily);
      const response = await axios.get(exchangeURL).then(getExchangeResponse);
      return response;
    },
  );

  const onSubmit = (data: ExchangeParams, isDaily: boolean = false) => {
    fetchExchangeRateMutation.mutateAsync({ data, isDaily });
  };

  return {
    getExchange,
    onSubmit,
    exchangeLoading: fetchExchangeRateMutation.isLoading,
    exchangeData: fetchExchangeRateMutation.data as CurrentExchangeData,
    hasExchangeData,
  };
};

export default useFetchExchange;
