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
        <div>
          <p>都道府県</p>
          {prefData.map((p, index) => {
            return <CheckBoxArea key={p.prefCode} prefData={p} index={index} />;
          })}
        </div>
      </SDiv>
      <SDiv>
        <div>
          <div>人口数</div>
          <GraphArea />
        </div>
      </SDiv>
    </SBody>
  );
}

const SDiv = styled.div`
  margin: 0;
  @media (min-width: 600px) {
    float: left;
  }
`;

const SBody = styled.div`
  background-color: rgb(255, 255, 255);
`;
