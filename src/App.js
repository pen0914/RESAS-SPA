import "./styles.css";
import styled from "styled-components";
import React, { useEffect } from "react";

import { ValProvider } from "./providers/ValProvider";
import { AllData } from "./hooks/AllData";
import { CheckBox } from "./components/molecules/CheckBox";
import { GraphArea } from "./components/organisms/GraphArea";
import { OnOffProvider } from "./providers/OnOffProvider";

export default function App() {
  const { getData, prefData } = AllData();

  useEffect(() => getData(), [getData]);

  return (
    <ValProvider>
      <OnOffProvider>
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
      </OnOffProvider>
    </ValProvider>
  );
}

const SDiv = styled.div`
  text-align: center;
`;
