import "./styles.css";

import styled from "styled-components";
import { CheckBox } from "./components/atoms/CheckBox";
import { useEffect } from "react";

import { AllData } from "./hooks/AllData";

export default function App() {
  const { getData, pref } = AllData();
  useEffect(() => getData(), []);

  return (
    <>
      <SDiv>Title</SDiv>
      <SDiv>
        <p>都道府県</p>
        <div>
          {pref.map((pref) => (
            <CheckBox key={pref.prefCode} prefecture={pref.prefName} />
          ))}
        </div>
      </SDiv>
      <SDiv>人口数</SDiv>
    </>
  );
}

const SDiv = styled.div`
  text-align: center;
`;
