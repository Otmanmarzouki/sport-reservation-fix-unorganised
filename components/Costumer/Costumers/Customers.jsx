import React, { useState } from "react";
import TableHeader from "./Table/TableHeader";
import TableRow from "./Table/TableRow";
import SearchBar from "./SearchBar";
import ActionButtons from "./Actions";
const clients = [
  {
    id: 1,
    name: "John Doe",
    type: "Regular",
    activity: "Running",
    dimensions: "10x20",
    capacity: 10,
    price: 20.5,
  },
  {
    id: 2,
    name: "Jane Smith",
    type: "Premium",
    activity: "Swimming",
    dimensions: "15x30",
    capacity: 15,
    price: 25.75,
  },
  {
    id: 3,
    name: "Alice Johnson",
    type: "Regular",
    activity: "Cycling",
    dimensions: "8x15",
    capacity: 8,
    price: 18.0,
  },
];

const Customers = () => {
  const [selectedRow, setSelectedRow] = useState(null);

  const handleSelectRow = (id) => {
    setSelectedRow(id === selectedRow ? null : id);
  };

  const handleEdit = () => {
    console.log("Edit client with ID:", selectedRow);
  };

  const handleDelete = () => {
    console.log("Delete client with ID:", selectedRow);
  };

  return (
    <main className="flex flex-col w-full bg-gray-100 overflow-y-auto px-2 lg:px-4 space-y-8">
      <div className="flex flex-row justify-between lg:px-6 pt-8">
        <SearchBar />
        {selectedRow && <ActionButtons onEdit={handleEdit} onDelete={handleDelete} />}
      </div>
      <div className="flex lg:justify-center lg:px-6">
        <div className="shadow-lg w-full relative overflow-x-auto bg-white rounded-lg">
          <table className="w-full text-xs lg:text-sm text-left">
            <TableHeader />
            <tbody>
              {clients.map((client, index) => (
                <TableRow key={index} client={client} onSelect={handleSelectRow} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default Customers;
