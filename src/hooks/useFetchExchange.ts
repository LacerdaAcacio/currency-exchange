import { Formatter } from "./../utils/Formatter";
import { useMutation } from "react-query";
import axios from "axios";
import { EXCHANGE_URL } from "../constants";
import { ExchangeParams } from "../types/ParamsData";
import { useState } from "react";
import { CurrentExchangeData } from "../types/CurrentExchangeData";
import { DailyExchange } from "../types/DailyExchangeData";

export const useFetchExchange = () => {
  const [hasExchangeData, setHasExchangeData] = useState(false);

  const getExchangeResponse = (response: {
    data: CurrentExchangeData | DailyExchange;
  }) => {
    const responseData = response?.data;
    const hasRequestSucceeded = responseData?.success ?? false;

    setHasExchangeData(hasRequestSucceeded);

    return responseData;
  };

  const fetchExchangeRateMutation = useMutation(
    async ({ data, isDaily }: { data: ExchangeParams; isDaily: boolean }) => {
      const exchangeURL = await getExchange(data, isDaily);
      return axios.get(exchangeURL).then(getExchangeResponse);
    },
  );

  const getExchange = async (
    params: ExchangeParams,
    isDaily: boolean = false,
  ) => {
    const endpoint = isDaily ? "dailyExchangeRate" : "currentExchangeRate";
    return `${EXCHANGE_URL}${endpoint}${Formatter.objectToQueryString(params)}`;
  };

  const onSubmit = (data: ExchangeParams, isDaily: boolean = false) => {
    fetchExchangeRateMutation.mutate({ data, isDaily });
  };

  return {
    getExchange,
    onSubmit,
    exchangeLoading: fetchExchangeRateMutation.isLoading,
    exchangeData: fetchExchangeRateMutation.data,
    hasExchangeData,
  };
};
