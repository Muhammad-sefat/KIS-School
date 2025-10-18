/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Title from "../common/Title";
import { ImageProvider } from "../common/ImageProvider";
import { slideInLeft, slideInRight } from "@/animation/Animation";

export const HomeBanner = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-5 section-padding-x py-4 lg:pt-8 xl:pt-12">
      {/* Left Content */}
      <motion.div
        className="w-full lg:w-[50%] flex flex-col items-center lg:items-start text-center lg:text-left"
        variants={slideInLeft}
        initial="hidden"
        whileInView="visible"
      >
        <img
          src={ImageProvider.light}
          alt="KIS Logo"
          className="w-[60px] lg:w-[100px] mt-12 lg:mt-0"
        />

        <Title level="title80" className="leading-tight text-theme-primary">
          Welcome to{" "}
          <span className="text-theme-secondary">Key Issue Solving School</span>
        </Title>

        <Title level="title18" className="mt-2 text-gray">
          We have solved the problem that students are not as interested in
          studying as they are in playing games. In Bangladesh, many students
          find it hard to speak or write English freely. We use the Direct
          Method to help them learn English fluently. That’s why we are called
          <strong>Key Issue Solving School</strong>.
        </Title>

        <Link to="/sign-in">
          <button className="px-4 py-2 mt-4 rounded-full bg-theme-primary text-white hover:bg-theme-secondary transition duration-300 cursor-pointer">
            Join Now
          </button>
        </Link>
      </motion.div>

      {/* Right Image */}
      <motion.div
        className="w-full lg:w-[50%] lg:mt-6"
        variants={slideInRight}
        initial="hidden"
        whileInView="visible"
      >
        <img
          src={ImageProvider.homebanner}
          alt="KIS School Banner"
          className="w-[600px] mx-auto lg:w-full object-cover rounded-xl"
        />
      </motion.div>
    </div>
  );
};
