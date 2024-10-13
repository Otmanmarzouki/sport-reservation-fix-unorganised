import React from "react";
import { RxDotFilled } from "react-icons/rx";
import { AiOutlineFall, AiOutlineRise } from "react-icons/ai";

const ClientStatus = () => {
  const statuses = [
    {
      name: "Abonné",
      count: 100,
      change: "5.4%",
      color: "text-green-400",
      icon: <AiOutlineRise className="text-blue-400 text-lg" />,
      textColor: "text-blue-400",
    },
    {
      name: "Non abonnés",
      count: 100,
      change: "0.4%",
      color: "text-orange-400",
      icon: <AiOutlineFall className="text-orange-400 text-lg" />,
      textColor: "text-orange-400",
    },
  ];

  return (
    <div className="bg-white  shadow rounded-lg p-2 sm:p-3 xl:p-4">
      {statuses.map((status, index) => (
        <div className="flex flex-col" key={index}>
          <div className="flex flex-row items-center space-x-1">
            <RxDotFilled className={status.color} />
            <h3>{status.name}</h3>
          </div>
          <div className="flex flex-row items-center justify-around">
            <div className="font-semibold text-lg">
              <h3>{status.count}</h3>
            </div>
            <div className="flex flex-row justify-center items-center space-x-2">
              {status.icon}
              <h3 className={status.textColor}>{status.change}</h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ClientStatus;
