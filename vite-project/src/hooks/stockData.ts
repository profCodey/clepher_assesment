import { useState, useEffect } from "react";
import axios from "axios";
import { ApiResponse } from "./types";

import "react-toastify/dist/ReactToastify.css";

export function useStockData(
  symbol: string,
  apiKey: string
): ApiResponse | null {
  const [stockInfo, setStockInfo] = useState<ApiResponse | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get<ApiResponse>(
          `https://www.alphavantage.co/query?function=EARNINGS&symbol=${symbol}&apikey=${apiKey}`
        );
        console.log("data data", data);
        setStockInfo(data);
        console.log("stock", stockInfo);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [symbol, apiKey]);

  return stockInfo;
}
