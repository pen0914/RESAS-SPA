import React, { memo, useContext } from "react";

import { ValContext } from "../../providers/ValProvider";

export const Graph = memo(() => {
  const { val } = useContext(ValContext);
  return <>{val}</>;
});
