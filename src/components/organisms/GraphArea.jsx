import React, { memo, useContext } from "react";
import { Line } from "recharts";

import { Graph } from "../atoms/Graph";
import { GraphContext } from "../../providers/GraphProvider";

export const GraphArea = memo(() => {
  const { graphData } = useContext(GraphContext);
  console.log(graphData);
  return (
    <>
      <Graph data={graphData}>
        {graphData.map((g, index) => {
          return (
            <Line
              data={g.data}
              key={index}
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
