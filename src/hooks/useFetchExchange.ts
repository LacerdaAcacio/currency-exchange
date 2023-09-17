import { axios } from "axios";
// import { SubmitHandler } from "react-hook-form";
// import { FormData } from "../types/FormData";
import { useQuery } from "react-query";
// import axios from "axios";
import { EXCHANGE_URL } from "../constants/routes";
import { ExchangeParams } from "../types/ExchangeParams";

export const useFetchExchange = () => {
  // type ExchangeParams = Record<string, unknown>;
  // const query = useQuery("exchange", () => {
  //   return axios(`${EXCHANGE_URL}/${data.currency}`).then(
  //     (res) => res.data,
  //   );
  // });
  // const getExchange = async (params: any, isDaily?: boolean) => {
  // console.log(
  //   `${EXCHANGE_URL}${
  //     isDaily ? "currentExchangeRate" : "dailyExchangeRate"
  //   }${params}`,
  // );

  //   return `${EXCHANGE_URL}${
  //     isDaily ? "dailyExchangeRate" : "currentExchangeRate"
  //   }${params}`;
  // };

  // const getIssuer = async (params?: { params: unknown }) => {
  //     const response = await sendRequest(() => registerApi.issuers.get({ ...params }));
  //     return response || { data: [] as any[], total: 0, last_page: 0 };
  //   };

  //     const query = useQuery("exchange", () => {
  //       return axios.get(api).then((res: any) => res.data);
  //     });
  //     return query;
  //   };

  //   const query = useQuery("exchange", () => {
  //     return axios.get(getExchange()).then((res) => res.data);
  //   });
  const objectToQueryString = (obj: Record<string, unknown>) => {
    return (
      "?" +
      Object.keys(obj)
        .map((key) => `${key}=${obj[key]}`)
        .join("&")
    );
  };

  const getExchange = async (
    params: ExchangeParams,
    isDaily: boolean = false,
  ) => {
    const endpoint = isDaily ? "dailyExchangeRate" : "currentExchangeRate";
    return `${EXCHANGE_URL}${endpoint}${objectToQueryString(params)}`;
  };

  return { getExchange };
};
