/* eslint-disabled react-hooks/exhaustive-deps */
import axios from "axios";
import { useCallback, useState } from "react";

export const SelectPopulation = () => {
  const [population, setPopulation] = useState([
    { label: "0", data: { year: 0, value: 0 } }
  ]);

  const header = {
    "X-API-KEY": "aCDP2x9uUyivsfGuaMsvHcjfdFJdnpxET3jIHmxl"
  };
  const endpoint = "https://opendata.resas-portal.go.jp/";
  const prefectures = `api/v1/population/composition/perYear`;

  const getPopulationData = useCallback((val) => {
    const query = `?prefCode=${val.prefCode}`;
    console.log(val.prefCode);
    axios
      .get(endpoint + prefectures + query, {
        headers: header
      })
      .then((res) => {
        setPopulation(res.data.result.data[0]);
      });
  }, []);

  return {
    getPopulationData,
    population
  };
};
