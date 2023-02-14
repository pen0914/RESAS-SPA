import axios from "axios";
import { useState } from "react";

export const Requests = () => {
  const [data, setData] = useState();

  const config = {
    headers: {
      APIKey: "aCDP2x9uUyivsfGuaMsvHcjfdFJdnpxET3jIHmxl"
    }
  };

  const endpoint = "https://opendata.resas-portal.go.jp/";
  const prefectures = "api/v1/prefectures";
  const getAllData = () => {
    axios.get(endpoint + prefectures, config).then((res) => {
      console.log(res);
    });
  };
};
