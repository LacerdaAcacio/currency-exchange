import { DailyExchangeData } from "./DailyExchangeData";

export interface CurrentExchangeData {
  data: DailyExchangeData[];
  exchangeRate: number;
  fromSymbol: string;
  toSymbol: string;
  lastUpdatedAt: string;
  success: boolean;
  rateLimitExceeded: boolean;
}
