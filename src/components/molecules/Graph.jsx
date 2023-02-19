import React, { memo, useContext, useEffect } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";

import { ValContext } from "../../providers/ValProvider";
import { SelectPopulation } from "../../hooks/SelectPopulation";

export const Graph = memo(() => {
  const { val } = useContext(ValContext);
  const { getPopulationData, population } = SelectPopulation();
  const AAA = () => {
    getPopulationData(val);
    console.log(population);
  };

  // useEffect(() => getPopulationData(val), []);

  return (
    <>
      {val}
      <button onClick={AAA}>aaa</button>
      <LineChart
        width={200}
        height={200}
        data={population}
        margin={{ top: 5, right: 5, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis dataKey="value" />

        <Line type="monotone" dataKey="value" />
      </LineChart>
    </>
  );
});
