/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { motion } from "framer-motion";
import { slideInBottom } from "@/animation/Animation";
import { ImageProvider } from "../common/ImageProvider";
import Title from "../common/Title";
import { useTranslation } from "react-i18next";

const Accordian = () => {
  const { t } = useTranslation();
  const [isAccordingOpen, setIsAccordingOpen] = useState(0);

  const accordingData = [
    {
      title: t("What is KIS School?"),
      description: t("KIS School Desc"),
    },
    {
      title: t("How can I start learning?"),
      description: t("How can I start learning Desc"),
    },
    {
      title: t("Do I get a certificate?"),
      description: t("Do I get a certificate Desc"),
    },
    {
      title: t("Are the classes suitable for beginners?"),
      description: t("Suitable for beginners Desc"),
    },
    {
      title: t("Join live sessions?"),
      description: t("Join live sessions Desc"),
    },
  ];

  const handleClick = (index) =>
    setIsAccordingOpen((prevIndex) => (prevIndex === index ? null : index));

  return (
    <div className="relative section-padding-x py-8 flex flex-col-reverse lg:flex-row items-center gap-12 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10 animate-pulse"></div>

      {/* Image Section */}
      <motion.div
        className="w-full lg:w-[50%] relative z-10"
        variants={slideInBottom}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-3xl blur-2xl opacity-20"></div>
          <img
            src={ImageProvider.accordiann}
            alt="image"
            className="relative z-10 rounded-3xl shadow-2xl"
          />
        </div>
      </motion.div>

      {/* FAQ Section */}
      <motion.div
        className="w-full lg:w-[50%] relative z-10"
        variants={slideInBottom}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="mb-6">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-semibold rounded-full shadow-lg">
              ❓ {t("FAQ")}
            </span>
          </div>
          <Title
            level="title48"
            className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
          >
            {t("Frequently Asked Questions")}
          </Title>
          <p className="text-gray-600 dark:text-gray-300 mt-2 w-full md:w-[80%] text-lg">
            {t("FAQ Description")}
          </p>
        </div>

        <div className="flex gap-4 flex-col w-full mt-6">
          {accordingData?.map((according, index) => (
            <article
              key={index}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Gradient Border Effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl transition-opacity duration-300 ${
                  isAccordingOpen === index ? "opacity-100" : "opacity-0"
                }`}
                style={{ padding: "2px" }}
              >
                <div className="absolute inset-[2px] bg-white dark:bg-gray-800 rounded-2xl"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-5">
                <div
                  className="flex gap-2 cursor-pointer items-center justify-between w-full"
                  onClick={() => handleClick(index)}
                >
                  <h2
                    className={`font-semibold text-lg transition-colors duration-300 ${
                      isAccordingOpen === index
                        ? "text-blue-600"
                        : "text-gray-800 dark:text-white group-hover:text-blue-600"
                    }`}
                  >
                    {according.title}
                  </h2>
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isAccordingOpen === index
                        ? "bg-gradient-to-r from-blue-500 to-purple-500"
                        : "bg-gray-100 group-hover:bg-blue-50"
                    }`}
                  >
                    <FaChevronDown
                      className={`text-base transition-all duration-300 ${
                        isAccordingOpen === index
                          ? "rotate-180 text-white"
                          : "text-gray-600 group-hover:text-blue-600"
                      }`}
                    />
                  </div>
                </div>
                <div
                  className={`grid transition-all duration-300 overflow-hidden ease-in-out ${
                    isAccordingOpen === index
                      ? "grid-rows-[1fr] opacity-100 mt-4 pt-4 border-t border-gray-100 dark:border-gray-700"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed overflow-hidden">
                    {according.description}
                  </p>
                </div>
              </div>

              {/* Bottom Accent Line */}
              <div
                className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform transition-all duration-300 ${
                  isAccordingOpen === index ? "scale-x-100" : "scale-x-0"
                }`}
              ></div>
            </article>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Accordian;
