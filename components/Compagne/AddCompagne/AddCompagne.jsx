import React from "react";
import { useState } from "react";

import ClientDetails from "@/components/Compagne/AddCompagne/ClientDetails";
import CampaignDetails from "@/components/Compagne/AddCompagne/CompagneDetails";

const AddCompagne = () => {
  const [filter, setFilter] = useState("brazil"); // Default filter value

  const handleFilterChange = (value) => {
    setFilter(value);
  };

  return (
    <main className="flex w-full bg-gray-100 overflow-y-auto px-4">
      <div className="flex flex-col w-full mx-4 gap-4">
        <h1 className="text-xl font-semibold pt-8">Créer Campagne</h1>
        <ClientDetails onChangeFilter={handleFilterChange} />
        <CampaignDetails />
      </div>
    </main>
  );
};
export default AddCompagne;
