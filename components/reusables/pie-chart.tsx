"use client";

import React from "react";
import { Chart } from "react-google-charts";


export const options = {
  pieHole: 0.6,
  is3D: false,
};

export function PieChart({score}: {score: number}) {

  const data = [
    ["Questions", "Hours per Day"],
    ["Correct", score],
    ["Incorrect", 15-score],
  ];
  
  return (
    <Chart
      chartType="PieChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}
