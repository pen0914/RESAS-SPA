import React, { memo, useContext, useState } from "react";
import { style } from "styled-components";
import { OnOffContext } from "../../providers/OnOffProvider";

import { ValContext } from "../../providers/ValProvider";

export const CheckBox = memo((props) => {
  const { prefecture } = props;

  //contextでグローバルなstateを使用
  const { setVal } = useContext(ValContext);
  const { on, setOn } = useContext(OnOffContext);

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
