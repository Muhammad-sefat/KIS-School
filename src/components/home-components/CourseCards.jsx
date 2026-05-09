/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion } from "framer-motion";

const ENROLL_URL = "https://forms.gle/gDvnNA5KD7V5cdVQ8";

const courses = [
  {
    classLabel: "Class 3",
    title: "Foundation Builders",
    description:
      "Start your English journey with the essentials. Build a rock-solid base in grammar, basic vocabulary, and simple spoken sentences — the first step to fluency.",
    features: [
      "Core Grammar Rules",
      "Basic Speaking Practice",
      "Intro Writing Tasks",
    ],
    price: "৳ 1,200",
    gradient: "from-sky-500 to-blue-700",
    badge: "Beginner",
    icon: "🌱",
  },
  {
    classLabel: "Class 4",
    title: "Word Power Ignition",
    description:
      "Fuel your vocabulary engine. Learn 20 new words every week, apply them in speaking sessions, and craft short structured writing tasks with teacher feedback.",
    features: [
      "Vocabulary Expansion",
      "Spoken Word Practice",
      "Short Writing Tasks",
    ],
    price: "৳ 1,200",
    gradient: "from-violet-500 to-purple-700",
    badge: "Beginner",
    icon: "🔤",
  },
  {
    classLabel: "Class 5",
    title: "Sentence Architects",
    description:
      "Move beyond single words — learn to construct meaningful sentences. Master sentence structure, practice speaking in full sentences, and write coherent paragraphs.",
    features: [
      "Sentence Structure",
      "Speaking in Full Sentences",
      "Paragraph Writing",
    ],
    price: "৳ 1,400",
    gradient: "from-emerald-500 to-teal-700",
    badge: "Elementary",
    icon: "🏗️",
  },
  {
    classLabel: "Class 6",
    title: "Confident Communicators",
    description:
      "Step into the real world of communication. This level pushes your grammar deeper, develops confident oral delivery, and introduces topic-based writing with 5-point feedback.",
    features: [
      "Advanced Grammar Topics",
      "Topic-Based Speaking",
      "Feedback-Driven Writing",
    ],
    price: "৳ 1,600",
    gradient: "from-orange-500 to-red-600",
    badge: "Pre-Intermediate",
    icon: "🗣️",
  },
  {
    classLabel: "Class 7",
    title: "Expression Masters",
    description:
      "Express opinions, tell stories, and write with clarity. Weekly Language Club sessions put your skills to the test alongside peers in a live speaking environment.",
    features: [
      "Opinion & Story Speaking",
      "Language Club Sessions",
      "Creative Writing",
    ],
    price: "৳ 1,800",
    gradient: "from-pink-500 to-rose-700",
    badge: "Pre-Intermediate",
    icon: "🎭",
  },
  {
    classLabel: "Class 8",
    title: "Presentation Pro",
    description:
      "Deliver video presentations without scripts, receive structured improvement feedback, and rewrite your work — all while earning rewards for meeting quality standards.",
    features: [
      "Script-Free Presentations",
      "5-Point Improvement Feedback",
      "Structured Rewriting",
    ],
    price: "৳ 2,000",
    gradient: "from-cyan-500 to-indigo-700",
    badge: "Intermediate",
    icon: "🎥",
  },
  {
    classLabel: "Class 9",
    title: "Fluency Accelerator",
    description:
      "Intensive listening, rapid vocabulary sessions, and viva-style assessments every week sharpen your reflexes and move you closer to natural, effortless English.",
    features: [
      "Listening Comprehension",
      "Speed Vocabulary Viva",
      "Reflex Speaking Drills",
    ],
    price: "৳ 2,200",
    gradient: "from-amber-500 to-yellow-600",
    badge: "Upper Intermediate",
    icon: "⚡",
  },
  {
    classLabel: "Class 10",
    title: "Mastery & Beyond",
    description:
      "The pinnacle of the KISS program. Demonstrate total command of grammar, writing, and speaking through comprehensive vivas, a final presentation, and a capstone writing project.",
    features: [
      "Comprehensive Final Viva",
      "Capstone Presentation",
      "Advanced Writing Project",
    ],
    price: "৳ 2,500",
    gradient: "from-fuchsia-500 to-purple-800",
    badge: "Advanced",
    icon: "👑",
  },
];

