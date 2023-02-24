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

  const getPopulationData = useCallback((code) => {
    const query = `?prefCode=${code}`;

    axios
      .get(endpoint + prefectures + query, {
        headers: header
      })
      .then((res) => {
        if (res) {
          setPopulation(res.data.result.data[0]);
        } else {
          alert("データ取得に失敗しました");
        }
      });
  }, []);

  return {
    getPopulationData,
    population,
    setPopulation
  };
};
