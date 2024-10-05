import React from "react";
import COINS from "../constants/coins";

export default function CoinSelector(props) {
  return (
    <>
      <select onChange={props.onCoinSelectionChanged}>
        {Object.keys(COINS).map((coin) => (
          <option key={coin} value={COINS[coin]}>
            {coin}
          </option>
        ))}
      </select>
    </>
  );
}
