import { useStockData } from "../hooks/stockData";

function Earnings() {
  const symbol = import.meta.env.VITE_SYMBOL;
  const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;

  const stockData = useStockData(symbol, apiKey);

  if (stockData?.Information)
    return (
      <div className="mx-10 my-10">
        <h1>Stock Data</h1>
        <p>{stockData.Information}</p>
      </div>
    );

  return (
    <div className="mx-10 my-10">
      <h1>Stock Data</h1>
      <div>
        {stockData ? (
          <ul>
            {stockData?.annualEarnings.map((data, index) => (
              <li key={index}>
                <p>Fiscal Date Ending: {data.fiscalDateEnding}</p>
                <p>Reported EPS: {data.reportedEPS}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default Earnings;
