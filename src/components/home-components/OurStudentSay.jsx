import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { MoveLeft, MoveRight, Star } from "lucide-react";
import { ImageProvider } from "../common/ImageProvider";
import Title from "../common/Title";
import { FaRegStarHalfStroke, FaStar } from "react-icons/fa6";

const testimonials = [
  {
    id: 1,
    text: "The English course was super helpful! I improved my speaking and writing skills within weeks. The lessons were clear and easy to follow.",
    name: "Ayesha Khan",
    title: "English Learning Student",
    image: ImageProvider.icon,
    rating: 5,
  },
  {
    id: 2,
    text: "I loved how interactive the English grammar classes were. The teacher explained everything with real examples and made learning fun!",
    name: "Rafi Ahmed",
    title: "English Learning Student",
    image: ImageProvider.icon1,
    rating: 4.5,
  },
  {
    id: 3,
    text: "This English course gave me confidence to speak fluently. The practice sessions and quizzes were super useful.",
    name: "Nusrat Jahan",
    title: "English Learning Student",
    image: ImageProvider.icon2,
    rating: 4,
  },
  {
    id: 4,
    text: "I joined to improve my IELTS preparation and it really worked! The lessons helped me polish my writing and vocabulary.",
    name: "Sabbir Hossain",
    title: "English Learning Student",
    image: ImageProvider.icon3,
    rating: 4.5,
  },
  {
    id: 5,
    text: "The best English course I’ve taken! The lessons are practical, and I actually enjoy learning every day now.",
    name: "Tania Rahman",
    title: "English Learning Student",
    image: ImageProvider.icon,
    rating: 5,
  },
  {
    id: 6,
    text: "Amazing experience! The English speaking sessions helped me overcome my hesitation. Highly recommend this platform.",
    name: "Mizanur Rahman",
    title: "English Learning Student",
    image: ImageProvider.icon1,
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
  if (halfStar) stars.push(<FaRegStarHalfStroke />);
  return stars;
};

const OurStudentSay = () => {
  return (
    <div className="section-padding-x pb-8 lg:pb-12">
      <div className="relative">
        <Title
          level="title48"
          className="text-center !font-bold py-4 text-theme-primary"
        >
          What Our Students <br /> Have To Say
        </Title>
        <p className="text-gray mt-2 w-full md:w-[55%] mx-auto text-center">
          Our English learners share their journeys of growth and confidence.
          From improving fluency to mastering grammar, every story inspires us
          to keep creating better learning experiences.
        </p>
      </div>

      <div className="">
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
              <div className="bg-white p-8 rounded-lg shadow border h-[290px] flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1 py-3 text-orange-400">
                    {renderStars(item.rating)}
                  </div>
                  <p className="md:text-[17px] py-2 text-[#141414] font-medium">
                    "{item.text}"
                  </p>
                </div>
                <div className="flex items-center gap-4 pt-4">
                  <img
                    className="w-12 h-12 object-cover rounded-full"
                    src={item.image}
                    alt={item.name}
                  />
                  <div>
                    <h2 className="font-semibold md:text-lg">{item.name}</h2>
                    <p className="text-gray text-sm">{item.title}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="flex justify-center gap-4 mt-2">
        <button className="prev-btn border border-theme-primary text-theme-primary p-3 rounded-full hover:bg-theme-primary hover:text-white transition-all duration-200 ease-in-out cursor-pointer">
          <MoveLeft size={20} />
        </button>
        <button className="next-btn border border-theme-primary text-theme-primary p-3 rounded-full hover:bg-theme-primary hover:text-white transition-all duration-200 ease-in-out cursor-pointer">
          <MoveRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default OurStudentSay;
