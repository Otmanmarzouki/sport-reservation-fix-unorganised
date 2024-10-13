import React from "react";

import Layout from "../Layout/Layout";

import ShowTerrains from "../../components/Terrain/ShowTerrains";
export default function index() {
  return (
    <>
      <Layout>
        <ShowTerrains />
      </Layout>
    </>
  );
}
