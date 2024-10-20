import React from "react";

const Header = ({ title, className = "text-xl" }) => {
  return (
    <div className="my-4">
      <h1 className={`${className} font-semibold`}>{title}</h1>
    </div>
  );
};

export default Header;