export default function CourseCards() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hoveredVivaIndex, setHoveredVivaIndex] = useState(null);
  const row1 = courses.slice(0, 3);
  const row2 = courses.slice(3, 6);
  const row3 = courses.slice(6, 8);
  const Card = ({ course, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative group flex flex-col"
    >
      {/* Glow */}
      <motion.div
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.25 }}
        className={`absolute inset-0 bg-gradient-to-br ${course.gradient} rounded-2xl blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-400`}
      />

      {/* Card */}
      <div className="relative flex flex-col h-full bg-gray-800 bg-opacity-90 backdrop-blur-sm rounded-2xl border border-gray-700 overflow-hidden shadow-xl">
        {/* Top Bar */}
        <div className={`h-1.5 w-full bg-gradient-to-r ${course.gradient}`} />

        {/* Header */}
        <div className="p-6 pb-4">
          <div className="flex items-start justify-between mb-3">
            <div>
              <span
                className={`inline-block text-xs font-bold px-3 py-1 rounded-full bg-gradient-to-r ${course.gradient} text-white mb-2`}
              >
                {course.badge}
              </span>
              <p className="text-gray-400 text-xs font-semibold tracking-widest uppercase">
                {course.classLabel}
              </p>
            </div>
            <div
              className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${course.gradient} flex items-center justify-center text-3xl shadow-lg transform transition-transform duration-300 ${
                hoveredIndex === index ? "scale-110 rotate-6" : ""
              }`}
            >
              {course.icon}
            </div>
          </div>

          <h3 className="text-2xl font-extrabold text-white mb-2 leading-tight">
            {course.title}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            {course.description}
          </p>
        </div>

        {/* Divider */}
        <div
          className={`mx-6 h-px bg-gradient-to-r ${course.gradient} opacity-50`}
        />

        {/* Features */}
        <div className="px-6 py-4 flex-1">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">
            What's Included
          </p>
          <ul className="space-y-2">
            {course.features.map((feat, i) => (
              <li
                key={i}
                className="flex items-center gap-3 text-sm text-gray-300"
              >
                <span
                  className={`w-2 h-2 rounded-full bg-gradient-to-r ${course.gradient} shrink-0`}
                />
                {feat}
              </li>
            ))}
          </ul>
        </div>

        {/* Footer */}
        <div className="px-6 pb-6 pt-3 flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-500 mb-0.5">Monthly Fee</p>
            <p
              className={`text-2xl font-black bg-gradient-to-r ${course.gradient} bg-clip-text text-transparent`}
            >
              {course.price}
            </p>
            <p className="text-xs text-gray-500">12 classes / month</p>
          </div>
          <a
            href={ENROLL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`px-5 py-2.5 bg-gradient-to-r ${course.gradient} text-white font-bold rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 text-sm whitespace-nowrap`}
          >
            Enroll Now →
          </a>
        </div>

        {/* Bottom animated bar */}
        <div
          className={`h-0.5 bg-gradient-to-r ${course.gradient} transform transition-all duration-500 ${
            hoveredIndex === index ? "w-full" : "w-0"
          }`}
        />
      </div>
    </motion.div>
  );

  const vivaCards = [
    {
      type: "Class-wise Viva",
      description: "After each class (based on last lesson)",
      reward: "100",
      sessions: "50",
      total: "5,000",
      icon: "📝",
      color: "from-blue-400 to-blue-600",
    },
    {
      type: "Every 5 Classes",
      description: "Based on last five lessons",
      reward: "150",
      sessions: "10",
      total: "1,500",
      icon: "⭐",
      color: "from-purple-400 to-purple-600",
    },
    {
      type: "Every 10 Classes",
      description: "Based on last ten lessons",
      reward: "200",
      sessions: "5",
      total: "1,000",
      icon: "🎯",
      color: "from-green-400 to-green-600",
    },
    {
      type: "Every 20 Classes",
      description: "Based on last twenty lessons",
      reward: "500",
      sessions: "2",
      total: "1,000",
      icon: "🏆",
      color: "from-orange-400 to-orange-600",
    },
    {
      type: "Final Viva",
      description: "Comprehensive test",
      reward: "1,500",
      sessions: "1",
      total: "1,500",
      icon: "👑",
      color: "from-yellow-400 to-yellow-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 py-8 lg:py-12">
      <div className="section-padding-x">
        {/* Animated Header */}
        <div className="text-center mb-14">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-transparent"
          >
            Our Course Plans
          </motion.h1>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-yellow-400 to-purple-500 rounded-full mb-5" />
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            From Class 3 to Class 10 — every level is crafted to build your
            grammar, speaking, and writing skills together.{" "}
            <span className="text-yellow-400 font-semibold">
              3 sessions per week · 12 classes per month.
            </span>
          </p>
        </div>

        {/* Course Modules Grid */}
        {/* Row 1 — 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {row1.map((course, i) => (
            <Card key={i} course={course} index={i} />
          ))}
        </div>

        {/* Row 2 — 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {row2.map((course, i) => (
            <Card key={i + 3} course={course} index={i + 3} />
          ))}
        </div>

        {/* Row 3 — 2 cards full width (each takes 50%) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {row3.map((course, i) => (
            <Card key={i + 6} course={course} index={i + 6} />
          ))}
        </div>

        {/* Earnings Highlight */}
        <div className="relative my-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl opacity-60"></div>
          <div className="relative bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl p-8 text-center shadow-2xl">
            <div className="text-6xl mb-4">💰</div>
            <p className="text-3xl font-bold text-gray-900">
              Earn up to 100 Taka per class based on performance!
            </p>
          </div>
        </div>

        {/* Viva Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold mb-4 bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 bg-clip-text text-transparent animate-pulse">
            Viva & Reward Structure
          </h2>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-green-400 to-purple-500 rounded-full"></div>
        </div>

        {/* Viva Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {vivaCards.map((viva, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredVivaIndex(index)}
              onMouseLeave={() => setHoveredVivaIndex(null)}
              className="relative group"
            >
              {/* Glowing Effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${viva.color} rounded-2xl blur-xl opacity-40 group-hover:opacity-70 transition-opacity duration-300`}
              ></div>

              {/* Card */}
              <div className="relative bg-gray-800 bg-opacity-90 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 transform transition-all duration-300 hover:scale-105">
                {/* Icon */}
                <div
                  className={`absolute -top-4 -right-4 w-14 h-14 bg-gradient-to-br ${
                    viva.color
                  } rounded-full flex items-center justify-center text-2xl shadow-lg transform transition-transform duration-300 ${
                    hoveredVivaIndex === index ? "scale-110 rotate-12" : ""
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
                    <span className="text-sm text-gray-400">Reward:</span>
                    <span
                      className={`font-bold text-lg bg-gradient-to-r ${viva.color} bg-clip-text text-transparent`}
                    >
                      {viva.reward} ৳
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-900 bg-opacity-50 rounded-lg">
                    <span className="text-sm text-gray-400">Sessions:</span>
                    <span className="font-bold text-white">
                      {viva.sessions}
                    </span>
                  </div>
                  <div
                    className={`flex justify-between items-center p-4 bg-gradient-to-r ${viva.color} rounded-lg shadow-lg`}
                  >
                    <span className="text-sm font-semibold text-gray-900">
                      Total Amount:
                    </span>
                    <span className="font-bold text-2xl text-gray-900">
                      {viva.total} ৳
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Grand Total Card */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-3xl blur-3xl opacity-40 animate-pulse"></div>
          <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-12 text-center border-4 border-yellow-400 shadow-2xl">
            <div className="text-7xl mb-6">🎉</div>
            <h3 className="text-4xl font-bold text-white mb-4">
              Total Incentives
            </h3>
            <div className="relative">
              <p className="text-7xl font-bold bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 bg-clip-text text-transparent animate-pulse">
                10,000 ৳
              </p>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 blur-2xl opacity-20"></div>
            </div>
            <p className="text-gray-400 mt-4 text-lg">
              Complete all modules and earn maximum rewards!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
