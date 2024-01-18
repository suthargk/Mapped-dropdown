import { useEffect, useState } from "react";
import DropdownOverlay from "./DropdownOverlay";

const Dropdown = ({ title = "", list, handleApply }) => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(true);

  return (
    <div className="dropdown">
      <div
        className="control"
        onClick={() => setIsDropDownOpen(!isDropDownOpen)}
      >
        <h3>{title}</h3>
      </div>

      {isDropDownOpen && (
        <DropdownOverlay
          list={list}
          handleApply={handleApply}
          setIsDropDownOpen={setIsDropDownOpen}
        />
      )}
    </div>
  );
};

export default Dropdown;
