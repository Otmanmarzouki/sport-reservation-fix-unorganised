import React from "react";

import { MdSportsTennis, MdShowChart } from "react-icons/md";
import { IoIosFootball } from "react-icons/io";
import { FaTableTennis } from "react-icons/fa";
import { RxDotFilled } from "react-icons/rx";
import { AiOutlineFall, AiOutlineRise } from "react-icons/ai";

const NombreDeClientSport = () => {
  return (
    <>
      <main className="flex w-full bg-gray-100 overflow-y-auto px-4">
        <div className=" w-full bg-gray-100 p-4 ">
          <div className="my-6">
            <h1 className="text-xl font-semibold ">Nombre de client par sport</h1>
          </div>
          <div className=" mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3  gap-8">
            <div className=" flex flex-row bg-white rounded-lg  border-2 h-24  items-center px-4 justify-between">
              <div className=" flex bg-blue-800 h-14 w-14  rounded-lg justify-center items-center  text-white  ">
                <FaTableTennis className="text-xl" />
              </div>
              <div className="text-lg font-semibold ">Paddle</div>
              <div className="text-lg font-bold text-blue-800">90</div>
            </div>
            <div className=" flex flex-row bg-white rounded-lg  border-2 h-24  items-center px-4 justify-between">
              <div className=" flex bg-orange-500 h-14 w-14  rounded-lg justify-center items-center  text-white ">
                <MdSportsTennis className="text-2xl" />
              </div>
              <div className="text-lg font-semibold ">Tennis</div>
              <div className="text-lg font-bold text-orange-500">50</div>
            </div>
            <div className=" flex flex-row bg-white rounded-lg  border-2 h-24  items-center px-4 justify-between">
              <div className=" flex bg-blue-300 h-14 w-14  rounded-lg justify-center items-center  text-white ">
                <IoIosFootball className="text-2xl" />
              </div>
              <div className="text-lg font-semibold ">foot</div>
              <div className="text-lg font-bold text-blue-300">100</div>
            </div>
          </div>
          <div className=" mx-auto grid grid-cols-1 xl:grid-cols-3 gap-8">
            <div className="p-2 sm:p-3 xl:p-4  xl:col-span-2">
              <div className="px-2">
                <h2 className="text-lg font-bold">Répartition des clients par sport</h2>
              </div>
            </div>
            <div className=" flex flex-col p-2 sm:p-3 xl:p-4  space-y-4">
              <div className="px-2">
                <h2 className="text-xs font-bold">Nombre de client par statut</h2>
              </div>

              <div className="bg-white shadow rounded-lg p-2   sm:p-3 xl:p-4 ">
                <div className="flex flex-col">
                  <div className="flex flex-row items-center space-x-1 ">
                    <RxDotFilled className="text-green-400" />
                    <h3>Abonné</h3>
                  </div>
                  <div className="flex flex-row items-center justify-around ">
                    <div className=" font-semibold text-lg">
                      <h3>100</h3>
                    </div>

                    <div className="flex flex-row justify-center items-center space-x-2">
                      <AiOutlineRise className="text-blue-400 text-lg" />
                      <h3 className="text-blue-400">5.4%</h3>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex flex-row items-center space-x-1 ">
                    <RxDotFilled className="text-orange-400" />
                    <h3>Non abonnés</h3>
                  </div>
                  <div className="flex flex-row items-center justify-around ">
                    <div className=" font-semibold text-lg">
                      <h3>100</h3>
                    </div>

                    <div className="flex flex-row justify-center items-center space-x-2">
                      <AiOutlineFall className="text-orange-400 text-lg" />
                      <h3 className="text-orange-400">0.4 %</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default NombreDeClientSport;
