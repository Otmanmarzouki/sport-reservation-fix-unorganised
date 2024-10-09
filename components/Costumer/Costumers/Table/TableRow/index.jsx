import React from "react";
import { useRouter } from "next/router";

const TableRow = ({ client, onSelect, isSelected }) => {
  const router = useRouter();

  const handleCheckboxChange = (event) => {
    event.stopPropagation();
    onSelect(client.id);
  };

  const handleRowClick = () => {
    router.push(`/clients/${client.id}`);
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
          onClick={(e) => e.stopPropagation()}
        />
      </th>
      <td
        className={`px-3 py-4 font-normal whitespace-nowrap cursor-pointer ${
          isSelected ? "text-black" : "text-gray-500"
        }`}
      >
        {client.Prenom}
      </td>
      <td className={`px-3 py-4 cursor-pointer ${isSelected ? "text-black" : "text-gray-500"}`}>
        {client.Nom}
      </td>
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
