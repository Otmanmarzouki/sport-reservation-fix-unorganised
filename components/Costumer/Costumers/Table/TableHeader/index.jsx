import React from "react";

const TableHeader = () => {
  return (
    <thead className="text-xs text-gray-500 font-thin">
      <tr>
        <th scope="col" className="px-3 py-3"></th>
        <th scope="col" className="px-3 py-3">
          Nom
        </th>
        <th scope="col" className="px-3 py-3">
          Prénom
        </th>
        <th scope="col" className="px-3 py-3">
          Email
        </th>
        <th scope="col" className="px-3 py-3">
          Telephone
        </th>
        <th scope="col" className="px-3 py-3">
          Date inscription
        </th>
        <th scope="col" className="px-3 py-3">
          Status
        </th>
      </tr>
    </thead>
  );
};

export default TableHeader;
