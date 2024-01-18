const Checkbox = ({ item, handleChecked }) => {
  return (
    <label>
      {item.label}
      <input
        checked={item.checked}
        onChange={() => handleChecked(item.value)}
        type="checkbox"
      />
    </label>
  );
};

export default Checkbox;
