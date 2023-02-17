import React, { useState } from "react";

export const UseProvider = () => {
  const ValContext = React.createContext();

  const useValContext = () => React.useContext(ValContext);

  const ValProvider = (props) => {
    const [val, setVal] = useState();
    return (
      <ValContext.Provider value={{ val, setVal }}>
        {props.children}
      </ValContext.Provider>
    );
  };
};
