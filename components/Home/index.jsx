import React, { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { IoFilterSharp } from "react-icons/io5";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { BsExclamationTriangle } from "react-icons/bs";

import DoughnutChart from "./Doughnut";
import LineChart from "./LineChart";
import Header from "../../Commons/Header";

export default function Acceuil() {
  const [draftCount, setDraftCount] = useState(0);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:8000/api/drafts");
        const data = await response.json();
        setDraftCount(data.draftCount);
      } catch (error) {
        console.error("Erreur lors de la récupération des réservations :", error);
      }
    }

    fetchData();
  }, []);

  const cards = [
    {
      color: "bg-blue-700",
      title: "Réservation Brouillon",
      count: draftCount,
      iconColor: "text-blue-700",
    },
    { color: "bg-blue-400", title: "Réservation en Ligne", count: 5, iconColor: "text-blue-400" },
    { color: "bg-orange-500", title: "Nouveaux Clients", count: 10, iconColor: "text-orange-500" },
  ];

  return (
    <main className="flex flex-col w-full bg-gray-100 overflow-y-auto px-4 space-y-4">
      <div className="flex flex-col lg:flex-row justify-between pt-7  lg:w-auto ">
        <Header title="Réservations" className="text-2xl" />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-[15px] hover:bg-blue-600">
          NOUVELLE RESERVATION
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-4">
        {cards.map(({ color, title, count, iconColor }, index) => (
          <div
            key={index}
            className="flex flex-row items-center w-full lg:w-1/3 p-4 bg-white shadow rounded-lg"
          >
            <div
              className={`flex items-center justify-center h-12 w-12 text-white ${color} rounded-lg`}
            >
              <p className="text-lg font-semibold">{count}</p>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 ml-4">{title}</h3>
            <div className="flex items-center justify-between mt-2">
              <FaRegEdit className={`${iconColor} text-lg ml-28`} />
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-row justify-between ">
        <div className="flex items-center">
          <IoFilterSharp className="text-gray-600 mr-2" />
          <select className="p-2 text-xs bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600">
            <option value="">Choisir un Terrain</option>
            <option value="terrain1">Terrain 1</option>
            <option value="terrain2">Terrain 2</option>
            <option value="terrain3">Terrain 3</option>
          </select>
        </div>
        <div className="flex justify-end space-x-2">
          <button className="w-14 h-8 text-xs items-center justify-center text-white bg-gray-400 rounded-md hover:bg-gray-500">
            Ce mois
          </button>
          <button className="w-20 h-8 text-xs items-center justify-center text-white bg-blue-600 rounded-md hover:bg-blue-700">
            Aujourd’hui
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-evenly gap-4">
        <div className="lg:w-2/3 w-full p-4 bg-white shadow rounded-lg">
          <LineChart />
        </div>

        <div className="flex flex-col lg:w-1/3 w-full p-4 bg-white shadow rounded-lg">
          <DoughnutChart dataValue={1500} />

          <div className="flex flex-col space-y-2 mt-4">
            <div className="flex flex-row items-center space-x-2">
              <div className="border border-blue-500 rounded-lg text-blue-500 p-1">
                <HiOutlineExclamationCircle className="text-xl" />
              </div>
              <div className="text-xs">5 Créneaux libres</div>
            </div>
            <div className="flex flex-row items-center space-x-2">
              <div className="border border-orange-400 rounded-lg text-orange-400 p-1">
                <BsExclamationTriangle className="text-xl" />
              </div>
              <div className="text-xs">10 réservations en attente de paiement</div>
            </div>
            <div className="flex flex-row items-center space-x-2">
              <div className="border border-orange-500 rounded-lg text-orange-500 p-1">
                <HiOutlineExclamationCircle className="text-xl" />
              </div>
              <div className="text-xs grow">2 réservations annulées</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
