import React, { useState } from "react";

function ReusableDropdown(props) {
  const [selectedValue, setSelectedValue] = useState(props.initialValue || ""); // Set initial value

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    if (props.onChange) {
      props.onChange(event.target.value); // Call parent's onChange handler
    }
  };

  return (
    <div className="flex w-full mb-4 lg:justify-start justify-center">
      <div className="my-2 p-1 bg-white border border-gray-200 rounded w-4/5 lg:w-60">
        <select
          className="text-gray-400 w-full bg-white outline-none"
          value={selectedValue} // Set selected value from state
          onChange={handleChange}
        >
          {props.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default ReusableDropdown;
