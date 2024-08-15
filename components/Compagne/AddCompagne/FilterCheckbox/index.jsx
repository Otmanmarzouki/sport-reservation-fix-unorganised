import React, { useState } from "react";

const FilterCheckbox = ({ label }) => {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  return (
    <div className="flex w-1/2 items-center">
      <input
        type="checkbox"
        checked={checked}
        onChange={handleCheckboxChange}
        className="peer relative lg:h-4 lg:w-4 w-3 h-3 cursor-pointer appearance-none rounded-full border-2 border-blue-600 checked:border-blue-600 checked:bg-blue-600"
        id={label.toLowerCase()}
      />
      <label className="px-3  lg:text-sm text-xs" htmlFor={label.toLowerCase()}>
        {label}
      </label>
    </div>
  );
};
export default FilterCheckbox;
