import React from "react";
import { FaTableTennis } from "react-icons/fa";
import { MdSportsTennis } from "react-icons/md";
import { IoIosFootball } from "react-icons/io";
import SportCard from "./SportCard";
import ClientStatus from "./ClientStatus";
import Header from "./Header";
import SportPieChart from "./PieChart";

const NombreDeClientSport = () => {
  const sports = [
    {
      name: "Paddle",
      count: 90,
      color: "bg-blue-800",
      icon: <FaTableTennis className="text-xl" />,
      textColor: "text-blue-800",
    },
    {
      name: "Tennis",
      count: 50,
      color: "bg-orange-500",
      icon: <MdSportsTennis className="text-2xl" />,
      textColor: "text-orange-500",
    },
    {
      name: "Foot",
      count: 100,
      color: "bg-blue-300",
      icon: <IoIosFootball className="text-2xl" />,
      textColor: "text-blue-300",
    },
  ];

  return (
    <main className="flex w-full bg-gray-100 overflow-y-auto px-4">
      <div className="w-full bg-gray-100 p-4">
        <Header title="Nombre de client par sport" className="text-2xl" />

        <div className="mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {sports.map((sport, index) => (
            <SportCard key={index} {...sport} />
          ))}
        </div>

        <div className="flex flex-col xl:flex-row mx-auto gap-8 justify-between">
          <div className=" lg:w-1/3 w-full">
            <div className="flex flex-col p-2 sm:p-3 xl:p-4 ">
              <Header title="Répartition des clients par sport" className="text-xl" />

              <SportPieChart />
            </div>
          </div>
          <div className="lg:w-1/3 w-full">
            <div className="flex flex-col p-2 sm:p-3 xl:p-4 ">
              <Header title="Nombre de client par statut" className="text-sm font-bold" />

              <ClientStatus />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NombreDeClientSport;
