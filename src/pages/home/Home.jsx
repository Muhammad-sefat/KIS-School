import { HomeBanner } from "@/components/home-components/HomeBanner";
import OurInovation from "@/components/home-components/OurInovation";
import OurRating from "@/components/home-components/OurRating";
import ServiceCard from "@/components/home-components/ServiceCard";
import React from "react";
import { ScrollRestoration } from "react-router-dom";

const Home = () => {
  return (
    <>
      <ScrollRestoration />
      <HomeBanner />
      <OurRating />
      <OurInovation />
      <ServiceCard />
    </>
  );
};

export default Home;
