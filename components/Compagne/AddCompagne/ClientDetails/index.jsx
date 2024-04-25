import React from "react";
import { IoFilter } from "react-icons/io5";
import FilterCheckbox from "../FilterCheckbox";

// ClientFilter component
const Clientdetails = ({ onChangeFilter }) => {
  return (
    <div className="border-[1px] border-gray-300">
      <div className="flex bg-gray-200 p-2 text-gray-600 border-b-[1px] border-gray-300">
        Les clients
      </div>
      <div className="flex flex-col bg-white px-4 gap-5">
        <div className="flex flex-row text-gray-600 pt-2">
          <div className="flex justify-center items-center mx-2">
            <h4>Filtre par :</h4>
          </div>
          <div className="flex justify-center items-center">
            <IoFilter />
          </div>
        </div>
        <div className="relative w-1/2">
          <select
            className="w-full rounded-[4px] border border-blue-gray-200 bg-transparent px-3 py-2.5 text-sm font-normal text-blue-gray-700 outline-none"
            onChange={(e) => onChangeFilter(e.target.value)}
          >
            <option value="brazil">Activités</option>
            <option value="bucharest">one</option>
            <option value="london">two</option>
          </select>
        </div>
        <div className="flex flex-row w-1/2 pb-4">
          <FilterCheckbox label="Abonné" />
          <FilterCheckbox label="Non Abonné" />
        </div>
      </div>
    </div>
  );
};
export default Clientdetails;
