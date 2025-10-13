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
          Unlock{" "}
          <span className="text-theme-secondary">
            Skills <br className="hidden md:block" /> Build Your Future
          </span>
        </Title>

        <Title level="title18" className="mt-2 text-gray">
          At <strong className="text-theme-primary">KIS School</strong>, we help
          learners across Asia grow their skills through practical, real-world
          learning.
          <p className="mt-2">
            Whether you want to upgrade your career, explore new fields, or
            teach what you know — our platform connects passionate learners and
            skilled instructors through courses designed for today’s digital
            world.
          </p>
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
