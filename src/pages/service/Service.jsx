import React from "react";
import { ScrollRestoration } from "react-router-dom";
import ServiceBanner from "./ServiceBanner";

const Service = () => {
  return (
    <>
      <ScrollRestoration />
      <ServiceBanner />
    </>
  );
};

export default Service;
