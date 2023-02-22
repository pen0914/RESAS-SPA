import React, { memo, useCallback } from "react";
import { style } from "styled-components";

import { CheckState } from "../../hooks/states/CheckState";

export const CheckBox = memo((props) => {
  const { prefecture } = props;
  const { CheckFunction } = CheckState();

  const onClickValue = useCallback(
    (prefecture) => {
      CheckFunction(prefecture);
    },
    [CheckFunction]
  );

  return (
    <>
      <input
        type="checkbox"
        name="prefecture"
        onClick={() => onClickValue(prefecture)}
      />
      {prefecture.prefName}
    </>
  );
});
