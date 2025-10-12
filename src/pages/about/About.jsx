import React from "react";
import { ScrollRestoration } from "react-router-dom";
import AboutBanner from "./AboutBanner";
import OurInovation from "@/components/home-components/OurInovation";

const About = () => {
  return (
    <>
      <ScrollRestoration />
      <AboutBanner />
      <OurInovation />
    </>
  );
};

export default About;
