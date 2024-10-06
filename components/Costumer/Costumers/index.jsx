import React, { useEffect, useState } from "react";
import TableHeader from "./Table/TableHeader";
import TableRow from "./Table/TableRow";
import SearchBar from "./SearchBar";
import ActionButtons from "./Actions";
import { fetchClients, deleteClient } from "@/services/client/index";

const Customers = () => {
  const [selectedRow, setSelectedRow] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const [filteredClients, setFilteredClients] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedClient = await fetchClients();
      setFilteredClients(fetchedClient);
    };
    fetchData();
  }, []);

  const handleDelete = async () => {
    const confirmDelete = window.confirm("Êtes-vous sûr de vouloir supprimer ce client?");
    if (!confirmDelete) return;

    const success = await deleteClient(selectedRow);
    if (success) {
      setFilteredClients(filteredClients.filter((client) => client.id !== selectedRow));
      setSelectedRow(null);
    }
  };

  const handleSelectRow = (id) => {
    setSelectedRow(id === selectedRow ? null : id);
  };

  const handleEdit = () => {
    console.log("Edit client with ID:", selectedRow);
  };

  const handleSearchChange = (searchValue) => {
    setSearchValue(searchValue);
  };

  return (
    <main className="flex flex-col w-full bg-gray-100 overflow-y-auto px-2 lg:px-4 space-y-8">
      <div className="flex flex-row justify-between lg:px-6 pt-8">
        <SearchBar onSearchChange={handleSearchChange} />
        {selectedRow && <ActionButtons onEdit={handleEdit} onDelete={handleDelete} />}
      </div>
      <div className="flex lg:justify-center lg:px-6">
        <div className="shadow-lg w-full relative overflow-x-auto bg-white rounded-lg">
          <table className="w-full text-xs lg:text-sm text-left">
            <TableHeader />
            <tbody>
              {filteredClients.map((client, index) => (
                <TableRow
                  key={index}
                  client={client}
                  onSelect={handleSelectRow}
                  isSelected={selectedRow === client.id}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default Customers;
