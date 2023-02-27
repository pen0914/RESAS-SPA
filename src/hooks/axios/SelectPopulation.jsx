/* eslint-disabled react-hooks/exhaustive-deps */
import axios from "axios";
import { useCallback, useContext } from "react";
import { PopulationContext } from "../../providers/PopulationProvider";

export const SelectPopulation = () => {
  const { setPopulation } = useContext(PopulationContext);

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
    getPopulationData
  };
};
