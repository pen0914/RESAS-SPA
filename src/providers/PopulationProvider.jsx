import React, { createContext, useState } from "react";

export const PopulationContext = createContext();

export const PopulationProvider = (props) => {
  const { children } = props;

  const [population, setPopulation] = useState([
    { label: "0", data: { year: 0, value: 0 } }
  ]);
  return (
    <PopulationContext.Provider value={{ population, setPopulation }}>
      {children}
    </PopulationContext.Provider>
  );
};
