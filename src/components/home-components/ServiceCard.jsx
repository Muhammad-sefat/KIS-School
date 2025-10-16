import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Clock, Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { ImageProvider } from "../common/ImageProvider";
import Title from "../common/Title";
import { Navigation } from "swiper/modules";

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
    image: ImageProvider.course,
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
  const [showArrows, setShowArrows] = useState(false);
  const swiperRef = useRef(null);

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

      {/* Custom Arrows */}
      {showArrows && (
        <>
          <div className="absolute top-1/2 left-2 xl:left-12 z-10 transform -translate-y-1/2">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="p-2 rounded-full bg-white text-theme-primary border border-custom-primary hover:text-white shadow hover:bg-theme-primary transition duration-300 cursor-pointer"
            >
              <ChevronLeft size={24} />
            </button>
          </div>
          <div className="absolute top-1/2 right-2 xl:right-12 z-10 transform -translate-y-1/2">
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="p-2 rounded-full bg-white text-theme-primary border border-theme-primary hover:text-white shadow hover:bg-theme-primary transition duration-300 cursor-pointer"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </>
      )}

      {/* Swiper Section */}
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          const shouldShow = swiper.slides.length > swiper.params.slidesPerView;
          setShowArrows(shouldShow);
        }}
        onResize={(swiper) => {
          const shouldShow = swiper.slides.length > swiper.params.slidesPerView;
          setShowArrows(shouldShow);
        }}
        loop={courses.length > 3}
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={3}
        speed={600}
        touchRatio={1.5}
        grabCursor={true}
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 10 },
          640: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 25 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }}
        className="will-change-transform"
      >
        {courses.map((course, index) => (
          <SwiperSlide key={index}>
            <div className="border rounded-xl bg-white shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
              <img
                src={course.image}
                alt={course.title}
                width={400}
                height={200}
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
                <ul className="text-gray-700 text-sm list-disc pl-5 mt-1 space-y-1">
                  {baseFeatures.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
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
                <div className="flex justify-between items-center mt-4">
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <Clock size={16} /> <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm">
                    <span>{course.rating}</span>{" "}
                    <StarRating rating={course.rating} />
                  </div>
                </div>
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
                    to="https://forms.gle/gDvnNA5KD7V5cdVQ8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm px-4 py-2 rounded-full bg-theme-secondary text-white hover:bg-theme-primary transition duration-300"
                  >
                    Enroll Now
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* View All */}
      <div className="flex justify-center mt-10">
        <Link
          to="/service"
          className="px-6 py-3 text-sm font-medium rounded-full text-theme-primary border border-theme-primary hover:bg-theme-secondary hover:text-white transition duration-300"
        >
          View All Courses
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
