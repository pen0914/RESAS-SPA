import React, { memo } from "react";
import styled from "styled-components";
export const HeaderArea = memo(() => {
  return (
    <>
      <SDiv>人口構成マップ作成アプリ</SDiv>
    </>
  );
});

const SDiv = styled.div`
  color: black;
  background-color: #a6c752;
  font-weight: bold;
  text-align: center;
`;
