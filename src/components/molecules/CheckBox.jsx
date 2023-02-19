import React, { memo, useContext, useState } from "react";
import { style } from "styled-components";

import { ValContext } from "../../providers/ValProvider";

export const CheckBox = memo((props) => {
  const { prefecture } = props;

  //contextでグローバルなstateを使用
  const { setVal } = useContext(ValContext);
  const [on, setOn] = useState(true);

  const onChangeBox = (e) => {
    //チェック時,stateに格納
    if (on === true) {
      setVal(e.target.value);
      setOn(false);
    }
    //チェックを外す時
    else {
      setOn(true);
    }
  };

  /* //Graph.jsxで使用
 const prefCode = prefecture.prefCode;

  const onChangeBox = (e) => {
    //チェック時,stateに格納
    if (on === true) {
      setVal([...val, e.target.value]);
      console.log(prefCode);
      setOn(false);
    }
    //チェックを外す時,stateから削除
    else {
      setVal(val.filter((value) => value !== `${prefCode}`));
      setOn(true);
    }
  }; 
 */

  return (
    <>
      <input
        type="checkbox"
        name="prefecture"
        value={`${prefecture.prefCode}`}
        onChange={onChangeBox}
      />
      {prefecture.prefName}
    </>
  );
});
