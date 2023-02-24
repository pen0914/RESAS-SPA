import React, { memo, useContext, useEffect } from "react";
import { Line } from "recharts";

import { Graph } from "../atoms/Graph";

import { GraphContext } from "../../providers/GraphProvider";
export const GraphArea = memo(() => {
  const { graphData, setGraphData } = useContext(GraphContext);
  //graphDataの初期配列を削除(初回のみ)
  useEffect(() => {
    setGraphData(graphData.filter((g) => g[0]));
  }, []);

  return (
    <>
      <Graph data={graphData}>
        {graphData.map((g) => {
          return (
            <Line
              data={g.data}
              key={g.name}
              type="monotone"
              name={g.name}
              dataKey="value"
            />
          );
        })}
      </Graph>
    </>
  );
});
