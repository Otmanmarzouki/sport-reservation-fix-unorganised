<<<<<<< HEAD
import React, { useEffect, useState } from "react"; 
import { FaTableTennis } from "react-icons/fa";
import { MdSportsTennis } from "react-icons/md";
import { IoIosFootball } from "react-icons/io";
=======
import React from "react";
>>>>>>> d9e60c44fb3658d1d15d7bca75580e5ee114370e
import SportCard from "./SportCard";
import ClientStatus from "./ClientStatus";
import Header from "../../../Commons/Header";
import SportPieChart from "./PieChart";
<<<<<<< HEAD
import { getClientsCountBySport } from "@/services/reservation/index"; 

const NombreDeClientSport = () => {
  const [sports, setSports] = useState([]); 

  const fetchSportsData = async () => {
    const sportNames = ["Paddle", "Tennis", "Foot"]; 
    const formattedSports = await Promise.all(
      sportNames.map(async (sport) => {
        try {
          const response = await getClientsCountBySport(sport); 
          return {
            name: sport,
            count: response.client_count || 0, 
            color: sport === "Paddle" ? "bg-blue-800" : sport === "Tennis" ? "bg-orange-500" : "bg-blue-300",
            icon: sport === "Paddle" ? <FaTableTennis className="text-xl" /> : sport === "Tennis" ? <MdSportsTennis className="text-2xl" /> : <IoIosFootball className="text-2xl" />,
            textColor: sport === "Paddle" ? "text-blue-800" : sport === "Tennis" ? "text-orange-500" : "text-blue-300",
          };
        } catch (error) {
          console.error(`Erreur lors de la récupération des données pour ${sport}:`, error);
          return {
            name: sport,
            count: 0, 
            color: sport === "Paddle" ? "bg-blue-800" : sport === "Tennis" ? "bg-orange-500" : "bg-blue-300",
            icon: sport === "Paddle" ? <FaTableTennis className="text-xl" /> : sport === "Tennis" ? <MdSportsTennis className="text-2xl" /> : <IoIosFootball className="text-2xl" />,
            textColor: sport === "Paddle" ? "text-blue-800" : sport === "Tennis" ? "text-orange-500" : "text-blue-300",
          };
        }
      })
    );
    setSports(formattedSports); 
  };

  useEffect(() => {
    fetchSportsData(); 
  }, []);
=======
import useSportsData from "@/hooks/useSportsData";
import Container from "@/Commons/Container";

const NombreDeClientSport = () => {
  const { sportsData, loading, error } = useSportsData();
>>>>>>> d9e60c44fb3658d1d15d7bca75580e5ee114370e

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
<<<<<<< HEAD
            <div className="flex flex-col p-2 sm:p-3 xl:p-4 ">
              <Header title="Répartition des clients par sport" className="text-xl" />
              <SportPieChart />
=======
            <div className="flex flex-col p-2 sm:p-3 xl:p-4">
              <Header title="Répartition des clients par sport" className="text-xl" />
              <SportPieChart sportsData={sportsData} />
>>>>>>> d9e60c44fb3658d1d15d7bca75580e5ee114370e
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