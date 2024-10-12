import React, { useState } from "react";

function ReusableDropdown({ initialValue, options = [], onChange }) {
  const [selectedValue, setSelectedValue] = useState(initialValue || "");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    if (onChange) {
      onChange(event.target.value);
    }
  };

  return (
    <div className="flex w-full lg:justify-start justify-center">
      <div className="my-2 p-1 bg-white border border-gray-200 rounded w-4/5 lg:w-60">
        <select
          className="text-gray-400 w-full bg-white outline-none"
          value={selectedValue}
          onChange={handleChange}
        >
          {options.length > 0 ? (
            options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))
          ) : (
            <option disabled>No options available</option>
          )}
        </select>
      </div>
    </div>
  );
}

export default ReusableDropdown;
