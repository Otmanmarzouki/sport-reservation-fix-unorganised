import React, { useState } from "react";

function ReusableInput({
  type = "text",
  initialValue = "",
  className = "",
  placeholder = "",
  showButton = false,
  buttonLabel = "+",
  onChange,
}) {
  const [value, setValue] = useState(initialValue);

  const handleChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
    if (onChange) onChange(newValue);
  };

  const handleIncrement = () => {
    if (type === "number") {
      const newValue = parseInt(value || 0) + 1;
      setValue(newValue);
      if (onChange) onChange(newValue);
    }
  };

  return (
    <div className="flex w-full lg:justify-start justify-center gap-2">
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        className={`border rounded py-1 px-2 ${className}`}
        onChange={handleChange}
      />
      {showButton && (
        <button
          type="button"
          className="h-8 w-8 bg-blue-500 text-white rounded"
          onClick={handleIncrement}
        >
          {buttonLabel}
        </button>
      )}
    </div>
  );
}

export default ReusableInput;
