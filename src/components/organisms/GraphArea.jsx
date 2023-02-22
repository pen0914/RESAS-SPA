import React, { useContext, useEffect, useState } from "react";
import { Line } from "recharts";

import { ValContext } from "../../providers/ValProvider";
import { SelectPopulation } from "../../hooks/SelectPopulation";
import { Graph } from "../atoms/Graph";
import { OnOffContext } from "../../providers/OnOffProvider";

export const GraphArea = () => {
  const { val } = useContext(ValContext);
  const { on } = useContext(OnOffContext);
  const { getPopulationData, population } = SelectPopulation();
  const [graphData, setGraphData] = useState([
    { name: "0", label: "0", data: { year: 0, value: 0 } }
  ]);

  useEffect(() => {
    getPopulationData(val);
  }, [val, getPopulationData]);

  const name = val.prefName;
  useEffect(() => {
    //チェック時,stateに格納
    if (on === false) {
      setGraphData([
        ...graphData,
        {
          name: name,
          label: population.label,
          data: population.data
        }
      ]);
    }
    //チェックを外す時,stateから削除
    else {
      /*  setGraphData(graphData.filter((g) => g !== `${prefCode}`));
      setOn(true); */
    }
  }, [name]);
  console.log(name);
  console.log(graphData);

  return (
    <>
      <Graph data={graphData}>
        {graphData.map((g, index) => {
          return <Line key={index} type="monotone" data={g} dataKey="value" />;
        })}
      </Graph>
    </>
  );
};
