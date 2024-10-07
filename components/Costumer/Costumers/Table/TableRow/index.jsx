import React, { useState } from "react";

const TableRow = ({ client, onSelect, isSelected }) => {
  const handleCheckboxChange = () => {
    onSelect(client.id);
  };
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
  };
  return (
    <tr className={`${isSelected ? "bg-gray-200" : "bg-gray-100"}`}>
      <th scope="col" className="px-3 py-3">
        <input
          type="checkbox"
          checked={isSelected}
          onChange={handleCheckboxChange}
          className="cursor-pointer"
        />
      </th>
      <td
        className={`px-3 py-4 font-normal whitespace-nowrap ${
          isSelected ? "text-black" : "text-gray-500"
        }`}
      >
        {client.Prenom}
      </td>
      <td className={`px-3 py-4 ${isSelected ? "text-black" : "text-gray-500"}`}>{client.Nom}</td>
      <td className={`px-3 py-4 ${isSelected ? "text-black" : "text-gray-500"}`}>{client.Email}</td>
      <td className={`px-3 py-4 ${isSelected ? "text-black" : "text-gray-500"}`}>{client.Tel}</td>
      <td className={`px-3 py-4 ${isSelected ? "text-black" : "text-gray-500"}`}>
        {formatDate(client.created_at)}
      </td>

      <td className="px-3 py-4"></td>
    </tr>
  );
};

export default TableRow;
