import React from "react";
import "./ChartBar.css";

const ChartBar = (props) => {
  let fillChartBar = "0%";
  if (props.maxValue > 0) {
    fillChartBar = `${Math.round((props.value / props.maxValue) * 100)}%`;
    console.log(fillChartBar);
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: fillChartBar }}></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
