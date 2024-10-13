import React from "react";

const Header = ({ title }) => {
  return (
    <div className="my-6">
      <h1 className="text-xl font-semibold">{title}</h1>
    </div>
  );
};

export default Header;
