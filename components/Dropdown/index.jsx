import React from "react";

function ReusableDropdown({ value, options = [], onChange }) {
  return (
    <div className="flex w-full lg:justify-start justify-center">
      <div className="my-2 p-1 bg-white border border-gray-200 rounded w-4/5 lg:w-60">
        <select
          className="text-gray-400 w-full bg-white outline-none"
          value={value || ""}
          onChange={(e) => onChange(e.target.value)}
        >
          <option value="" disabled>
            Select an option
          </option>
          {options.length > 0 ? (
            options.map((option) => (
              <option key={option.value} value={option.label}>
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
