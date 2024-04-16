import React from "react";

const TableHeader = () => {
  return (
    <thead className="text-xs text-gray-500 font-thin">
      <tr>
        <th scope="col" className="px-3 py-3"></th>
        <th scope="col" className="px-3 py-3">
          Nom Terrain
        </th>
        <th scope="col" className="px-3 py-3">
          Type de terrain
        </th>
        <th scope="col" className="px-3 py-3">
          Activité
        </th>
        <th scope="col" className="px-3 py-3">
          Dimensions
        </th>
        <th scope="col" className="px-3 py-3">
          Capacité max
        </th>
        <th scope="col" className="px-3 py-3">
          Prix par heure (par personne)
        </th>
      </tr>
    </thead>
  );
};

export default TableHeader;
