import React, { useCallback } from "react";
import { style } from "styled-components";

import { CheckState } from "../../hooks/states/CheckState";
import { CheckBox } from "../atoms/CheckBox";

export const CheckBoxArea = (props) => {
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
