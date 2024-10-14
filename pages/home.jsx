import React from "react";

import Layout from "./Layout/Layout";
import HomeComponent from "./components/HomeComponent";

import login from "./login";
export default function Home() {
  return (
    <>
      <Layout>
        <HomeComponent />
      </Layout>
    </>
  );
}
