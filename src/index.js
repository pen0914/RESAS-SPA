import { StrictMode } from "react";
import React from "react";
import ReactDom from "react-dom";

import App from "./App";
import { GraphProvider } from "./providers/GraphProvider";
import { PopulationProvider } from "./providers/PopulationProvider";

ReactDom.render(
  <PopulationProvider>
    <GraphProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </GraphProvider>
  </PopulationProvider>,
  document.getElementById("root")
);
