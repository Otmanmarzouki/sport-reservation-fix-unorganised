import React from "react";
import { FiSearch } from "react-icons/fi";

export default function SearchInput() {
  return (
    <div className="flex items-center bg-white shadow-md rounded-lg px-4 py-2 ">
      <FiSearch className="text-blue-500 w-5 h-5" />

      <input
        type="text"
        placeholder="Rechercher joueur"
        className="ml-2 w-full bg-transparent text-gray-500 placeholder-gray-400 focus:outline-none"
      />
    </div>
  );
}
