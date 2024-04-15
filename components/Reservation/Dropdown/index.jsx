import React from "react";

const SelectDropdown = ({ options, onSelect }) => {
  return (
    <select
      data-te-select-init
      className="py-1 rounded-md text-sm px-4 border-2"
      onChange={(e) => onSelect(e.target.value)}
    >
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default SelectDropdown;
