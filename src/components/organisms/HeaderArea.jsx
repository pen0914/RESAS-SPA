import { memo } from "react";
import styled from "styled-components";
export const HeaderArea = memo(() => {
  return (
    <>
      <SDiv>人口構成マップ作成アプリ</SDiv>
    </>
  );
});

const SDiv = styled.div`
  color: white;
  background-color: #a6c752;

  text-align: center;
  _hover {
    cursor: ;
  }
`;
