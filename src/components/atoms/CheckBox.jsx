import styled from "styled-components";
import React from "react";

export const CheckBox = (props) => {
  const { onClickValue, prefecture } = props;
  return (
    <div>
      <SInput
        type="checkbox"
        name="prefecture"
        onClick={() => onClickValue(prefecture)}
      />
      {prefecture.prefName}
    </div>
  );
};

const SInput = styled.input`
  cursor: pointer;
`;
