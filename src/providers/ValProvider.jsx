import React, { createContext, useState } from "react";

export const ValContext = createContext();

export const ValProvider = (props) => {
  const { children } = props;

  const [val, setVal] = useState({ prefCode: 0, prefName: "0" });
  return (
    <ValContext.Provider value={{ val, setVal }}>
      {children}
    </ValContext.Provider>
  );
};
