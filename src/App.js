import "./styles.css";
import axios from "axios";

export default function App() {
  const header = {
    "X-API-KEY": "aCDP2x9uUyivsfGuaMsvHcjfdFJdnpxET3jIHmxl"
  };
  const endpoint = "https://opendata.resas-portal.go.jp/";
  const prefectures = "api/v1/prefectures";
  const getAllData = () => {
    axios
      .get(endpoint + prefectures, {
        headers: header
      })
      .then((res) => {
        console.log(res);
      });
  };
  return (
    <div className="App">
      <button onClick={getAllData}>ここを押してね</button>
    </div>
  );
}
