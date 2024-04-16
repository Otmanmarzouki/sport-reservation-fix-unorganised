import React, { useState } from "react";

const TableRow = ({ client, onSelect }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    onSelect(client.id);
  };

  return (
    <tr>
      <th scope="col" className="px-3 py-3">
        <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
      </th>
      <td className="px-3 py-4 font-normal text-gray-600 whitespace-nowrap">{client.name}</td>
      <td className="px-3 py-4">{client.type}</td>
      <td className="px-3 py-4">{client.activity}</td>
      <td className="px-3 py-4">{client.dimensions}</td>
      <td className="px-3 py-4">{client.capacity}</td>
      <td className="px-3 py-4">{client.price}</td>
    </tr>
  );
};

export default TableRow;
