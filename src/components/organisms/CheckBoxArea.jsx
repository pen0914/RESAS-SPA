import { useState } from "react";

export const CheckBoxArea = () => {
  const area = [
    "北海道",
    "東北",
    "関東",
    "中部",
    "近畿",
    "中国",
    "四国",
    "九州"
  ];
  const num = [0, 7, 14, 23, 30, 35, 39];
  const [count, setCount] = useState(0);
  const [boolean, setBoolean] = useState(false);

  if (index === num[count]) {
    setCount(count + 1);
    <>
      <p />
      <div>{area[count]}</div>
      <SFlex>
        <CheckBoxArea key={pref.prefCode} prefecture={pref} />
      </SFlex>
    </>;
  } else {
    <SFlex>
      <CheckBoxArea key={pref.prefCode} prefecture={pref} />
    </SFlex>;
  }

  return {};
};
