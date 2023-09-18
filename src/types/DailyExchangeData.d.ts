export interface DailyExchangeData {
  open: number;
  close: number;
  high: number;
  low: number;
  date: string;
}

export interface DailyExchange {
  success: boolean;
  from: string;
  to: string;
  lastUpdatedAt: string;
  data: DailyExchangeData;
}
