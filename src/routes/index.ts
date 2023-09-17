import { API_KEY } from "../constants";
import { EXCHANGE_URL } from "../constants/routes";

export const exchangeApi = (params: any, isDaily?: boolean) => {
  return `${EXCHANGE_URL}/${
    isDaily ? "currentExchangeRate" : "dailyExchangeRate"
  }${params}`;
};
// ?apiKey=${API_KEY}&from_symbol=${data.currency}`
// export const currentExchangeApi = `${EXCHANGE_URL}/currentExchangeRate${{}}`
