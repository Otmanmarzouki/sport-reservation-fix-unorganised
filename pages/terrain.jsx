import React from "react";

import Layout from "./Layout/Layout";
import HomeComponent from "./components/HomeComponent";
import ShowTerrains from "./components/ShowTerrains";
import Support from "./components/Support";
import TerrainDispoComponent from "./components/TerrainDispoComponent";
import NouvelleReservationComponent from "./components/NouvelleReservationComponent";
import AddTerrains from "./components/AddTerrains";
import ShowClients from "./components/ShowClients";
import ClientDetails from "./components/ClientDetails";
import TauxOccupation from "./components/TauxOccupation";
import EvolutionStatus from "./components/EvolutionStatus";
import Test from "./components/test";

export default function terrain() {
  return (
    <>
      <Layout>
        <ShowTerrains />
      </Layout>
    </>
  );
}
