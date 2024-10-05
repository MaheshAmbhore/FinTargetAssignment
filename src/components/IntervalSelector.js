import React from "react";
import INTERVALS from "../constants/intervals";

export default function IntervalSelector(props) {
  return (
    <>
      <select onChange={props.onIntervalSelectionChanged}>
        {Object.keys(INTERVALS).map((interval) => (
          <option key={interval} value={INTERVALS[interval]}>
            {INTERVALS[interval]}
          </option>
        ))}
      </select>
    </>
  );
}
