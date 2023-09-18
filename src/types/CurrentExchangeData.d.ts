export interface CurrentExchangeData {
  data: any;
  exchangeRate: number;
  fromSymbol: string;
  toSymbol: string;
  lastUpdatedAt: string;
  success: boolean;
  rateLimitExceeded: boolean;
}
