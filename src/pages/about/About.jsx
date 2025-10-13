import React from "react";
import { ScrollRestoration } from "react-router-dom";
import AboutBanner from "./AboutBanner";
import OurInovation from "@/components/home-components/OurInovation";
import Accordian from "@/components/home-components/Accordian";

const About = () => {
  return (
    <>
      <ScrollRestoration />
      <AboutBanner />
      <OurInovation />
      <Accordian />
    </>
  );
};

export default About;
