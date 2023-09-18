import { CurrentExchangeData } from "./CurrentExchangeData";
import { DailyExchangeData } from "./DailyExchangeData";
import { FormData } from "./FormData";

export type ExchangeParams = Record<FormData>;

export interface DailyExchangeCardsParams {
  dailyExchangeData: DailyExchangeData;
  comparison: number | string;
}

export interface DailyExchangeParams {
  formData: FormData;
}

export interface CurrentExchangeCardsParams {
  currentExchangeData: CurrentExchangeData;
}

export interface FormattedCardContent {
  text: string;
  value: string | number;
  isComparison?: boolean;
}
