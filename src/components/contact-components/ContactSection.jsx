/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { ImageProvider } from "../common/ImageProvider";
import { slideInBottom } from "@/animation/Animation";

const ContactSection = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <motion.section
      variants={slideInBottom}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="section-padding-x py-20 bg-white dark:bg-slate-900"
    >
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* LEFT SIDE */}
        <div className="flex flex-col gap-6 relative">
          <h2 className="font-merriweather font-bold text-theme-primary text-3xl md:text-5xl">
            Get in touch
          </h2>
          <p className="text-gray text-base md:text-lg leading-relaxed">
            Have any questions or just want to say hello? Reach out to us. At{" "}
            <span className="font-semibold text-theme-primary">KIS School</span>
            , we value every learner and instructor. Whether you’re exploring
            new opportunities, need technical support, or want to collaborate,
            our team is always ready to help.
          </p>

          <div className="flex flex-col sm:flex-row gap-10 mt-4">
            <div className="flex items-center gap-2">
              <img src={ImageProvider.email} alt="email" />
              <div>
                <p className="font-merriweather font-semibold text-xl">Email</p>
                <p className="text-gray text-sm md:text-base">
                  contactkeyissuesolvingschool@gmail.com
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <img src={ImageProvider.call} alt="call" />
              <div>
                <p className="font-merriweather font-semibold text-xl">
                  Call Us
                </p>
                <p className="text-gray text-sm md:text-base">01796373902</p>
              </div>
            </div>
          </div>
          <div className="hidden md:block absolute -bottom-80 left-1/2 transform -translate-x-1/2">
            <img src={ImageProvider.get} alt="image" />
          </div>
        </div>

        {/* RIGHT SIDE - CONTACT FORM */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-6 bg-white dark:bg-slate-800 shadow-lg rounded-2xl p-8 border border-theme-primary/20"
        >
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-theme-primary">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="border border-theme-primary/50 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-theme-primary"
              {...register("name", { required: true })}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-semibold text-theme-primary">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="border border-theme-primary/50 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-theme-primary"
              {...register("email", { required: true })}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-semibold text-theme-primary">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              className="border border-theme-primary/50 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-theme-primary"
              {...register("phone")}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-semibold text-theme-primary">Message</label>
            <textarea
              placeholder="Write your message here..."
              className="border border-theme-primary/50 rounded-lg px-4 py-3 h-32 outline-none resize-none focus:ring-2 focus:ring-theme-primary"
              {...register("message")}
            />
          </div>

          <button
            type="submit"
            className="bg-theme-primary hover:bg-theme-secondary text-white font-semibold py-3 rounded-lg transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </motion.section>
  );
};

export default ContactSection;
