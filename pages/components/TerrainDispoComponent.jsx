import React from "react";

import { RxDotFilled } from "react-icons/rx";
import { HiOutlineViewGridAdd } from "react-icons/hi";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";

const TerrainDispoComponent = () => {
  const slotLabelFormat = {
    hour: "numeric",
    minute: "2-digit",
  };

  return (
    <>
      <main className="flex w-full bg-gray-100 overflow-y-auto px-4">
        <div className="flex flex-col w-full space-y-8 py-8 ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            <div className="flex  flex-col justify-center space-y-10">
              <div className="flex flex-row  justify-between ">
                <div className="flex flex-row space-x-2  ">
                  <div className=" flex align-middle">
                    <IoIosArrowBack className="py-2  text-3xl lg:text-4xl" />
                  </div>
                  <div className=" flex lign-middle ">
                    <h1 className=" font-semibold text-lg  lg:text-3xl  ">Terrain 1</h1>
                  </div>
                  <div className=" flex align-middle">
                    <IoIosArrowForward className="py-2 text-3xl lg:text-4xl" />
                  </div>
                </div>
                <div className=" flex lign-middle ">
                  <button className="flex px-3 py-2 text-white bg-blue-400 rounded-md   text-xs lg:text-sm">
                    Ajouter un Terrain
                  </button>
                </div>
              </div>
              <FullCalendar
                plugins={[timeGridPlugin]}
                initialView="timeGridDay"
                headerToolbar={false}
                dayHeaders={false}
                allDaySlot={false}
                dayCount={2}
                locale={"fr"}
                slotLabelFormat={slotLabelFormat}
              />
            </div>

            <div className="flex flex-col">
              <div className=" lg:px-10 space-y-10 ">
                <div>
                  <form method="GET">
                    <div className="relative text-gray-600 focus-within:text-gray-400">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                        <button
                          type="submit"
                          className="p-1 focus:outline-none focus:shadow-outline"
                        >
                          <svg
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            viewBox="0 0 24 24"
                            className="w-6 h-6"
                          >
                            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                          </svg>
                        </button>
                      </span>
                      <input
                        type="search"
                        name="q"
                        className=" flex w-full py-2 text-sm text-gray-600 bg-white rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900"
                        placeholder="Rechercher joueur."
                        autocomplete="off"
                      />
                    </div>
                  </form>
                </div>
                <div className="bg-white shadow rounded-lg p-2   space-y-4">
                  <div className="flex flex-row justify-between px-5 py-4">
                    <div className="px-2">
                      <h2 className=" font-bold text-black">Actions</h2>
                    </div>
                    <div className="flex flex-row items-center  ">
                      <HiOutlineViewGridAdd className="text-blue-400 text-2xl" />
                    </div>
                  </div>

                  <div className="px-2">
                    <div className="flex flex-col">
                      <div className="flex flex-row items-center  ">
                        <RxDotFilled className="text-orange-400 text-4xl" />
                        <h4 className="text-sm">Créneau disponible</h4>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <div className="flex flex-row items-center space-x-1 ">
                        <RxDotFilled className="text-grey-400 text-4xl" />
                        <h4 className="text-sm">Créneau réservé</h4>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <div className="flex flex-row items-center space-x-1 ">
                        <RxDotFilled className="text-blue-400 text-4xl" />
                        <h4 className="text-sm">Joueurs</h4>
                      </div>
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

export default TerrainDispoComponent;
