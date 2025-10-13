import React from "react";
import { ScrollRestoration } from "react-router-dom";
import ServiceBanner from "./ServiceBanner";
import Accordian from "@/components/home-components/Accordian";
import ServiceAllCard from "./ServiceAllCard";

const Service = () => {
  return (
    <>
      <ScrollRestoration />
      <ServiceBanner />
      <ServiceAllCard />
      <Accordian />
    </>
  );
};

export default Service;
