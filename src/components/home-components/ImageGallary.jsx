import React from "react";
import { useTranslation } from "react-i18next";
import Title from "../common/Title";

import afrojaImg from "../../assets/images/Afroja.jpeg";
import halimaImg from "../../assets/images/Halima.jpeg";
import akibImg from "../../assets/images/Akib.jpeg";
import samiaImg from "../../assets/images/Samia.jpeg";

const placeholderImg =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23e2e8f0'/%3E%3Ccircle cx='200' cy='110' r='50' fill='%2394a3b8'/%3E%3Cpath d='M200 185c-60 0-110 30-110 70h220c0-40-50-70-110-70z' fill='%2394a3b8'/%3E%3Ctext x='200' y='260' text-anchor='middle' fill='%2364748b' font-size='18' font-family='sans-serif'%3EImage Missing%3C/text%3E%3C/svg%3E";

const galleryItems = [
  {
    id: 1,
    image: placeholderImg,
  },
  {
    id: 2,
    image: afrojaImg,
  },
  {
    id: 3,
    image: halimaImg,
  },
  {
    id: 4,
    image: akibImg,
  },
  {
    id: 5,
    image: samiaImg,
  },
];
function ImageGallary() {
  const { t } = useTranslation();

  return (
    <div className="py-12 bg-gradient-to-br from-purple-50 via-blue-50 to-slate-50 relative overflow-hidden">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
        .hover-pause-container:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>

      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

      <div className="relative z-10 section-padding-x">
        <div className="text-center my-4">
          <Title
            level="title48"
            className="text-center !font-bold py-2 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent"
          >
            {t("Proud Learners Title")}
          </Title>
        </div>
      </div>

      <div className="relative z-10 mt-8 select-none w-full overflow-hidden hover-pause-container py-4">
        <div className="flex gap-6 w-max animate-marquee">
          {galleryItems.map((item) => (
            <div
              key={`first-${item.id}`}
              className="relative group overflow-hidden rounded-2xl w-[220px] sm:w-[280px] aspect-[4/3] shadow-xl border border-gray-100/30 transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer bg-white flex-shrink-0"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={t(`Gallery Item ${item.id} Name`)}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />

              {/* Sliding Overlay from Bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4 flex flex-col justify-end translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <div className="text-left relative z-10">
                  <h4 className="text-white font-bold text-[17px] md:text-lg leading-tight drop-shadow-md">
                    {t(`Gallery Item ${item.id} Name`)}
                  </h4>
                  <p className="text-blue-300 font-semibold text-[11px] md:text-sm mt-1 tracking-wide">
                    {t(`Gallery Item ${item.id} Class`)}
                  </p>
                  <p className="text-gray-300 text-[11px] md:text-xs mt-0.5 tracking-wide">
                    {t(`Gallery Item ${item.id} School`)}
                  </p>
                  <p className="text-blue-300 font-semibold text-[11px] md:text-sm mt-0.5 tracking-wide">
                    {t(`Gallery Item ${item.id} District`)}
                  </p>
                </div>

                {/* Elegant bottom accent line inside overlay */}
                <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mt-2 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100 origin-left"></div>
              </div>
            </div>
          ))}

          {/* Second loop (exact copy for seamless transition) */}
          {galleryItems.map((item) => (
            <div
              key={`second-${item.id}`}
              className="relative group overflow-hidden rounded-2xl w-[220px] sm:w-[280px] aspect-[4/3] shadow-xl border border-gray-100/30 transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer bg-white flex-shrink-0"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={t(`Gallery Item ${item.id} Name`)}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />

              {/* Sliding Overlay from Bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4 flex flex-col justify-end translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <div className="text-left relative z-10">
                  <h4 className="text-white font-bold text-[17px] md:text-lg leading-tight drop-shadow-md">
                    {t(`Gallery Item ${item.id} Name`)}
                  </h4>
                  <p className="text-blue-300 font-semibold text-[11px] md:text-sm mt-1 tracking-wide">
                    {t(`Gallery Item ${item.id} Class`)}
                  </p>
                  <p className="text-gray-300 text-[11px] md:text-xs mt-0.5 tracking-wide">
                    {t(`Gallery Item ${item.id} School`)}
                  </p>
                  <p className="text-blue-300 font-semibold text-[11px] md:text-sm mt-0.5 tracking-wide">
                    {t(`Gallery Item ${item.id} District`)}
                  </p>
                </div>

                {/* Elegant bottom accent line inside overlay */}
                <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mt-2 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100 origin-left"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ImageGallary;
