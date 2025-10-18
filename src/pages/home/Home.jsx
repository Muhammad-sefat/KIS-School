import Accordian from "@/components/home-components/Accordian";
import CourseCards from "@/components/home-components/CourseCards";
import { HomeBanner } from "@/components/home-components/HomeBanner";
import OurInovation from "@/components/home-components/OurInovation";
import OurInstructor from "@/components/home-components/OurInstructor";
import OurRating from "@/components/home-components/OurRating";
import OurStudentSay from "@/components/home-components/OurStudentSay";
import ServiceCard from "@/components/home-components/ServiceCard";
import React from "react";
import { ScrollRestoration } from "react-router-dom";

const Home = () => {
  return (
    <>
      <ScrollRestoration />
      <HomeBanner />
      {/* <OurRating /> */}
      <CourseCards />
      <OurInovation />
      <ServiceCard />
      {/* <OurInstructor /> */}
      <OurStudentSay />
      <Accordian />
    </>
  );
};

export default Home;
