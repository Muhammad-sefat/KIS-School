import { ImageProvider } from "@/components/common/ImageProvider";
import Title from "@/components/common/Title";
import { Clock, Star } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

// Common features for all courses
const baseFeatures = [
  "50 Topics",
  "50 Sessions",
  "1200 Vocabulary (Speaking)",
  "50 Video Presentations",
  "Listening Practice (12 Songs + 2 Movies)",
  "50 Freehand Writing with Feedback",
];

const courses = [
  {
    id: 1,
    title: "Junior English (Class 6–8)",
    instructor: "KIS Language Dept.",
    tag: "Beginner",
    duration: "60 Days",
    lessons: "50 Lessons",
    price: "$99",
    oldPrice: "$149",
    rating: 4.6,
    image: ImageProvider.course3,
    extra: ["Basic Grammar + Vocabulary", "Speaking Warm-up Tasks"],
  },
  {
    id: 2,
    title: "SSC English (Class 9–10)",
    instructor: "KIS Language Dept.",
    tag: "Secondary",
    duration: "90 Days",
    lessons: "70 Lessons",
    price: "$129",
    oldPrice: "$179",
    rating: 4.8,
    image: ImageProvider.course1,
    extra: ["Exam Focused Writing", "Model Test with Feedback"],
  },
  {
    id: 3,
    title: "Intermediate English",
    instructor: "KIS Language Dept.",
    tag: "College",
    duration: "100 Days",
    lessons: "80 Lessons",
    price: "$159",
    oldPrice: "$199",
    rating: 4.9,
    image: ImageProvider.course2,
    extra: ["Advanced Grammar", "Spoken Practice + Live Q&A"],
  },
  {
    id: 4,
    title: "Honours English",
    instructor: "KIS Language Dept.",
    tag: "University",
    duration: "120 Days",
    lessons: "90 Lessons",
    price: "$199",
    oldPrice: "$249",
    rating: 5.0,
    image: ImageProvider.course,
    extra: ["Literature Analysis", "Essay Writing + Research Skills"],
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

const ServiceAllCard = () => {
  return (
    <div className="section-padding-x py-12 bg-[#F9FAFB] relative">
      {/* Section Title */}
      <div className="text-center mb-10">
        <Title level="title48" className="text-theme-primary">
          Master English with Confidence
        </Title>
        <p className="text-gray-600 mt-2">
          Explore our English learning programs tailored for every academic
          level.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course, index) => (
          <div
            key={index}
            className="border rounded-xl bg-white shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="p-5 flex flex-col gap-3">
              <p className="text-theme-secondary text-sm font-medium uppercase tracking-wide">
                {course.tag}
              </p>
              <h3 className="text-lg lg:text-2xl font-semibold text-theme-primary leading-snug">
                {course.title}
              </h3>
              <p className="text-gray-500 text-sm">{course.instructor}</p>

              {/* Common Features */}
              <ul className="text-gray-700 text-sm list-disc pl-5 mt-1 space-y-1">
                {baseFeatures.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>

              {/* Extra Features */}
              <div className="mt-1">
                <p className="text-theme-primary font-medium text-sm">
                  Extra Features:
                </p>
                <ul className="text-gray-600 text-sm list-disc pl-5 mt-1">
                  {course.extra.map((e, i) => (
                    <li key={i}>{e}</li>
                  ))}
                </ul>
              </div>

              {/* Course Meta */}
              <div className="flex justify-between items-center mt-4">
                <div className="flex items-center gap-2 text-gray-600 text-sm">
                  <Clock size={16} /> <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-1 text-sm">
                  <span>{course.rating}</span>{" "}
                  <StarRating rating={course.rating} />
                </div>
              </div>

              {/* Pricing */}
              <div className="flex justify-between items-center mt-3">
                <div className="flex items-center gap-2">
                  <p className="text-lg font-bold text-green-600">
                    {course.price}
                  </p>
                  <p className="text-gray-400 line-through text-sm">
                    {course.oldPrice}
                  </p>
                </div>
                <Link
                  to="/enroll"
                  className="text-sm px-4 py-2 rounded-full bg-theme-secondary text-white hover:bg-theme-primary transition duration-300"
                >
                  Enroll Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceAllCard;
