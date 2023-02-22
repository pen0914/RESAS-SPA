import { GraphContext } from "../../providers/GraphProvider";
import { SelectPopulation } from "../../hooks/axios/SelectPopulation";
import { useCallback, useContext } from "react";

export const CheckState = () => {
  const { graphData, setGraphData } = useContext(GraphContext);
  const { getPopulationData, population } = SelectPopulation();

  const CheckFunction = (prefecture) => {
    const code = prefecture.prefCode;
    const name = prefecture.prefName;
    const exist = graphData.some((g) => g.name === name);
    if (exist) {
      //チェックを外す時
      setGraphData(graphData.filter((g) => g.name !== name));
    }
    //チェック時
    else {
      getPopulationData(code);
      console.log(population);
      setGraphData([
        ...graphData,
        {
          name: name,
          label: population.label,
          data: population.data
        }
      ]);
    }
  };

  return { CheckFunction };
};
