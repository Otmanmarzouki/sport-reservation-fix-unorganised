import React from "react";

function ReusableButton(props) {
  const { className, label, onClick } = props;

  return (
    <div className="flex justify-center ">
      <button className={className} onClick={onClick}>
        {label}
      </button>
    </div>
  );
}

export default ReusableButton;
