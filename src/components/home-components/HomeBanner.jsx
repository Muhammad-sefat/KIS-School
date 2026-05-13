/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Title from "../common/Title";
import { ImageProvider } from "../common/ImageProvider";
import { slideInBottom } from "@/animation/Animation";
import { useTranslation } from "react-i18next";

export const HomeBanner = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col lg:flex-row items-center gap-5 section-padding-x pb-4 pt-8 xl:pt-12 bg-gradient-to-b from-[#1f2a61]/20 via-[#1f2a61]/10 to-white dark:from-gray-900 dark:via-gray-900 dark:to-gray-900">
      {/* Left Content */}
      <motion.div
        className="w-full lg:w-[50%] flex flex-col items-center lg:items-start text-center lg:text-left"
        variants={slideInBottom}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <img
          src={ImageProvider.light}
          alt="KIS Logo"
          className="w-[60px] lg:w-[100px] mt-12 lg:mt-0 dark:invert"
        />

        <Title
          level="title80"
          className="leading-tight text-theme-primary dark:text-white"
        >
          {t("Welcome to")}{" "}
          <span className="text-theme-secondary">
            {t("Key Issue Solving School")}
          </span>
        </Title>

        <Title level="title18" className="mt-2 text-gray dark:text-gray-300">
          {t("Banner Description")}
        </Title>

        <Link to="/sign-in">
          <button className="px-4 py-2 mt-4 rounded-full bg-theme-primary text-white hover:bg-theme-secondary transition duration-300 cursor-pointer">
            {t("Join Now")}
          </button>
        </Link>
      </motion.div>

      {/* Right Image */}
      <motion.div
        className="w-full lg:w-[50%] lg:mt-6"
        variants={slideInBottom}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
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
