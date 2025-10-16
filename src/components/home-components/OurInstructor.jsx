import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";
import { ImageProvider } from "../common/ImageProvider";
import Title from "../common/Title";
import { Navigation } from "swiper/modules";

const instructors = [
  {
    id: 1,
    name: "Zubair",
    title: "Math Teacher",
    image: ImageProvider.instrustor,
    social: [
      ImageProvider.facebook,
      ImageProvider.linkedin,
      ImageProvider.twitter,
      ImageProvider.behance,
    ],
  },
  {
    id: 2,
    name: "Alvi Rahman",
    title: "English Teacher",
    image: ImageProvider.instrustor1,
    social: [
      ImageProvider.facebook,
      ImageProvider.linkedin,
      ImageProvider.twitter,
      ImageProvider.behance,
    ],
  },
  {
    id: 3,
    name: "Rakib Hasan",
    title: "Bangla Teacher",
    image: ImageProvider.instrustor2,
    social: [
      ImageProvider.facebook,
      ImageProvider.linkedin,
      ImageProvider.twitter,
      ImageProvider.behance,
    ],
  },
  {
    id: 4,
    name: "Sadia Nabila",
    title: "Science Teacher",
    image: ImageProvider.instrustor3,
    social: [
      ImageProvider.facebook,
      ImageProvider.linkedin,
      ImageProvider.twitter,
      ImageProvider.behance,
    ],
  },
  {
    id: 5,
    name: "Tuhin Ahmed",
    title: "ICT Teacher",
    image: ImageProvider.instrustor,
    social: [
      ImageProvider.facebook,
      ImageProvider.linkedin,
      ImageProvider.twitter,
      ImageProvider.behance,
    ],
  },
  {
    id: 6,
    name: "Nusrat Jahan",
    title: "Physics Teacher",
    image: ImageProvider.instrustor4,
    social: [
      ImageProvider.facebook,
      ImageProvider.linkedin,
      ImageProvider.twitter,
      ImageProvider.behance,
    ],
  },
  {
    id: 7,
    name: "Arif Chowdhury",
    title: "Chemistry Teacher",
    image: ImageProvider.instrustor2,
    social: [
      ImageProvider.facebook,
      ImageProvider.linkedin,
      ImageProvider.twitter,
      ImageProvider.behance,
    ],
  },
  {
    id: 8,
    name: "Rafiq Islam",
    title: "Biology Teacher",
    image: ImageProvider.instrustor5,
    social: [
      ImageProvider.facebook,
      ImageProvider.linkedin,
      ImageProvider.twitter,
      ImageProvider.behance,
    ],
  },
];

const OurInstructor = () => {
  const swiperRef = useRef(null);
  return (
    <div className="section-padding-x py-6 lg:py-12 relative">
      <button className="group flex items-center gap-2 px-3 py-1 text-sm font-medium border border-theme-primary text-theme-secondary hover:bg-theme-secondary hover:text-white hover:border-theme-secondary rounded-full transition-all duration-300 cursor-pointer overflow-hidden">
        <span className="relative flex items-center gap-2">
          <img
            className="w-[30px] transition-all duration-300 group-hover:translate-x-2"
            src={ImageProvider.framee}
            alt="image"
          />
          <span className="transition-all duration-300 group-hover:translate-x-2">
            Our Instructor
          </span>
        </span>
      </button>
      <Title level="title48" className="mt-2 text-theme-primary">
        Meet Our Expert Instructor
      </Title>
      <p className="text-gray mt-1">Learn From Creative Experts</p>
      {/* Custom Arrows */}
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
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        loop
        modules={[Navigation]}
        spaceBetween={24}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        grabCursor={true}
        className="mt-8"
      >
        {instructors.map((instructor) => (
          <SwiperSlide key={instructor.id}>
            <div className="w-full h-[450px] lg:h-[550px] relative overflow-hidden group cursor-pointer rounded-lg border">
              <Link to="/">
                <img
                  src={instructor.image}
                  className="w-full h-full object-cover group-hover:scale-[1.1] transition-all duration-700"
                  alt={instructor.name}
                />
              </Link>

              <div className="absolute top-[84%] transform group-hover:translate-y-[-10%] transition-all duration-500 w-full h-full left-0 z-20 right-0 text-center pt-1.5 lg:pt-3 bg-[#FAFDFF]">
                <h1 className="text-[1.2rem] lg:text-[1.5rem] font-semibold text-center capitalize">
                  {instructor.name}
                </h1>
                <p className="text-[#C6BDBD] text-sm lg:text-base pt-1 lg:pt-2">
                  {instructor.title}
                </p>
                <div className="flex items-center justify-center gap-4 pt-5">
                  {instructor.social.map((icon, index) => (
                    <img key={index} src={icon} alt="social-icon" />
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex items-center justify-center mt-6 lg:mt-12">
        <p
          path="/signup"
          className="group flex items-center justify-center gap-2 overflow-hidden bg-theme-primary text-white py-2 px-4 lg:px-8 rounded-full cursor-pointer hover:bg-theme-secondary transition-all duration-300"
        >
          <span className="transform transition-all duration-300 group-hover:-translate-x-2">
            Join Us
          </span>
          <ChevronRight
            size={20}
            className="transform transition-all duration-300 group-hover:translate-x-1"
          />
        </p>
      </div>
    </div>
  );
};

export default OurInstructor;
