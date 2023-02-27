import "./styles.css";
import styled from "styled-components";
import React, { useEffect } from "react";

import { CheckBoxArea } from "./components/organisms/CheckBoxArea";
import { GraphArea } from "./components/organisms/GraphArea";
import { HeaderArea } from "./components/organisms/HeaderArea";

import { AllData } from "./hooks/axios/AllData";

export default function App() {
  const { getData, prefData } = AllData();

  useEffect(() => getData(), [getData]);

  return (
    <SBody>
      <HeaderArea />

      <SDiv>
        <SDivLeft>
          <SMain>都道府県</SMain>
          {prefData.map((p, index) => {
            return <CheckBoxArea key={p.prefCode} prefData={p} index={index} />;
          })}
        </SDivLeft>
      </SDiv>
      <SDiv>
        <SDivRight>
          <SMain>グラフ</SMain>
          <GraphArea />
        </SDivRight>
      </SDiv>
    </SBody>
  );
}

const SDiv = styled.div`
  @media (min-width: 600px) {
    float: left;
  }
`;

const SDivLeft = styled.div`
  @media (min-width: 600px) {
    width: 710px;
  }
`;

const SDivRight = styled.div`
  @media (min-width: 600px) {
    width: 400px;
    padding: 75px 0;
  }
`;

const SBody = styled.div`
  background-color: #faffec;
`;

const SMain = styled.div`
  color: black;
  font-weight: bold;
  font-size: 20px;
  font-family: sans-serif;
  text-decoration-line: underline;
  text-decoration-color: greenyellow;
`;
