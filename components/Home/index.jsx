import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { BsExclamationTriangle } from "react-icons/bs";

import DoughnutChart from "./Doughnut";
import LineChart from "./LineChart";

export default function Acceuil() {
  return (
    <>
      <main className="flex flex-col w-full bg-gray-100 overflow-y-auto px-4 space-y-4">
        {/* Top Summary Cards */}
        <div className="flex flex-col lg:flex-row gap-2">
          {[{ color: "bg-blue-700" }, { color: "bg-blue-400" }, { color: "bg-orange-500" }].map(
            (item, index) => (
              <div
                key={index}
                className="flex w-full items-center p-4 bg-white shadow rounded-lg justify-between"
              >
                <div
                  className={`inline-flex flex-shrink-0 items-center justify-center h-12 w-12 text-white ${item.color} rounded-lg mr-3`}
                >
                  <p className="text-lg font-semibold">5</p>
                </div>
                <span className="block text-lg font-bold text-blue-700">
                  <FaRegEdit />
                </span>
              </div>
            ),
          )}
        </div>

        {/* Timeframe Buttons */}
        <div className="flex flex-row justify-end space-x-2">
          <button className="w-14 h-8 text-xs items-center justify-center text-white bg-gray-400 rounded-md hover:bg-gray-500">
            Ce mois
          </button>
          <button className="w-20 h-8 text-xs items-center justify-center text-white bg-blue-600 rounded-md hover:bg-blue-700">
            Aujourd’hui
          </button>
        </div>

        {/* Main Charts and Info Cards */}
        <div className="flex flex-col lg:flex-row justify-evenly gap-4">
          {/* Line Chart Section */}
          <div className="lg:w-2/3 w-full p-4 bg-white shadow rounded-lg">
            <LineChart />
          </div>

          {/* Doughnut Chart and Info Section */}
          <div className="flex flex-col lg:w-1/3 w-full p-4 bg-white shadow rounded-lg">
            <DoughnutChart dataValue={1500} />

            <div className="flex flex-col space-y-2 mt-4">
              {/* Information Rows */}
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
    </>
  );
}
