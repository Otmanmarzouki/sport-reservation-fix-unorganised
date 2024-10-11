import React from "react";

import Layout from "./Layout/Layout";
import HomeComponent from "./components/HomeComponent";
import EvolutionStatus from "./evolution/index";
import NombreDeClientSport from "./components/NombreDeClientSport";
import login from "./login";
export default function Home() {
  return (
    <>
      <Layout>
        <NombreDeClientSport />
      </Layout>
    </>
  );
}
