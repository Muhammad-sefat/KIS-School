import React from "react";
import { useForm } from "react-hook-form";

const ContactSection = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset(); // clear form after submission
  };

  return (
    <section className="section-padding-x py-20 bg-white dark:bg-slate-900">
      <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* LEFT SIDE */}
        <div className="flex flex-col gap-6">
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
            <div>
              <p className="font-merriweather font-semibold text-xl">Email</p>
              <p className="text-gray text-sm md:text-base">
                support@kisschool.com
              </p>
            </div>
            <div>
              <p className="font-merriweather font-semibold text-xl">Call Us</p>
              <p className="text-gray text-sm md:text-base">+1 212 461 0547</p>
            </div>
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
    </section>
  );
};

export default ContactSection;
