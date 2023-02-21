import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";

export const Graph = (props) => {
  const { GraphData } = props;

  return (
    <>
      <LineChart
        width={200}
        height={200}
        data={GraphData}
        margin={{ top: 5, right: 5, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis dataKey="value" />

        <Line type="monotone" dataKey="value" />
      </LineChart>
    </>
  );
};
