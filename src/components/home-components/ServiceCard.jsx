/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Clock,
  Star,
  BookOpen,
  Video,
  Headphones,
  PenTool,
  Award,
} from "lucide-react";
import { ImageProvider } from "../common/ImageProvider";

// Common features for all courses
const baseFeatures = [
  { text: "50 Topics", icon: BookOpen },
  { text: "50 Sessions", icon: Video },
  { text: "1200 Vocabulary (Speaking)", icon: Headphones },
  { text: "50 Video Presentations", icon: Video },
  { text: "Listening Practice (12 Songs + 2 Movies)", icon: Headphones },
  { text: "50 Freehand Writing with Feedback", icon: PenTool },
];

const courses = [
  {
    id: 1,
    title: "Junior English (Class 6–8)",
    instructor: "KIS Language Dept.",
    tag: "Beginner",
    duration: "60 Days",
    lessons: "50 Lessons",
    price: "5,000",
    oldPrice: "7,500",
    rating: 4.6,
    image: ImageProvider.course,
    extra: ["Basic Grammar + Vocabulary", "Speaking Warm-up Tasks"],
    gradient: "from-blue-500 to-indigo-600",
    tagColor: "bg-blue-500",
  },
  {
    id: 2,
    title: "SSC English (Class 9–10)",
    instructor: "KIS Language Dept.",
    tag: "Secondary",
    duration: "90 Days",
    lessons: "70 Lessons",
    price: "5,000",
    oldPrice: "7,500",
    rating: 4.8,
    image: ImageProvider.course1,
    extra: ["Exam Focused Writing", "Model Test with Feedback"],
    gradient: "from-purple-500 to-pink-600",
    tagColor: "bg-purple-500",
  },
];

const StarRating = ({ rating }) => {
  const stars = Math.round(rating);
  return (
    <div className="flex items-center">
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          size={16}
          className={
            i < stars ? "text-yellow-400 fill-yellow-400" : "text-gray-400"
          }
        />
      ))}
    </div>
  );
};

const ServiceCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % courses.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + courses.length) % courses.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 px-4 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

      <div className="section-padding-x relative z-10">
        {/* Section Title */}
        <div className="text-center mb-10">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-semibold rounded-full shadow-lg">
              🎓 Premium Courses
            </span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
            Master English with Confidence
          </h1>
          <p className="text-gray-600 text-lg">
            Explore our English learning programs tailored for every academic
            level.
          </p>
        </div>

        {/* Cards Grid - Responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-10">
          {courses.map((course, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className="relative group"
            >
              {/* Glowing Effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${course.gradient} rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500`}
              ></div>

              {/* Card */}
              <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                {/* Image Section */}
                <div className="relative overflow-hidden h-56">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                  {/* Tag Badge */}
                  <div
                    className={`absolute top-4 left-4 px-4 py-2 ${course.tagColor} text-white text-xs font-bold rounded-full shadow-lg backdrop-blur-sm uppercase tracking-wide`}
                  >
                    {course.tag}
                  </div>

                  {/* Rating Badge */}
                  <div className="absolute top-4 right-4 px-3 py-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center gap-2">
                    <span className="text-sm font-bold text-gray-800">
                      {course.rating}
                    </span>
                    <StarRating rating={course.rating} />
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  {/* Title & Instructor */}
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors leading-snug">
                    {course.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-4 flex items-center gap-2">
                    <Award size={16} className="text-purple-500" />
                    {course.instructor}
                  </p>

                  {/* Duration Info */}
                  <div className="flex items-center gap-4 mb-5 pb-5 border-b border-gray-200">
                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                      <Clock size={18} className="text-blue-500" />
                      <span className="font-medium">{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                      <BookOpen size={18} className="text-purple-500" />
                      <span className="font-medium">{course.lessons}</span>
                    </div>
                  </div>

                  {/* Base Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-bold text-gray-800 mb-3 flex items-center gap-2">
                      <span className="w-1 h-5 bg-gradient-to-b from-blue-500 to-purple-500 rounded"></span>
                      Course Features
                    </h4>
                    <ul className="space-y-2">
                      {baseFeatures.map((feature, i) => {
                        const Icon = feature.icon;
                        return (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm text-gray-700 group/item"
                          >
                            <Icon
                              size={16}
                              className="text-blue-500 mt-0.5 flex-shrink-0 group-hover/item:text-purple-500 transition-colors"
                            />
                            <span>{feature.text}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  {/* Extra Features */}
                  <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                    <h4 className="text-sm font-bold text-gray-800 mb-2 flex items-center gap-2">
                      <span className="text-purple-500">✨</span>
                      Extra Features
                    </h4>
                    <ul className="space-y-1">
                      {course.extra.map((e, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-gray-700"
                        >
                          <span className="text-purple-500 mt-0.5">•</span>
                          <span>{e}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Price & CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                          ৳{course.price}
                        </span>
                        <span className="text-gray-400 line-through text-sm">
                          ৳{course.oldPrice}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">
                        Limited time offer
                      </p>
                    </div>
                    <a
                      href="https://forms.gle/gDvnNA5KD7V5cdVQ8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`px-4 lg:px-6 py-2 lg:py-3 bg-gradient-to-r ${course.gradient} text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 text-sm`}
                    >
                      Enroll Now
                    </a>
                  </div>
                </div>

                {/* Hover Effect Indicator */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${
                    course.gradient
                  } transform transition-all duration-500 ${
                    hoveredCard === index ? "scale-x-100" : "scale-x-0"
                  }`}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center">
          <a
            href="/service"
            className="group px-8 py-4 bg-white text-blue-600 font-semibold rounded-full shadow-xl hover:shadow-2xl border-2 border-blue-200 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white hover:border-transparent transition-all duration-300 flex items-center gap-2"
          >
            View All Courses
            <ChevronRight
              size={20}
              className="transform group-hover:translate-x-1 transition-transform"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
