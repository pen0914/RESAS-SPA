import React, { memo, useContext, useState } from "react";
import { style } from "styled-components";

import { ValContext } from "../../providers/ValProvider";

export const CheckBox = memo((props) => {
  const { prefecture } = props;

  //contextでグローバルなstateを使用
  const { val, setVal } = useContext(ValContext);
  const [on, setOn] = useState(true);

  //グラフに渡すstateの管理
  const onChangeBox = (e) => {
    //チェック時,stateに格納
    if (on === true) {
      setVal([...val, e.target.value]);
      setOn(false);
    }
    //チェックを外す時,stateから削除
    else {
      setVal(val.filter((value) => value !== prefecture));
      setOn(true);
    }
  };

  return (
    <>
      <input
        type="checkbox"
        name="prefecture"
        value={`${prefecture}`}
        onChange={onChangeBox}
      />
      {prefecture}
    </>
  );
});
