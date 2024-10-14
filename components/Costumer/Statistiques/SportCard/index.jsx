import React from "react";
import { FaTableTennis } from "react-icons/fa";
import { MdSportsTennis } from "react-icons/md";
import { IoIosFootball } from "react-icons/io";
const SportCard = ({ name, count, color, textColor }) => {
  const icon =
    name === "Paddle" ? (
      <FaTableTennis className="text-xl" />
    ) : name === "Tennis" ? (
      <MdSportsTennis className="text-2xl" />
    ) : (
      <IoIosFootball className="text-2xl" />
    );
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
