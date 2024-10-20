// Container.js
import React from "react";

const Container = ({ children, className = "", style = {} }) => {
  return (
    <div
      className={`flex flex-col w-full bg-gray-100 overflow-y-auto px-4 space-y-8 ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};

export default Container;
