import React from "react";

export default function SelectComponent({ id, label, options }) {
  return (
    <div className="flex w-1/2">
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <select
        id={id}
        data-te-select-init
        className="p-1 outline-none rounded text-xs lg:text-sm border border-gray-300"
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
