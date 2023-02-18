import "./styles.css";
import styled from "styled-components";
import React, { useEffect } from "react";

import { ValProvider } from "./providers/ValProvider";
import { AllData } from "./hooks/AllData";
import { CheckBox } from "./components/molecules/CheckBox";
import { Graph } from "./components/molecules/Graph";

export default function App() {
  const { getData, pref } = AllData();

  useEffect(() => getData(), []);

  return (
    <ValProvider>
      <SDiv>Title</SDiv>
      <SDiv>
        <p>都道府県</p>
        <div>
          {pref.map((pref) => (
            <CheckBox key={pref.prefCode} prefecture={pref.prefName} />
          ))}
        </div>
      </SDiv>
      <SDiv>
        <p>人口数</p>
        <Graph />
      </SDiv>
    </ValProvider>
  );
}

const SDiv = styled.div`
  text-align: center;
`;
