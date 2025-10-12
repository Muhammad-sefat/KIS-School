import { ImageProvider } from "@/components/common/ImageProvider";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const ServiceBanner = () => {
  const textRef = useRef(null);
  const subtitleRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      [textRef.current, subtitleRef.current],
      {
        opacity: 0,
        y: 150,
        scale: 0.8,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.3,
        stagger: 0.2,
      }
    );
  }, []);

  return (
    <section className="relative w-full section-padding-x h-[350px] md:h-[700px] lg:h-[850px] overflow-hidden">
      <img
        src={ImageProvider.contact}
        alt="Banner"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10" />

      <div className="relative z-20 flex flex-col justify-center h-full  text-white px-4">
        <div className="max-w-[1315px]  mx-auto text-center w-full">
          <h2
            ref={textRef}
            className="text-white text-3xl lg:text-5xl font-bold font-merriweather"
          >
            Service
          </h2>
          <p
            ref={subtitleRef}
            className="max-w-3xl mx-auto text-center mt-4 leading-normal text-[17px]"
          >
            At KIS School, we make English learning simple, effective, and fun —
            helping you build real-world communication skills step by step.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServiceBanner;
