import "./styles.css";
import styled from "styled-components";
import React, { useEffect } from "react";

import { GraphProvider } from "./providers/GraphProvider";
import { CheckBoxArea } from "./components/organisms/CheckBoxArea";
import { GraphArea } from "./components/organisms/GraphArea";
import { HeaderArea } from "./components/organisms/HeaderArea";

import { AllData } from "./hooks/axios/AllData";

export default function App() {
  const { getData, prefData } = AllData();

  useEffect(() => getData(), [getData]);
  return (
    <GraphProvider>
      <HeaderArea />

      <SDiv>
        <p>都道府県</p>
        {prefData.map((p, index) => {
          <CheckBoxArea prefData={p} index={index} />;
        })}
      </SDiv>
      <SDiv>
        <p>人口数</p>
        <GraphArea />
      </SDiv>
    </GraphProvider>
  );
}

const SDiv = styled.div`
  /* text-align: center; */
`;
