import styled from "styled-components";
import React, { memo, useEffect, useState } from "react";
import { EachCheckBox } from "../molecules/EachCheckBox";

export const CheckBoxArea = memo((props) => {
  const { prefData, index } = props;

  const area = {
    0: "北海道",
    1: "東北",
    7: "関東",
    14: "中部",
    23: "近畿",
    30: "中国",
    35: "四国",
    39: "九州"
  };
  const num = [1, 7, 14, 23, 30, 35, 39];
  const [boolean, setBoolean] = useState(false);

  useEffect(() => {
    if (num.some((n) => n === index)) {
      setBoolean(true);
    } else {
      setBoolean(false);
    }
  }, []);

  return (
    <>
      {boolean && (
        <>
          <STitle>{area[index]}地方</STitle>
          <SFlex>
            <EachCheckBox prefecture={prefData} />
          </SFlex>
        </>
      )}
      {!boolean && (
        <SFlex>
          <EachCheckBox prefecture={prefData} />
        </SFlex>
      )}
    </>
  );
});

const SFlex = styled.div`
  display: inline-flex;
  justify-content: start;
  margin: 5px;
  box-shadow: 0 0 3px #333333;
  background-color: #a6c752;
  color: #ffffff;
  border-radius: 3px;
`;

const STitle = styled.div`
  color: #147616;
  font-family: "Hiragino Maru Gothic ProN";
  font-weight: bold;
`;
