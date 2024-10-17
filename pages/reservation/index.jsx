import React from "react";

import Layout from "../Layout/Layout";

import NouvelleReservation from "@/components/Reservation";
import withAuth from "@/utils/withAuth";

export default function index() {
  return (
    <>
      <Layout>
        <NouvelleReservation />
      </Layout>
    </>
  );
}
