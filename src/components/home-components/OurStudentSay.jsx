import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { MoveLeft, MoveRight, Star, Quote } from "lucide-react";
import { ImageProvider } from "../common/ImageProvider";
import Title from "../common/Title";
import { FaRegStarHalfStroke, FaStar } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

const testimonials = [
  {
    id: 1,
    text: "Since joining Key Issue Solving School, Ayman's hesitation in speaking English is completely gone. Now he tries to speak in English at home too!",
    name: "Ayesha Khan",
    title: "Ayman's Mother",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=250&h=250&fit=crop",
    rating: 5,
  },
  {
    id: 2,
    text: "The grammar classes are exceptionally well-structured. Rafi's writing vocabulary has expanded, and his school English grades improved remarkably.",
    name: "Ahmed Shafi",
    title: "Rafi's Father",
    image: "https://images.unsplash.com/photo-1619380061814-58f03707f082?q=80&w=250&h=250&fit=crop",
    rating: 4.5,
  },
  {
    id: 3,
    text: "I was worried about my daughter's English pronunciation and fluency, but the live speaking practice sessions here worked like magic!",
    name: "Nusrat Jahan",
    title: "Fathima's Mother",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=250&h=250&fit=crop",
    rating: 4,
  },
  {
    id: 4,
    text: "The reward system is amazing! Sabbir is now eager to do his English homework on time just to earn rewards and perform well in vivas.",
    name: "Kamrul Hassan",
    title: "Sabbir's Father",
    image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=250&h=250&fit=crop",
    rating: 4.5,
  },
  {
    id: 5,
    text: "The 1-on-1 style care in group classes is impressive. Even though it is online, the teachers monitor Tania's camera, focus, and participation constantly.",
    name: "Farhana Rahman",
    title: "Tania's Mother",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=250&h=250&fit=crop",
    rating: 5,
  },
  {
    id: 6,
    text: "KISS school has solved the most important issue — making students love studying. Saad enjoys his English sessions more than mobile games now!",
    name: "Mizanur Rahman",
    title: "Saad's Father",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=250&h=250&fit=crop",
    rating: 4.5,
  },
];

// ⭐ Function to display dynamic rating
const renderStars = (rating) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;

  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar key={`star-${i}`} />);
  }
  if (halfStar) stars.push(<FaRegStarHalfStroke key="half-star" />);
  return stars;
};

const OurStudentSay = () => {
  const { t } = useTranslation();

  return (
    <div className="section-padding-x py-8 lg:pb-12 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

      <div className="relative z-10">
        <div className="text-center my-8">
          <div className="inline-block pb-4">
            <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-semibold rounded-full shadow-lg">
              💬 {t("Student Reviews")}
            </span>
          </div>
          <Title
            level="title48"
            className="text-center !font-bold py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
          >
            {t("What Our Students Parents Have To Say").split("<br />").map((text, i) => (
              <React.Fragment key={i}>
                {text}
                {i === 0 && <br />}
              </React.Fragment>
            ))}
          </Title>
          <p className="text-gray-600 mt-2 w-full md:w-[55%] mx-auto text-center text-lg">
            {t("Student Description")}
          </p>
        </div>
      </div>

      <div className="relative z-10">
        <Swiper
          modules={[Navigation]}
          loop={true}
          spaceBetween={24}
          grabCursor={true}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          navigation={{
            nextEl: ".next-btn",
            prevEl: ".prev-btn",
          }}
          className="mt-6 lg:mt-8 xl:mt-12"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id} className="py-10">
              <div className="relative group">
                {/* Glowing Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>

                {/* Card */}
                <div className="relative bg-white p-8 rounded-2xl shadow-xl border border-gray-100 h-[290px] flex flex-col justify-between transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 overflow-hidden">
                  {/* Decorative Quote Icon */}
                  <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                    <Quote size={80} className="text-blue-500" />
                  </div>

                  {/* Top Accent Line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

                  <div className="relative z-10">
                    {/* Star Rating with Background */}
                    <div className="inline-flex items-center gap-1 py-2 px-3 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-full text-orange-400 shadow-sm">
                      {renderStars(item.rating)}
                    </div>

                    {/* Testimonial Text */}
                    <p className="md:text-[17px] py-4 text-gray-700 font-medium leading-relaxed">
                      "{t(`Testimonial ${item.id} Text`)}"
                    </p>
                  </div>

                  {/* User Info Section */}
                  <div className="flex items-center gap-4 pt-4 border-t border-gray-100 relative z-10">
                    {/* Avatar with Gradient Border */}
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-sm opacity-50"></div>
                      <img
                        className="relative w-14 h-14 object-cover rounded-full border-2 border-white shadow-lg"
                        src={item.image}
                        alt={item.name}
                      />
                    </div>
                    <div>
                      <h2 className="font-bold md:text-lg text-gray-800 group-hover:text-blue-600 transition-colors">
                        {t(`Testimonial ${item.id} Name`)}
                      </h2>
                      <p className="text-gray-500 text-sm">{t(`Testimonial ${item.id} Title`)}</p>
                    </div>
                  </div>

                  {/* Bottom Hover Indicator */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center gap-4 mt-2 relative z-10">
        <button className="prev-btn border-2 border-blue-500 text-blue-600 p-3 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 ease-in-out cursor-pointer shadow-lg hover:shadow-xl hover:scale-110">
          <MoveLeft size={20} />
        </button>
        <button className="next-btn border-2 border-blue-500 text-blue-600 p-3 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 ease-in-out cursor-pointer shadow-lg hover:shadow-xl hover:scale-110">
          <MoveRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default OurStudentSay;
