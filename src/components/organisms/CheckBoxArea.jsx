import styled from "styled-components";
import { memo } from "react";
import { EachCheckBox } from "../molecules/EachCheckBox";

export const CheckBoxArea = memo((props) => {
  const { prefData, index } = props;

  const area = [
    "北海道",
    "東北",
    "関東",
    "中部",
    "近畿",
    "中国",
    "四国",
    "九州"
  ];
  const num = [0, 7, 14, 23, 30, 35, 39];
  const component = () => {
    if (index === 1) {
      return (
        <>
          <p />
          <SFlex>
            <EachCheckBox prefecture={prefData} />
          </SFlex>
        </>
      );
    } else {
      return (
        <SFlex>
          <EachCheckBox prefecture={prefData} />
        </SFlex>
      );
    }
  };

  return (
    <>
      <component />
    </>
  );
});

const SFlex = styled.div`
  display: inline-flex;
  justify-content: start;
`;
