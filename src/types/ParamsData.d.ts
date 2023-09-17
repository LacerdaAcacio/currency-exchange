import { DailyExchangeData } from "./DailyExchangeData";

export type ExchangeParams = Record<string, unknown>;

export interface DailyExchangeCards {
  dailyExchangeData: DailyExchangeData;
  comparison: number | string;
}
