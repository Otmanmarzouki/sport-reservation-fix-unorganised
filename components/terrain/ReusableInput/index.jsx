import React, { useState } from "react";

function ReusableInput(props) {
  const [value, setValue] = useState(props.initialValue || ""); // Set default value

  const handleChange = (event) => {
    setValue(event.target.value);
    if (props.onChange) {
      // Call parent's onChange handler if provided
      props.onChange(event.target.value);
    }
  };

  const handleIncrement = () => {
    if (props.type === "number") {
      setValue(parseInt(value) + 1);
    } else {
      setValue(value + props.incrementBy || 1); // Default increment by 1
    }
  };

  return (
    <div className="flex w-full lg:flex-row flex-col gap-2">
      <div className="flex w-full flex-row lg:space-x-2 lg:justify-start justify-evenly">
        <div className="flex justify-center">
          <input
            className="w-28 h-8 appearance-none border rounded py-1 px-2 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
            type={props.type || "text"} // Set default type to text
            value={value}
            onChange={handleChange}
          />
        </div>
        <div className="flex justify-center">
          {props.showButton && ( // Conditionally render button
            <button
              className="h-8 w-8 bg-blue-500 rounded-sm text-white text-lg"
              onClick={handleIncrement}
            >
              {props.buttonLabel || "+"} {/* Set default button label */}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ReusableInput;
