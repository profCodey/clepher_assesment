import { useStockData } from "../hooks/stockData";

function Earnings() {
  const symbol = "IBM";
  const apiKey = "RIBXT3XYLI69PC0Q";

  const stockData = useStockData(symbol, apiKey);

  if (stockData?.Information)
    return (
      <div className="ml-10">
        <h1>Stock Data</h1>
        <p>{stockData.Information}</p>
      </div>
    );

  return (
    <div className="">
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
