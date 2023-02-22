import "./styles.css";
import styled from "styled-components";
import React, { useEffect } from "react";

import { GraphProvider } from "./providers/GraphProvider";
import { AllData } from "./hooks/axios/AllData";
import { CheckBox } from "./components/molecules/CheckBox";
import { GraphArea } from "./components/organisms/GraphArea";

export default function App() {
  const { getData, prefData } = AllData();

  useEffect(() => getData(), [getData]);

  return (
    <GraphProvider>
      <SDiv>Title</SDiv>
      <SDiv>
        <p>都道府県</p>
        <div>
          {prefData.map((pref) => (
            <CheckBox key={pref.prefCode} prefecture={pref} />
          ))}
        </div>
      </SDiv>
      <SDiv>
        <p>人口数</p>
        <GraphArea />
      </SDiv>
    </GraphProvider>
  );
}

const SDiv = styled.div`
  text-align: center;
`;
