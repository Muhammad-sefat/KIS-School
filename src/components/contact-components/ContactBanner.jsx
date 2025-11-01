// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import React, { useRef } from "react";
import { ImageProvider } from "../common/ImageProvider";

const ContactBanner = () => {
  return (
    <section className="relative w-full section-padding-x h-[350px] md:h-[700px] lg:h-[850px] overflow-hidden">
      <img
        src={ImageProvider.contactt}
        alt="Banner"
        className="absolute top-0 left-0 w-full h-full"
      />
    </section>
  );
};

export default ContactBanner;
