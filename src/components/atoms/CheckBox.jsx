import { memo, useState } from "react";

export const CheckBox = memo((props) => {
  const { prefecture } = props;
  const [val, setVal] = useState();

  const onChangeBox = (e) => {
    setVal(e.target.value);
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
