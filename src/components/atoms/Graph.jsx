import React, { memo } from "react";
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend
} from "recharts";

export const Graph = memo((props) => {
  const { children, data } = props;

  return (
    <>
      <LineChart
        data={data}
        width={300}
        height={200}
        margin={{ top: 5, right: 5, left: 50, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={data.year} type={data.year} />
        <YAxis dataKey={data.value} />

        <Legend />
        {children}
      </LineChart>
    </>
  );
});
