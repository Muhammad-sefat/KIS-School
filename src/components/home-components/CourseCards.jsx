import React, { useState } from "react";

export default function CourseCards() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hoveredVivaIndex, setHoveredVivaIndex] = useState(null);

  const modules = [
    {
      title: "Grammar",
      subtitle: "50 Essential Topics",
      icon: "📚",
      gradient: "from-blue-500 to-indigo-600",
      points: [
        "Video lessons published on social media",
        "Watch at home and submit notes",
        "Video viva with eye mask for fairness",
        "Answer 4/5 questions correctly = 20 Taka reward",
      ],
    },
    {
      title: "Video Presentation",
      subtitle: "50 Tasks",
      icon: "🎥",
      gradient: "from-purple-500 to-pink-600",
      points: [
        "Prepare presentations without scripts",
        "Receive feedback on 5 improvement areas",
        "Recreate video with corrections",
        "Meet guidance standards = 20 Taka per video",
      ],
    },
    {
      title: "Listening Practice",
      subtitle: "50 Activities",
      icon: "🎧",
      gradient: "from-green-500 to-teal-600",
      points: [
        "Songs, movies, cartoons, and news clips",
        "Match lyrics while listening",
        "Repeat sentences with eye mask in viva",
        "Answer 4/5 questions correctly = 20 Taka",
      ],
    },
    {
      title: "Vocabulary",
      subtitle: "1,000 Words",
      icon: "📖",
      gradient: "from-orange-500 to-red-600",
      points: [
        "Learn 20 new words each class",
        "Viva on word meanings",
        "Answer 4/5 questions correctly",
        "Earn 20 Taka per session",
      ],
    },
    {
      title: "Writing",
      subtitle: "50 Tasks",
      icon: "✍️",
      gradient: "from-cyan-500 to-blue-600",
      points: [
        "Write freely on selected topics",
        "Receive 5 feedback points",
        "Rewrite based on corrections",
        "Complete successfully = 20 Taka per task",
      ],
    },
    {
      title: "Speaking Practice",
      subtitle: "Language Club",
      icon: "🗣️",
      gradient: "from-yellow-500 to-orange-600",
      points: [
        "Online clubs with 10 members",
        "Interactive speaking sessions",
        "Natural communication practice",
        "Build confidence in English",
      ],
    },
  ];

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
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-transparent animate-pulse">
            Our Course Modules
          </h1>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-yellow-400 to-purple-500 rounded-full"></div>
        </div>

        {/* Course Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {modules.map((module, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative group"
            >
              {/* Glowing Background Effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${module.gradient} rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300`}
              ></div>

              {/* Card Content */}
              <div className="relative bg-gray-800 bg-opacity-90 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 transform transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                {/* Icon Badge */}
                <div
                  className={`absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-r ${
                    module.gradient
                  } rounded-full flex items-center justify-center text-3xl shadow-lg transform transition-transform duration-300 ${
                    hoveredIndex === index ? "scale-110 rotate-12" : ""
                  }`}
                >
                  {module.icon}
                </div>

                {/* Content */}
                <div className="mb-4 pt-4">
                  <h3 className="text-3xl font-bold mb-2 text-white">
                    {module.title}
                  </h3>
                  <p
                    className={`text-sm font-semibold bg-gradient-to-r ${module.gradient} bg-clip-text text-transparent`}
                  >
                    {module.subtitle}
                  </p>
                </div>

                {/* Divider */}
                <div
                  className={`h-px bg-gradient-to-r ${module.gradient} mb-4`}
                ></div>

                {/* Points */}
                <ul className="space-y-3">
                  {module.points.map((point, idx) => (
                    <li
                      key={idx}
                      className="flex items-start text-sm text-gray-300 transform transition-all duration-200 hover:translate-x-2"
                    >
                      <span
                        className={`mr-3 mt-1 w-2 h-2 rounded-full bg-gradient-to-r ${module.gradient} flex-shrink-0`}
                      ></span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Bottom Accent */}
                <div
                  className={`mt-6 h-1 bg-gradient-to-r ${
                    module.gradient
                  } rounded-full transform transition-all duration-300 ${
                    hoveredIndex === index ? "w-full" : "w-0"
                  }`}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Earnings Highlight */}
        <div className="relative mb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl blur-2xl opacity-30"></div>
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
