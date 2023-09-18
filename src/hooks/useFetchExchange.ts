import { Formatter } from "./../utils/Formatter";
import { useMutation } from "react-query";
import axios from "axios";
import { EXCHANGE_URL } from "../constants";
import { ExchangeParams } from "../types/ParamsData";
import { useEffect, useState } from "react";
import { CurrentExchangeData } from "../types/CurrentExchangeData";
import { DailyExchange } from "../types/DailyExchangeData";

export const useFetchExchange = () => {
  const [hasExchangeData, setHasExchangeData] = useState(false);
  const [dailyValues, setDailyValues] = useState({});

  useEffect(() => {
    console.log(hasExchangeData);
  }, [hasExchangeData]);

  // const getExchangeResponse = (response: {
  //   data: CurrentExchangeData | DailyExchange;
  // }) => {
  //   const responseData = response?.data;
  //   console.log(responseData);
  //   const hasRequestSucceeded = Boolean(responseData?.success === true);
  //   console.log(hasRequestSucceeded);

  //   setHasExchangeData(hasRequestSucceeded);

  //   return responseData;
  // };

  const getExchangeResponse = (response: { data: any }) => {
    const responseData = response.data;
    const hasRequestSucceeded = responseData?.success;

    setHasExchangeData(hasRequestSucceeded);

    return responseData;
  };

  // const fetchExchangeRateMutation = useMutation(
  //   async ({ data, isDaily }: { data: ExchangeParams; isDaily: boolean }) => {
  //     const exchangeURL = await getExchange(data, isDaily);
  //     return (
  //       axios
  //         .get(exchangeURL)
  //         // .then((response: any) => {
  //         //   const hasRequestSucceeded = Boolean(response.data?.success === true);
  //         //   setHasExchangeData(hasRequestSucceeded);
  //         //   return response.data;
  //         // });
  //         .then(getExchangeResponse)
  //     );
  //     // .finally(() => {
  //     //   setHasExchangeData(hasRequestSucceeded);
  //     // });
  //     // .then(getExchangeResponse);
  //   },
  //   // {
  //   //   onSuccess: (data: any) => {
  //   //     getExchangeResponse({ data });
  //   //   },
  //   // },
  // );
  const fetchExchangeRateMutation = useMutation(
    async ({ data, isDaily }: { data: ExchangeParams; isDaily: boolean }) => {
      const exchangeURL = await getExchange(data, isDaily);
      const response = await axios.get(exchangeURL).then(getExchangeResponse);
      // console.log(response);
      setDailyValues(response);
      return response;
      // return axios.get(exchangeURL).then(getExchangeResponse);
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
    fetchExchangeRateMutation.mutateAsync({ data, isDaily });
  };

  return {
    getExchange,
    onSubmit,
    exchangeLoading: fetchExchangeRateMutation.isLoading,
    exchangeData: fetchExchangeRateMutation.data,
    hasExchangeData,
    dailyValues,
  };
};
