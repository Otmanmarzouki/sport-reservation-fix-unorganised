import React from "react";
import TerrainCalendar from "@/components/terrain/Calendar";
import TerrainActions from "@/components/TerrainActions";
import SearchForm from "@/components/SearchForm";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const TerrainDispoComponent = () => {
  const slotLabelFormat = {
    hour: "numeric",
    minute: "2-digit",
  };

  return (
    <main className="flex w-full bg-gray-100 overflow-y-auto px-4">
      <div className="flex flex-col w-full space-y-8 py-8">
        <div className=" flex flex-col lg:flex-row justify-around   gap-4 ">
          <div className=" flex lg:w-3/5 flex-row justify-between ">
            <div className="flex flex-row ">
              <IoIosArrowBack className="py-2 text-3xl lg:text-4xl" />
              <h1 className="font-semibold text-lg lg:text-3xl">Terrain 1</h1>
              <IoIosArrowForward className="py-2 text-3xl lg:text-4xl" />
            </div>
            <div className="flex mx-2 ">
              <button className="flex px-3 py-2 text-white bg-blue-400 rounded-md text-xs lg:text-sm">
                Ajouter un Terrain
              </button>
            </div>
          </div>
          <div className=" lg:w-1/5 w-full ">
            <SearchForm />
          </div>
        </div>
        <div className="flex lg:flex-row flex-col gap-4 justify-around">
          <div className="lg:w-3/5 w-full">
            <TerrainCalendar slotLabelFormat={slotLabelFormat} />
          </div>
          <div className="lg:w-1/5 w-full pb-5">
            <TerrainActions />
          </div>
        </div>
      </div>
    </main>
  );
};

export default TerrainDispoComponent;
