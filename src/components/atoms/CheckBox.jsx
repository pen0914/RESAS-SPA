export const CheckBox = (props) => {
  const { onClickValue, prefecture } = props;
  return (
    <div>
      <input
        type="checkbox"
        name="prefecture"
        onClick={() => onClickValue(prefecture)}
      />
      {prefecture.prefName}
    </div>
  );
};
