import React, { useEffect, useState } from "react"; 
import { FaTableTennis } from "react-icons/fa";
import { MdSportsTennis } from "react-icons/md";
import { IoIosFootball } from "react-icons/io";
import SportCard from "./SportCard";
import ClientStatus from "./ClientStatus";
import Header from "../../../Commons/Header";
import SportPieChart from "./PieChart";
import useSportsData from "@/hooks/useSportsData";
import Container from "@/Commons/Container";

const NombreDeClientSport = () => {
  const { sportsData, loading, error } = useSportsData();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <Container>
      <div className="w-full bg-gray-100 ">
        <Header title="Nombre de client par sport" className="text-2xl" />
        <div className="mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {sportsData.map((sport, index) => (
            <SportCard key={index} {...sport} />
          ))}
        </div>
        <div className="flex flex-col xl:flex-row mx-auto gap-8 justify-between">
          <div className="lg:w-1/3 w-full">
            <div className="flex flex-col p-2 sm:p-3 xl:p-4">
              <Header title="Répartition des clients par sport" className="text-xl" />
              <SportPieChart sportsData={sportsData} />
            </div>
          </div>
          <div className="lg:w-1/3 w-full">
            <div className="flex flex-col p-2 sm:p-3 xl:p-4">
              <Header title="Nombre de client par statut" className="text-sm font-bold" />
              <ClientStatus />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default NombreDeClientSport;