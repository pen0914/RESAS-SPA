import React, { memo } from "react";
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

export const Graph = memo((props) => {
  const { children, data } = props;

  return (
    <div style={{ height: "280px" }}>
      <ResponsiveContainer width="90%">
        <LineChart
          data={data}
          margin={{ top: 5, right: 5, left: 50, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" type="year" />
          <YAxis dataKey="value" />
          <Tooltip />
          <Legend />
          {children}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
});
