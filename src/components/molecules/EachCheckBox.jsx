import React, { useCallback } from "react";

import { CheckState } from "../../hooks/states/CheckState";
import { CheckBox } from "../atoms/CheckBox";

export const EachCheckBox = (props) => {
  const { prefecture } = props;

  const { CheckFunction } = CheckState();

  const onClickValue = useCallback(
    (prefecture) => {
      CheckFunction(prefecture);
    },
    [CheckFunction]
  );

  return <CheckBox onClickValue={onClickValue} prefecture={prefecture} />;
};
