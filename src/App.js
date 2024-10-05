import CoinSelector from "./components/CoinSelector";
import COINS from "./constants/coins";
import INTERVALS from "./constants/intervals";
import { useState } from "react";
import WSConnection from "./components/WSConnection";
import IntervalSelector from "./components/IntervalSelector";
import ChartData from "./components/ChartData";

function App() {
  const [currentCoinName, setCurrentCoinName] = useState(COINS["ETH/USDT"]);
  const [currentInterval, setCurrentInterval] = useState(INTERVALS["1M"]);
  const [coinData, setCoinData] = useState([]);

  const onCoinSelectionChanged = function (event) {
    const newCoin = event.target.value;
    setCurrentCoinName(newCoin);
  };

  const onIntervalSelectionChanged = function (event) {
    const newInterval = event.target.value;
    setCurrentInterval(newInterval);
  };

  const onCurrentCoinDataChanged = function (k) {
    setCoinData((previousData) => {
      console.log(previousData);
      return [...previousData, k];
    });
  };

  return (
    <>
      <CoinSelector onCoinSelectionChanged={onCoinSelectionChanged} />
      <IntervalSelector
        onIntervalSelectionChanged={onIntervalSelectionChanged}
      />
      <WSConnection
        onCurrentCoinDataChanged={onCurrentCoinDataChanged}
        currentCoinName={currentCoinName}
        currentInterval={currentInterval}
      />
      <ChartData coinData={coinData} />
    </>
  );
}

export default App;
