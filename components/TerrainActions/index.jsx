import React from "react";
import { RxDotFilled } from "react-icons/rx";
import { HiOutlineViewGridAdd } from "react-icons/hi";

const TerrainActions = () => {
  return (
    <div className="bg-white shadow rounded-lg p-2 space-y-4">
      <div className="flex flex-row justify-between px-5 py-4">
        <div className="px-2">
          <h2 className="font-bold text-black">Actions</h2>
        </div>
        <div className="flex flex-row items-center">
          <HiOutlineViewGridAdd className="text-blue-400 text-2xl" />
        </div>
      </div>
      <div className="px-2">
        <div className="flex flex-col">
          <div className="flex flex-row items-center">
            <RxDotFilled className="text-orange-400 text-4xl" />
            <h4 className="text-sm">Créneau disponible</h4>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row items-center space-x-1">
            <RxDotFilled className="text-grey-400 text-4xl" />
            <h4 className="text-sm">Créneau réservé</h4>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row items-center space-x-1">
            <RxDotFilled className="text-blue-400 text-4xl" />
            <h4 className="text-sm">Joueurs</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TerrainActions;
