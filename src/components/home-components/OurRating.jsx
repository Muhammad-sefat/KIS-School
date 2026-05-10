import React from "react";
import { motion } from "framer-motion";
import { slideInBottom } from "@/animation/Animation";
import Counter from "../common/Counter";
import Title from "../common/Title";

const OurRating = () => {
  return (
    <motion.div
      variants={slideInBottom}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="section-padding-x py-6 mb-6 border-t border-b border-dashed grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-12"
    >
      <div className="text-center">
        <h2 className="text-[28px] md:text-[38px] lg:text-[48px] font-bold mb-3 text-theme-primary">
          <Counter end={15} />
        </h2>
        <Title level="title18" className="text-gray">
          Successfully Trained
        </Title>
      </div>
      <div className="text-center">
        <h2 className="text-[28px] md:text-[38px] lg:text-[48px] font-bold mb-3 text-theme-primary">
          <Counter end={45} />
        </h2>
        <Title level="title18" className="text-gray">
          Student Enrolled
        </Title>
      </div>
      <div className="text-center">
        <h2 className="text-[28px] md:text-[38px] lg:text-[48px] font-bold mb-3 text-theme-primary">
          <Counter end={11} />
        </h2>
        <Title level="title18" className="text-gray">
          Class Completed
        </Title>
      </div>
      <div className="text-center">
        <h2 className="text-[28px] md:text-[38px] lg:text-[48px] font-bold mb-3 text-theme-primary">
          <Counter end={125} />
        </h2>
        <Title level="title18" className="text-gray">
          Top Instructor
        </Title>
      </div>
    </motion.div>
  );
};

export default OurRating;
