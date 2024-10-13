import React from "react";

const SportCard = ({ name, count, color, icon, textColor }) => {
  return (
    <div className="flex flex-row bg-white rounded-lg border-2 h-24 items-center px-4 justify-between">
      <div className={`flex ${color} h-14 w-14 rounded-lg justify-center items-center text-white`}>
        {icon}
      </div>
      <div className="text-lg font-semibold">{name}</div>
      <div className={`text-lg font-bold ${textColor}`}>{count}</div>
    </div>
  );
};

export default SportCard;
