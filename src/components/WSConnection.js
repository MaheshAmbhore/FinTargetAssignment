import { useEffect, useState } from "react";

function WSConnection(props) {
  
  useEffect(() => {
    if (props?.currentCoinName && props?.currentInterval) {
      const ws = new WebSocket(
        `wss://stream.binance.com:9443/ws/${props.currentCoinName}@kline_${props.currentInterval}`
      );

      ws.onopen = () => {
        console.log("WebSocket connection established");
      };

      ws.onmessage = (event) => {
        const data = JSON.parse(event.data);
        props.onCurrentCoinDataChanged(data.k);

      };

      ws.onclose = () => {
        console.log("WebSocket connection closed");
      };
    }
  }, []);


}

export default WSConnection;
