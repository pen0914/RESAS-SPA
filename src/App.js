import "./styles.css";
import styled from "styled-components";
import React, { Fragment, useEffect, useState } from "react";

import { GraphProvider } from "./providers/GraphProvider";
import { AllData } from "./hooks/axios/AllData";
import { CheckBoxArea } from "./components/organisms/CheckBoxArea";
import { GraphArea } from "./components/organisms/GraphArea";
import { HeaderArea } from "./components/organisms/HeaderArea";

export default function App() {
  const { getData, prefData } = AllData();

  useEffect(() => getData(), [getData]);

  return (
    <GraphProvider>
      <HeaderArea />

      <SDiv>
        <p>都道府県</p>

        {prefData.map((pref, index) => {
          if (index === num[count]) {
            setCount(count + 1);
            console.log(index);
            return (
              <>
                <p />
                <div>{area[count]}</div>
                <SFlex>
                  <CheckBoxArea key={pref.prefCode} prefecture={pref} />
                </SFlex>
              </>
            );
          } else {
            return (
              <SFlex>
                <CheckBoxArea key={pref.prefCode} prefecture={pref} />
              </SFlex>
            );
          }
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

const SFlex = styled.div`
  display: inline-flex;
  justify-content: start;
`;
