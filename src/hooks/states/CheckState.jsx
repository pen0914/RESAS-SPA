import { GraphContext } from "../../providers/GraphProvider";
import { SelectPopulation } from "../../hooks/axios/SelectPopulation";
import { useCallback, useContext } from "react";

export const CheckState = () => {
  const { graphData, setGraphData } = useContext(GraphContext);
  const { getPopulationData, population } = SelectPopulation();

  const CheckFunction = useCallback(
    (prefecture) => {
      const code = prefecture.prefCode;
      const name = prefecture.prefName;
      const exist = graphData.some((g) => g.name === name);

      if (exist) {
        //チェックを外す時
        //GraphDataから削除
        setGraphData(graphData.filter((g) => g.name !== name));
      }
      //チェック時
      else {
        //axiosで人口構成apiを取得
        getPopulationData(code);
        //graphDataに追加
        setGraphData([
          ...graphData,
          {
            name: name,
            label: population.label,
            data: population.data
          }
        ]);
      }
    },
    [getPopulationData, population, setGraphData, graphData]
  );

  return { CheckFunction };
};
