import React, { createContext, useState } from "react";

export const GraphContext = createContext();

export const GraphProvider = (props) => {
  const { children } = props;

  const [graphData, setGraphData] = useState([
    { name: "0", label: "0", data: { year: 0, value: 0 } }
  ]);
  return (
    <GraphContext.Provider value={{ graphData, setGraphData }}>
      {children}
    </GraphContext.Provider>
  );
};
