/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { motion } from "framer-motion";
import { slideInLeft, slideInRight } from "@/animation/Animation";
import { ImageProvider } from "../common/ImageProvider";
import Title from "../common/Title";
export const accordingData = [
  {
    title: "What is KIS School?",
    description:
      "KIS School is an online learning platform focused on improving your English communication, grammar, writing, and speaking skills through interactive courses and live sessions.",
  },
  {
    title: "How can I start learning English on KIS School?",
    description:
      "Simply create an account, choose your desired English course, and start learning right away. You can study at your own pace and revisit lessons anytime.",
  },
  {
    title: "Do I get a certificate after completing a course?",
    description:
      "Yes! After successfully finishing a course, you’ll receive a verified certificate from KIS School that you can share with employers or add to your resume.",
  },
  {
    title: "Are the classes suitable for beginners?",
    description:
      "Absolutely. Our beginner-friendly English courses cover basic grammar, vocabulary, and pronunciation to help you build confidence step by step.",
  },
  {
    title: "Can I join live English speaking sessions?",
    description:
      "Yes, KIS School offers live English speaking practice sessions with instructors to help you improve fluency and confidence in real-time conversations.",
  },
  {
    title: "Do I need any special software or tools to join?",
    description:
      "No special tools needed! You can access all KIS School courses directly from your browser or mobile device — just an internet connection is enough.",
  },
  {
    title: "Can I contact instructors for feedback or help?",
    description:
      "Definitely. You can message instructors directly within the platform for feedback, questions, or extra guidance to support your learning journey.",
  },
];

const Accordian = () => {
  const [isAccordingOpen, setIsAccordingOpen] = useState(0);

  const handleClick = (index) =>
    setIsAccordingOpen((prevIndex) => (prevIndex === index ? null : index));
  return (
    <div className="relative section-padding-x py-8 flex flex-col-reverse lg:flex-row items-center gap-12">
      <motion.div
        className="w-full lg:w-[50%]"
        variants={slideInLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <img src={ImageProvider.accordiann} alt="image" />
      </motion.div>
      <motion.div
        className="w-full lg:w-[50%]"
        variants={slideInRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Title level="title48" className="text-theme-primary">
          Frequently Asked Questions
        </Title>
        <p className="text-gray mt-2 w-full md:w-[80%]">
          Have questions? Find quick answers to common inquiries about our
          insurance plans, claims, payments, and more. Need help? Our support
          team is always here for you.
        </p>

        <div className="flex gap-3 flex-col w-full  mt-6">
          {accordingData?.map((according, index) => (
            <article
              key={index}
              className="border-dashed border-b-[1px] border-border dark:border-slate-700 py-3"
            >
              <div
                className="flex gap-2 cursor-pointer items-center justify-between w-full"
                onClick={() => handleClick(index)}
              >
                <h2 className="font-[600] text-[1.2rem]">{according.title}</h2>
                <p>
                  <FaChevronDown
                    className={`text-[1.2rem] dark:text-theme-primary text-text transition-all duration-300 ${
                      isAccordingOpen === index &&
                      "rotate-[180deg] !text-theme-primary"
                    }`}
                  />
                </p>
              </div>
              <div
                className={`grid transition-all duration-300 overflow-hidden ease-in-out ${
                  isAccordingOpen === index
                    ? "grid-rows-[1fr] opacity-100 mt-4"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <p className="text-[#424242] dark:text-[#abc2d3] text-[0.9rem] overflow-hidden">
                  {according.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Accordian;
