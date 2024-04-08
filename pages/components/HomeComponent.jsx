import React from "react";

import { FaRegEdit } from "react-icons/fa";

import { HiOutlineExclamationCircle } from "react-icons/hi";
import { BsExclamationTriangle } from "react-icons/bs";

import MyDoughnut from "./SubComponents/Mydoughnut";
import MylineHomeChart from "./SubComponents/MylineHomeChart";

export default function Acceuil() {
  return (
    <>
      <main className="flex flex-col w-full bg-gray-100 overflow-y-auto px-4 space-y-4">
        <div className="flex w-full space-y-2"></div>
        <div className="flex flex-col lg:flex-row gap-2">
          <div className="flex w-full items-center p-4 bg-white shadow rounded-lg justify-between">
            <div className="inline-flex flex-shrink-0 items-center justify-center h-12 w-12 text-white bg-blue-700 rounded-lg mr-3">
              <p className="text-lg font-semibold">5</p>
            </div>
            <span className="block text-lg font-bold text-blue-700">
              <FaRegEdit />
            </span>
          </div>
          <div className="flex w-full items-center p-4 bg-white shadow rounded-lg justify-between">
            <div className="inline-flex flex-shrink-0 items-center justify-center h-12 w-12 text-white bg-blue-400 rounded-lg mr-3">
              <p className="text-lg font-semibold">5</p>
            </div>
            <span className="block text-lg font-bold text-blue-700">
              <FaRegEdit />
            </span>
          </div>
          <div className="flex w-full items-center p-4 bg-white shadow rounded-lg justify-between">
            <div className="inline-flex flex-shrink-0 items-center justify-center h-12 w-12 text-white bg-orange-500 rounded-lg mr-3">
              <p className="text-lg font-semibold">5</p>
            </div>
            <span className="block text-lg font-bold text-blue-700">
              <FaRegEdit />
            </span>
          </div>
        </div>
        <div className="flex flex-col h-6 my-2 text-sm font-semibold rounded-md space-x-1 justify-end">
          <div className="flex flex-row justify-end space-x-2">
            <button className="w-14 h-8 text-xs items-center justify-center text-white bg-gray-400 rounded-md">
              Ce mois
            </button>
            <button className="w-20 h-8 text-xs items-center justify-center text-white bg-blue-600 rounded-md">
              Aujourd’hui
            </button>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-evenly gap-4">
          <div className="lg:w-2/3 w-full p-4 bg-white shadow rounded-lg">
            <MylineHomeChart />
          </div>
          <div className="flex flex-col lg:w-1/3 w-full p-4 bg-white shadow rounded-lg">
            <div className="h-80">
              <MyDoughnut />
            </div>
            <div className="flex flex-col space-y-2">
              <div className="flex flex-row items-center space-x-1">
                <div className="border border-blue-500 rounded-lg text-blue-500 p-1">
                  <HiOutlineExclamationCircle className="text-xl" />
                </div>
                <div className="text-xs">5 Créneaux libres</div>
              </div>
              <div className="flex flex-row items-center space-x-1">
                <div className="border border-orange-400 rounded-lg text-orange-400 p-1">
                  <BsExclamationTriangle className="text-xl" />
                </div>
                <div className="text-xs">10 réservations en attente de paiement</div>
              </div>
              <div className="flex flex-row items-center space-x-1">
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
