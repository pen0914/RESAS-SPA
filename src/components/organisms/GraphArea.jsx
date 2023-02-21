import React, { useContext, useEffect } from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";

import { ValContext } from "../../providers/ValProvider";
import { SelectPopulation } from "../../hooks/SelectPopulation";
import { Graph } from "../molecules/Graph";

export const GraphArea = () => {
  const { val } = useContext(ValContext);
  const { getPopulationData, population } = SelectPopulation();
  const AAA = () => {
    getPopulationData(val);
    console.log(population);
    console.log(val);
  };

  useEffect(() => {
    getPopulationData(val);
  }, [val, getPopulationData]);

  return (
    <>
      <button onClick={AAA}>aaa</button>
      <Graph GraphData={population} />
    </>
  );
};
