export interface CurrentExchangeData {
  exchangeRate: number;
  fromSymbol: string;
  toSymbol: string;
  lastUpdatedAt: string;
  success: boolean;
  rateLimitExceeded: boolean;
}
