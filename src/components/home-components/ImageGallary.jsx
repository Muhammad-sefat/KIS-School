/* eslint-disable no-unused-vars */
import React from "react";
import { useTranslation } from "react-i18next";
import Title from "../common/Title";

const galleryItems = [
    {
        id: 1,
        image:
            "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80",
    },
    {
        id: 2,
        image:
            "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80",
    },
    {
        id: 3,
        image:
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80",
    },
    {
        id: 4,
        image:
            "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80",
    },
    {
        id: 5,
        image:
            "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=600&q=80",
    },
    {
        id: 6,
        image:
            "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80",
    },
    {
        id: 7,
        image:
            "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=600&q=80",
    },
    {
        id: 8,
        image:
            "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=80",
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
                                    <p className="text-blue-300 font-semibold text-xs md:text-sm mt-1 tracking-wide">
                                        {t(`Gallery Item ${item.id} School`)}
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
                                    <p className="text-blue-300 font-semibold text-xs md:text-sm mt-1 tracking-wide">
                                        {t(`Gallery Item ${item.id} School`)}
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