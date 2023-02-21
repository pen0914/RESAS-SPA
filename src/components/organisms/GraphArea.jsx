import React, { useContext, useEffect, useState } from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";

import { ValContext } from "../../providers/ValProvider";
import { SelectPopulation } from "../../hooks/SelectPopulation";
import { Graph } from "../molecules/Graph";
import { OnOffContext } from "../../providers/OnOffProvider";

export const GraphArea = () => {
  const { val } = useContext(ValContext);
  const { on } = useContext(OnOffContext);
  const { getPopulationData, population } = SelectPopulation();
  const [graphData, setGraphData] = useState([]);

  useEffect(() => {
    getPopulationData(val);
  }, [val, getPopulationData]);

  useEffect(
    (val) => {
      //チェック時,stateに格納
      if (on === false) {
        setGraphData(...graphData, population);
      }
      //チェックを外す時,stateから削除
      else {
        /*  setGraphData(graphData.filter((g) => g !== `${prefCode}`));
      setOn(true); */
      }
    },
    [population]
  );

  return (
    <>
      <Graph GraphData={graphData} />
    </>
  );
};
