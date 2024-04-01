export interface StockData {
  fiscalDateEnding: string;
  reportedEPS: string;
}

export interface ApiResponse {
  annualEarnings: StockData[];
  Information?: string;
}
