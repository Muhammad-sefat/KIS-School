/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion } from "framer-motion";
import { slideInBottom } from "@/animation/Animation";
import { useTranslation } from "react-i18next";
import CourseDetailsModal from "./CourseDetailsModal";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 80,
    scale: 0.92,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const Card = ({ course, onClick }) => {
  return (
    <motion.div
      variants={cardVariants}
      onClick={onClick}
      className={`relative group flex flex-col items-center justify-center p-1.5 pb-2.5 sm:p-2.5 sm:pb-3.5 bg-[#0e0e11] rounded-[24px] sm:rounded-[32px] border-2 ${course.borderClass} cursor-pointer transition-all duration-300 select-none overflow-hidden w-full`}
    >
      <div className="w-full">
        {/* Subtle glow background */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${course.glowColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
        />

        {/* Inner Rounded Box */}
        <div className="relative w-full aspect-[4/3] rounded-[16px] sm:rounded-[22px] overflow-hidden shadow-lg">
          <div
            className={`absolute inset-0 bg-gradient-to-b ${course.gradient} transition-transform duration-500 group-hover:scale-105`}
          />

          <div className="absolute inset-0 bg-white/[0.04] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent pointer-events-none" />

          <div className="relative h-full w-full flex flex-col items-center justify-center p-2 select-none">
            <span className="font-extrabold text-[11px] lg:text-sm tracking-widest text-white/80 uppercase drop-shadow-sm mb-0.5">
              CLASS
            </span>

            <span className="font-black text-xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl text-white drop-shadow-[0_1.5px_3px_rgba(0,0,0,0.35)] leading-none select-none">
              {course.classNumber}
            </span>

            <div className="absolute bottom-1 right-1 sm:bottom-1.5 sm:right-1.5 text-base sm:text-xl md:text-2xl lg:text-xl xl:text-2xl filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 select-none">
              {course.icon}
            </div>
          </div>
        </div>

        <p className="text-white text-[10px] sm:text-xs md:text-sm font-bold tracking-wide mt-2 text-center transition-colors duration-300 group-hover:text-yellow-400 select-none">
          {course.classLabel}
        </p>
      </div>
    </motion.div>
  );
};

export default function CourseCards() {
  const { t } = useTranslation();
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredVivaIndex, setHoveredVivaIndex] = useState(null);

  const handleCardClick = (course) => {
    setSelectedCourse(course);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setSelectedCourse(null);
  };

  const courses = [
    {
      id: 3,
      classNumber: "3",
      classLabel: t("Class 3"),
      intro: t("Class 3 Intro"),
      gradient: "from-emerald-400 to-green-600",
      borderClass:
        "border-emerald-500/80 hover:border-emerald-400 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]",
      glowColor: "from-emerald-500/20 to-green-600/20",
      icon: "🌱",
    },
    {
      id: 4,
      classNumber: "4",
      classLabel: t("Class 4"),
      intro: t("Class 4 Intro"),
      gradient: "from-emerald-500 to-teal-600",
      borderClass:
        "border-emerald-500/80 hover:border-emerald-400 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]",
      glowColor: "from-emerald-600/20 to-teal-600/20",
      icon: "🎒",
    },
    {
      id: 5,
      classNumber: "5",
      classLabel: t("Class 5"),
      intro: t("Class 5 Intro"),
      gradient: "from-teal-500 to-cyan-600",
      borderClass:
        "border-teal-500/80 hover:border-teal-400 hover:shadow-[0_0_20px_rgba(20,184,166,0.4)]",
      glowColor: "from-teal-600/20 to-cyan-600/20",
      icon: "📚",
    },
    {
      id: 6,
      classNumber: "6",
      classLabel: t("Class 6"),
      intro: t("Class 6 Intro"),
      gradient: "from-sky-400 to-blue-600",
      borderClass:
        "border-sky-500/80 hover:border-sky-400 hover:shadow-[0_0_20px_rgba(56,189,248,0.4)]",
      glowColor: "from-sky-500/20 to-blue-600/20",
      icon: "🗣️",
    },
    {
      id: 7,
      classNumber: "7",
      classLabel: t("Class 7"),
      intro: t("Class 7 Intro"),
      gradient: "from-blue-500 to-indigo-600",
      borderClass:
        "border-blue-500/80 hover:border-blue-400 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]",
      glowColor: "from-blue-600/20 to-indigo-600/20",
      icon: "🎭",
    },
    {
      id: 8,
      classNumber: "8",
      classLabel: t("Class 8"),
      intro: t("Class 8 Intro"),
      gradient: "from-indigo-500 to-purple-600",
      borderClass:
        "border-indigo-500/80 hover:border-indigo-400 hover:shadow-[0_0_20px_rgba(99,102,241,0.4)]",
      glowColor: "from-indigo-600/20 to-purple-600/20",
      icon: "🎥",
    },
    {
      id: 9,
      classNumber: "9",
      classLabel: t("Class 9"),
      intro: t("Class 9 Intro"),
      gradient: "from-amber-400 to-orange-500",
      borderClass:
        "border-orange-500/80 hover:border-orange-400 hover:shadow-[0_0_20px_rgba(249,115,22,0.4)]",
      glowColor: "from-amber-500/20 to-orange-500/20",
      icon: "⚡",
    },
    {
      id: 10,
      classNumber: "10",
      classLabel: t("Class 10"),
      intro: t("Class 10 Intro"),
      gradient: "from-fuchsia-500 to-pink-600",
      borderClass:
        "border-fuchsia-500/80 hover:border-fuchsia-400 hover:shadow-[0_0_20px_rgba(217,70,239,0.4)]",
      glowColor: "from-fuchsia-600/20 to-pink-600/20",
      icon: "👑",
    },
  ];

  const vivaCards = [
    {
      type: t("Class-wise Viva"),
      description: t("Class-wise Viva Desc"),
      reward: "100",
      sessions: "50",
      total: "5,000",
      icon: "📝",
      color: "from-blue-400 to-blue-600",
    },
    {
      type: t("Every 5 Classes"),
      description: t("Every 5 Classes Desc"),
      reward: "150",
      sessions: "10",
      total: "1,500",
      icon: "⭐",
      color: "from-purple-400 to-purple-600",
    },
    {
      type: t("Every 10 Classes"),
      description: t("Every 10 Classes Desc"),
      reward: "200",
      sessions: "5",
      total: "1,000",
      icon: "🎯",
      color: "from-green-400 to-green-600",
    },
    {
      type: t("Every 20 Classes"),
      description: t("Every 20 Classes Desc"),
      reward: "500",
      sessions: "2",
      total: "1,000",
      icon: "🏆",
      color: "from-orange-400 to-orange-600",
    },
    {
      type: t("Final Viva"),
      description: t("Final Viva Desc"),
      reward: "1,500",
      sessions: "1",
      total: "1,500",
      icon: "👑",
      color: "from-yellow-400 to-yellow-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 animate-fadeIn">
      <div className="section-padding-x section-padding-y">
        {/* Section Header */}
        <div className="text-center mb-14">
          <motion.h1
            variants={slideInBottom}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-transparent leading-tight max-w-4xl mx-auto"
          >
            {t("Our Course Plans")}
          </motion.h1>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-yellow-400 to-purple-500 rounded-full mb-5" />

          <motion.p
            variants={slideInBottom}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed"
          >
            {t("Course Header Description")}
          </motion.p>
        </div>

        {/* Entry animation grid (2 cols on mobile, 3 on sm/md tablet, 4 on md/lg, 8 on desktop xl) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-3.5 mb-16 w-full"
        >
          {courses.map((course) => (
            <Card
              key={course.id}
              course={course}
              onClick={() => handleCardClick(course)}
            />
          ))}
        </motion.div>

        <CourseDetailsModal
          isOpen={isOpen}
          onClose={handleCloseModal}
          course={selectedCourse}
        />

        {/* Earnings Highlight */}
        <div className="relative my-12 lg:my-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl opacity-60"></div>
          <div className="relative bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl p-6 lg:p-8 text-center shadow-2xl">
            <div className="text-6xl mb-4">💰</div>
            <p className="text-2xl lg:text-3xl font-bold text-gray-900">
              {t("Earn Per Class")}
            </p>
          </div>
        </div>

        {/* Viva Section Header */}
        <div className="text-center mb-10 lg:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 bg-clip-text text-transparent animate-pulse">
            {t("Viva Reward Structure")}
          </h2>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-green-400 to-purple-500 rounded-full"></div>
        </div>

        {/* Viva Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {vivaCards.map((viva, index) => (
            <motion.div
              key={index}
              variants={slideInBottom}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
                delay: index * 0.1,
              }}
              onMouseEnter={() => setHoveredVivaIndex(index)}
              onMouseLeave={() => setHoveredVivaIndex(null)}
              className="relative group"
            >
              {/* Glowing Effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${viva.color} rounded-2xl blur-xl opacity-40 group-hover:opacity-70 transition-opacity duration-300`}
              />

              {/* Card */}
              <div className="relative bg-gray-800 bg-opacity-90 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 transform transition-all duration-300 hover:scale-105">
                {/* Icon */}
                <div
                  className={`absolute -top-4 -right-4 w-14 h-14 bg-gradient-to-br ${viva.color
                    } rounded-full flex items-center justify-center text-2xl shadow-lg transform transition-transform duration-300 ${hoveredVivaIndex === index ? "scale-110 rotate-12" : ""
                    }`}
                >
                  {viva.icon}
                </div>

                <h3 className="text-2xl font-bold mb-3 text-white pr-12">
                  {viva.type}
                </h3>

                <p className="text-sm text-gray-400 mb-6">{viva.description}</p>

                {/* Stats */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-gray-900 bg-opacity-50 rounded-lg">
                    <span className="text-sm text-gray-400">
                      {t("Reward")}:
                    </span>

                    <span
                      className={`font-bold text-lg bg-gradient-to-r ${viva.color} bg-clip-text text-transparent`}
                    >
                      {viva.reward} ৳
                    </span>
                  </div>

                  <div className="flex justify-between items-center p-3 bg-gray-900 bg-opacity-50 rounded-lg">
                    <span className="text-sm text-gray-400">
                      {t("Sessions")}:
                    </span>

                    <span className="font-bold text-white">
                      {viva.sessions}
                    </span>
                  </div>

                  <div
                    className={`flex justify-between items-center p-4 bg-gradient-to-r ${viva.color} rounded-lg shadow-lg`}
                  >
                    <span className="text-sm font-semibold text-gray-900">
                      {t("Total Amount")}:
                    </span>

                    <span className="font-bold text-2xl text-gray-900">
                      {viva.total} ৳
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Grand Total Card */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-3xl opacity-40 animate-pulse"></div>
          <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-12 text-center border-4 border-yellow-400 shadow-2xl">
            <div className="text-5xl lg:text-7xl mb-6">🎉</div>
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              {t("Total Incentives")}
            </h3>
            <div className="relative">
              <p className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 bg-clip-text text-transparent animate-pulse">
                10,000 ৳
              </p>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 blur-2xl opacity-20"></div>
            </div>
            <p className="text-gray-400 mt-4 text-lg">
              {t("Complete Modules Info")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
