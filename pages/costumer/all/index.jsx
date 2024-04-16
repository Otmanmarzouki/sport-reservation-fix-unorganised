import React from "react";

import Layout from "@/pages/Layout/Layout";

import Costumers from "@/components/Costumer/Costumers/Customers";

export default function index() {
  return (
    <>
      <Layout>
        <Costumers />
      </Layout>
    </>
  );
}
