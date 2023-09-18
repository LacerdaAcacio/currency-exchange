import { LabelsData } from "../types/ConstantsData";

export const MILLISECONDS_IN_A_DAY = 1000 * 60 * 60 * 24;
export const API_KEY: string = "RVZG0GHEV2KORLNA";

export const EXCHANGE_URL: string =
  "https://api-brl-exchange.actionlabs.com.br/api/1.0/open/";

export const LABELS: LabelsData = {
  INPUT: "Enter the currency code",
  BUTTON: "Exchange Result",
  FOOTER: "Copyright 2022 - Action Labs",
  CURRENT_TITLE: "Exchange Rate now",
  MAIN_TITLE: "BRL Exchange Rate",
  INVALID_VALUE: "Insira um código de moeda válido como JPY, USD, EUR, etc.",
  DAILY_TITLE: "Last 30 days",
};
