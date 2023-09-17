import { useState } from "react";
// import { SubmitHandler } from "react-hook-form";
// import { FormData } from "../types/FormData";
// import { useQuery } from "react-query";
// import axios from "axios";
// import { EXCHANGE_URL } from "../constants/routes";
// import { useFetchExchange } from "./useFetchExchange";

// export const useExchange = () => {
//   // const query = useQuery("exchange", () => {
//   //   return axios(`${EXCHANGE_URL}/${data.currency}`).then(
//   //     (res) => res.data,
//   //   );
//   // });
//   const { getExchange } = useFetchExchange();
//   const onSubmit: SubmitHandler<FormData> = (data: FormData) => {
//     const query = useQuery("exchange", async () => {
//       return axios.get(await getExchange(data)).then((res: any) => res.data);
//     });

//     console.log(query);
//     console.log(data);
//   };

//   return { onSubmit };
// };

import { SubmitHandler } from "react-hook-form";
import { FormData } from "../types/FormData";
import { useMutation } from "react-query";
import axios from "axios";
import { useFetchExchange } from "./useFetchExchange";
import { ExchangeParams } from "../types/ParamsData";

export const useExchange = () => {
  const [hasExchangeData, setHasExchangeData] = useState(false);
  const { getExchange } = useFetchExchange();

  // const objectToQueryString = (
  //   obj: Record<string, string | number>,
  // ): string => {
  //   return (
  //     "?" +
  //     Object.keys(obj)
  //       .map(
  //         (key) => encodeURIComponent(key) + "=" + encodeURIComponent(obj[key]),
  //       )
  //       .join("&")
  //   );
  // };

  // const getExchangeResponse = (response: any) => {
  //   const responseData = response.data;
  //   const hasRequestSucceeded = Boolean(responseData?.success === "success");
  //   setHasExchangeData(hasRequestSucceeded);
  //   return responseData;
  // };

  // const fetchExchangeRateMutation = useMutation(
  //   async (data: any, isDaily: boolean = false) => {
  //     const exchangeURL = await getExchange(objectToQueryString(data), isDaily);
  //     return axios.get(exchangeURL).then(getExchangeResponse);
  //     //   (res: any) => {
  //     //   res.data;
  //     // });
  //   },
  // );

  // const onSubmit = (data: any, isDaily: boolean = false) => {
  //   console.log(data);
  //   fetchExchangeRateMutation.mutate(data, isDaily);
  // };

  const getExchangeResponse = (response: { data: any }) => {
    const responseData = response.data;
    const hasRequestSucceeded = responseData?.success;

    setHasExchangeData(hasRequestSucceeded);

    return responseData;
  };

  // const fetchExchangeRateMutation = useMutation(
  //   async (data: ExchangeParams, isDaily: boolean = false) => {
  //     const exchangeURL = await getExchange(data, isDaily);
  //     return axios.get(exchangeURL).then(getExchangeResponse);
  //   },
  // );
  const fetchExchangeRateMutation = useMutation(
    async ({ data, isDaily }: { data: ExchangeParams; isDaily: boolean }) => {
      const exchangeURL = await getExchange(data, isDaily);
      return axios.get(exchangeURL).then(getExchangeResponse);
    },
  );

  // const onSubmit = (data: ExchangeParams, isDaily: boolean = false) => {
  //   console.log(data);
  //   fetchExchangeRateMutation.mutate(data, isDaily);
  // };
  const onSubmit = (data: ExchangeParams, isDaily: boolean = false) => {
    console.log(data);
    fetchExchangeRateMutation.mutate({ data, isDaily });
  };

  // const getLastThirtyDays = (data: any) => {
  //   const currentDate = new Date();
  //   return data.filter((item: any) => {
  //     const itemDate = new Date(item.date);
  //     const differenceInDays = (currentDate - itemDate) / (1000 * 60 * 60 * 24);
  //     return differenceInDays <= 30;
  //   });
  // };

  // function getLastThirtyDays(data: any[]) {
  //   const currentDate = new Date(); // Data atual
  //   return data.filter((item: any) => {
  //     const itemDate = new Date(item.date);
  //     const differenceInDays =
  //       (currentDate.getTime() - itemDate.getTime()) / (1000 * 60 * 60 * 24);
  //     return differenceInDays <= 30;
  //   });
  // }

  interface DateItem {
    date: string; // ou poderia ser 'Date' se os dados já fossem em formato de data.
    // outros campos aqui se necessário
  }

  const MILLISECONDS_IN_A_DAY = 1000 * 60 * 60 * 24;

  function getDifferenceInDays(date1: Date, date2: Date): number {
    return (date1.getTime() - date2.getTime()) / MILLISECONDS_IN_A_DAY;
  }

  function toMidnight(date: Date): Date {
    const newDate = new Date(date);
    newDate.setHours(0, 0, 0, 0);
    return newDate;
  }

  const getLastThirtyDays = (data: DateItem[]): DateItem[] => {
    const currentDate = toMidnight(new Date());

    return data.filter((item) => {
      const itemDate = toMidnight(new Date(item.date));
      const differenceInDays = getDifferenceInDays(currentDate, itemDate);
      return differenceInDays <= 30;
    });
  };

  // function getLastThirtyDays(data: any[]) {
  //   const currentDate = new Date();
  //   currentDate.setHours(0, 0, 0, 0); // Zerar horas, minutos, segundos e milissegundos

  //   return data.filter((item: any) => {
  //     const itemDate = new Date(item.date);
  //     itemDate.setHours(0, 0, 0, 0); // Zerar horas, minutos, segundos e milissegundos

  //     const differenceInDays =
  //       (currentDate.getTime() - itemDate.getTime()) / (1000 * 60 * 60 * 24);

  //     return differenceInDays <= 30; // Mudado para < 30 para pegar exatamente os 30 dias anteriores e não incluir o dia atual
  //   });
  // }

  return {
    onSubmit,
    exchangeData: fetchExchangeRateMutation.data,
    hasExchangeData,
    getLastThirtyDays,
  };
};
