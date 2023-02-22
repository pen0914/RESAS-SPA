/* eslint-disabled react-hooks/exhaustive-deps */
import axios from "axios";
import { useCallback, useState } from "react";

export const AllData = () => {
  const [prefData, setPrefData] = useState([]);

  const header = {
    "X-API-KEY": "aCDP2x9uUyivsfGuaMsvHcjfdFJdnpxET3jIHmxl"
  };
  const endpoint = "https://opendata.resas-portal.go.jp/";
  const prefectures = "api/v1/prefectures";
  const getData = useCallback(() => {
    axios
      .get(endpoint + prefectures, {
        headers: header
      })
      .then((res) => setPrefData(res.data.result));
  }, []);

  return {
    getData,
    prefData
  };
};
