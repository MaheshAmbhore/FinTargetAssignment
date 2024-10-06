import { useEffect } from "react";

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
        localStorage.setItem("WsData", JSON.stringify(data.k))
        const printWsData = localStorage.getItem("WsData");
        const JData = JSON.parse(printWsData);
        console.log(JData);
      };

      ws.onclose = () => {
        console.log("WebSocket connection closed");
      };
    }
  }, []);


}

export default WSConnection;
