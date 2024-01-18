import { useEffect, useState } from "react";
import Checkbox from "./Checkbox";

const DropdownOverlay = ({ setIsDropDownOpen, handleApply, list }) => {
  const [selectedValues, setSelectedValues] = useState(list);
  const areAllSelected = selectedValues.every((item) => item.checked);

  useEffect(() => {
    setSelectedValues(list);
  }, [JSON.stringify(list)]);

  const handleChecked = (value) => {
    let values = [];
    if (value === "all") {
      values = selectedValues.map((item) => ({
        ...item,
        checked: !areAllSelected,
      }));
    } else {
      values = selectedValues.map((item) =>
        item.value === value ? { ...item, checked: !item.checked } : item
      );
    }

    setSelectedValues(values);
  };

  return (
    <div className="dropdown-list-container">
      <button onClick={() => setIsDropDownOpen(false)}>Close</button>

      <Checkbox
        handleChecked={handleChecked}
        item={{ value: "all", label: "All", checked: areAllSelected }}
      />
      {selectedValues.map((item) => {
        return <Checkbox item={item} handleChecked={handleChecked} />;
      })}
      <button onClick={() => handleApply(selectedValues)}>Apply</button>
    </div>
  );
};

export default DropdownOverlay;
