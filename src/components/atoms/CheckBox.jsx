import { memo, useContext, useState } from "react";

import { ValContext } from "../../providers/ValProvider";

export const CheckBox = memo((props) => {
  const { prefecture } = props;
  const { val, setVal } = useContext(ValContext);
  const [on, setOn] = useState(true);

  const onChangeBox = (e) => {
    if (on === true) {
      setVal([...val, e.target.value]);
      setOn(false);
    } else {
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
