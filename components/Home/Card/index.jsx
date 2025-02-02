import React from "react";
import { FaRegEdit } from "react-icons/fa";

export default function ReservationCard({ color, title, count, iconColor }) {
  return (
    <div className="flex flex-row items-center w-full lg:w-1/3 p-4 bg-white shadow rounded-lg">
      <div className={`flex items-center justify-center h-12 w-12 text-white ${color} rounded-lg`}>
        <p className="text-lg font-semibold">{count}</p>
      </div>
      <h3 className="text-lg font-semibold text-gray-800 ml-4">{title}</h3>
      <div className="flex items-center justify-between mt-2">
        <FaRegEdit className={`${iconColor} text-lg ml-28`} />
      </div>
    </div>
  );
}
