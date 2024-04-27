import React from "react";

import Layout from "./Layout/Layout";
import HomeComponent from "./components/HomeComponent";
import EvolutionStatus from "./components/EvolutionStatus";

export default function Home() {
  return (
    <>
      <Layout>
        <EvolutionStatus />
      </Layout>
    </>
  );
}
