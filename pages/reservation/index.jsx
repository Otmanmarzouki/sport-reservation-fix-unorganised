import React from "react";

import Layout from "../Layout/Layout";

import NouvelleReservation from "@/components/Reservation/NouvelleReservation";

export default function index() {
  return (
    <>
      <Layout>
        <NouvelleReservation />
      </Layout>
    </>
  );
}
