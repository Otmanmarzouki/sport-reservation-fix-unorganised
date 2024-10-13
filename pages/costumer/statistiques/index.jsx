import React from "react";

import Layout from "@/pages/Layout/Layout";

import NombreDeClientSport from "@/components/Costumer/Statistiques/index";

export default function index() {
  return (
    <>
      <Layout>
        <NombreDeClientSport />
      </Layout>
    </>
  );
}
