/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { slideInLeft, slideInRight } from "@/animation/Animation";
import { ImageProvider } from "../common/ImageProvider";
import { Phone, School } from "lucide-react";
import Title from "../common/Title";

const OurInovation = () => {
  return (
    <div className="section-padding-x py-12 lg:py-24 flex flex-col lg:flex-row gap-6 md:gap-12">
      <motion.div
        className="w-full lg:w-[50%] mx-auto text-center relative"
        variants={slideInLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="flex gap-2 lg:gap-6">
          <div className="h-[520px] w-[460px] lg:w-[390px] rounded-tr-[70px] rounded-bl-[70px] overflow-hidden">
            <img
              src={ImageProvider.student}
              alt="image"
              className="w-full h-full object-cover hover:scale-105 transition duration-500 ease-in-out"
            />
          </div>
          <div className="h-[500px] w-[460px] lg:w-[390px] rounded-br-[70px] rounded-tl-[70px] overflow-hidden mt-12 md:mt-[140px]">
            <img
              src={ImageProvider.student1}
              alt=""
              className="w-full h-full object-cover hover:scale-105 transition duration-500 ease-in-out"
            />
          </div>
        </div>

        <div className="absolute -bottom-1 left-1/2 md:left-0 md:translate-x-0 -translate-x-1/2 w-[90%] lg:w-[390px] bg-theme-primary h-[80px] lg:h-[110px] rounded-tr-[70px] rounded-bl-[70px] flex items-center justify-center gap-4 px-4">
          <div className="bg-white h-[60px] w-[60px] text-theme-secondary  rounded-full flex items-center justify-center">
            <Phone className="w-6 h-6" />
          </div>
          <div className="text-white">
            <h4 className="text-lg lg:text-2xl font-semibold">
              Our Phone Number
            </h4>
            <p>+12124610547</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="w-full lg:w-[50%] lg:mt-6"
        variants={slideInRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <button className="group flex items-center gap-2 px-2 py-1.5 pr-2 text-sm font-medium border border-theme-primary text-theme-primary hover:bg-theme-secondary hover:text-white hover:border-theme-secondary rounded-full transition-all duration-300 cursor-pointer overflow-hidden">
          <span className="relative flex items-center gap-2">
            <p className="transition-all duration-300 group-hover:translate-x-2">
              <School />
            </p>
            <span className="transition-all duration-300 group-hover:translate-x-2">
              Get to Know Us
            </span>
          </span>
        </button>

        <Title level="title48" className="mt-4">
          Empowering Learning Through Innovation
        </Title>
        <Title level="title18" className="mt-4 text-gray">
          Our platform offers a wide variety of online classes across different
          subjects, guided by expert instructors.
          <p>
            Whether you're learning for personal growth or professional
            development, we're here to support your journey anytime, anywhere.
          </p>
        </Title>
        <div className="mt-8 flex flex-row gap-6">
          <div className="border-r-2 border-dashed pr-6">
            <h3 className="text-lg lg:text-3xl font-semibold mb-2">2.6k</h3>
            <p className="text-gray">Successfully Trained</p>
          </div>
          <div>
            <h3 className="text-lg lg:text-3xl font-semibold mb-2">5.6k</h3>
            <p className="text-gray">Student Community</p>
          </div>
        </div>
        <Link to="/signup">
          <button className="px-4 py-2 mt-4 rounded-full bg-theme-primary text-white hover:bg-theme-secondary transition duration-300 cursor-pointer">
            Join Now
          </button>
        </Link>
      </motion.div>
    </div>
  );
};

export default OurInovation;
