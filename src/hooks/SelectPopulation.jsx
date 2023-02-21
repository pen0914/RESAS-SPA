/* eslint-disabled react-hooks/exhaustive-deps */
import axios from "axios";
import { useCallback, useState } from "react";

export const SelectPopulation = () => {
  const [population, setPopulation] = useState([{ year: 0, value: 0 }]);

  const header = {
    "X-API-KEY": "aCDP2x9uUyivsfGuaMsvHcjfdFJdnpxET3jIHmxl"
  };
  const endpoint = "https://opendata.resas-portal.go.jp/";
  const prefectures = `api/v1/population/composition/perYear`;

  const getPopulationData = useCallback((val) => {
    const query = `?prefCode=${val}`;
    axios
      .get(endpoint + prefectures + query, {
        headers: header
      })
      .then((res) => {
        setPopulation(res.data.result.data[0].data);
      });
  }, []);

  return {
    getPopulationData,
    population
  };
};
