import React, { createContext, useState } from "react";

export const OnOffContext = createContext();

export const OnOffProvider = (props) => {
  const { children } = props;

  const [on, setOn] = useState(false);
  return (
    <OnOffContext.Provider value={{ on, setOn }}>
      {children}
    </OnOffContext.Provider>
  );
};
