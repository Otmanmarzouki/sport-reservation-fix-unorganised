import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = ({ onSearchChange }) => {
  const handleSearchChange = (event) => {
    onSearchChange(event.target.value);
  };

  return (
    <div className="flex flex-row mx-2">
      <button className="bg-white text-blue-500 p-1 lg:p-2 rounded-l-md">
        <AiOutlineSearch />
      </button>
      <input
        type="text"
        name="search"
        className="w-28 lg:w-96 rounded-r-md bg-white text-xs outline-none"
        placeholder="Rechercher Joueur"
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default SearchBar;
