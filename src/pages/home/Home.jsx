import { HomeBanner } from "@/components/home-components/HomeBanner";
import React from "react";
import { ScrollRestoration } from "react-router-dom";

const Home = () => {
  return (
    <>
      <ScrollRestoration />
      <HomeBanner />
    </>
  );
};

export default Home;
