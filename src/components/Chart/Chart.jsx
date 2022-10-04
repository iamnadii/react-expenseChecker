import React from "react";
import ChartBar from "../ChartBar/ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const values = props.dataPoints.map((data) => data.value);
  const maxValue = Math.max(...values);

  return (
    <div className="chart">
      {props.dataPoints.map((data) => {
        return <ChartBar key={data.id} value={data.value} maxValue={maxValue} label={data.label} />;
      })}
    </div>
  );
};

export default Chart;
