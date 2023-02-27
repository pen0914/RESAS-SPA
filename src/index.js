import { StrictMode } from "react";
import React from "react";
import ReactDom from "react-dom";

import App from "./App";
import { GraphProvider } from "./providers/GraphProvider";

ReactDom.render(
  <GraphProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </GraphProvider>,
  document.getElementById("root")
);
