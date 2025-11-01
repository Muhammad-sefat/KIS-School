/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { slideInBottom } from "@/animation/Animation";

const ContactSection = () => {
  const { register, handleSubmit, reset } = useForm();
  const [hoveredCard, setHoveredCard] = useState(null);

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  const contactMethods = [
    {
      icon: "📞",
      title: "Phone / WhatsApp",
      value: "01796373902",
      gradient: "from-green-500 to-teal-600",
      link: "tel:01796373902",
    },
    {
      icon: "✉️",
      title: "Email",
      value: "contactkeyissuesolvingschool@gmail.com",
      gradient: "from-blue-500 to-indigo-600",
      link: "mailto:contactkeyissuesolvingschool@gmail.com",
    },
    {
      icon: "🌐",
      title: "Website",
      value: "kis-school.vercel.app",
      gradient: "from-purple-500 to-pink-600",
      link: "https://kis-school.vercel.app",
    },
  ];

  const socialMedia = [
    {
      icon: "📘",
      name: "Facebook",
      gradient: "from-blue-400 to-blue-600",
      link: "#",
    },
    {
      icon: "📺",
      name: "YouTube",
      gradient: "from-red-400 to-red-600",
      link: "#",
    },
  ];

  return (
    <motion.section
      variants={slideInBottom}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="section-padding-x py-20 bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900"
    >
      <div className="max-w-[1600px] mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-transparent animate-pulse">
            Get in Touch with KISS
          </h2>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-yellow-400 to-purple-500 rounded-full mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're here to guide, support, and inspire your English learning
            journey 💬
          </p>
        </div>

        {/* Contact Methods Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.link}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className="relative group block"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r ${method.gradient} rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300`}
              ></div>
              <div className="relative bg-gray-800 bg-opacity-90 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 transform transition-all duration-300 hover:scale-105">
                <div
                  className={`text-4xl mb-3 transform transition-transform duration-300 ${
                    hoveredCard === index ? "scale-110 rotate-12" : ""
                  }`}
                >
                  {method.icon}
                </div>
                <h3
                  className={`text-xl font-bold mb-2 bg-gradient-to-r ${method.gradient} bg-clip-text text-transparent`}
                >
                  {method.title}
                </h3>
                <p className="text-gray-300 text-sm break-words">
                  {method.value}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* LEFT SIDE - Info */}
          <div className="space-y-8">
            {/* Institution Info Card */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur-xl opacity-40"></div>
              <div className="relative bg-gray-800 bg-opacity-90 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
                <div className="text-5xl mb-4">🏫</div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  Key Issue Solving School
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  We don't just teach English — we transform students'
                  confidence, communication, and mindset. Even though we are an
                  online institution, we make sure every learner receives
                  real-time support — just like an offline classroom, and even
                  more effective.
                </p>
                <div className="h-px bg-gradient-to-r from-cyan-500 to-blue-600 mb-4"></div>
                <p className="text-sm text-gray-400">
                  📍 Type: Online English Learning Institution
                </p>
              </div>
            </div>

            {/* Office Hours Card */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl blur-xl opacity-40"></div>
              <div className="relative bg-gray-800 bg-opacity-90 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
                <div className="text-4xl mb-3">🕒</div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Office Hours
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-green-500 to-teal-600"></span>
                    <p className="text-gray-300">
                      🗓 Saturday – Thursday:{" "}
                      <span className="text-white font-semibold">
                        10:00 AM – 8:00 PM
                      </span>
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-red-500 to-red-600"></span>
                    <p className="text-gray-300">
                      ❌ Friday:{" "}
                      <span className="text-white font-semibold">Closed</span>
                    </p>
                  </div>
                </div>
                <p className="text-sm text-gray-400 mt-4">
                  ⏱️ Our support team replies to all messages within 24 hours
                </p>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex gap-4">
              {socialMedia.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  className="relative group flex-1"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${social.gradient} rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300`}
                  ></div>
                  <div className="relative bg-gray-800 bg-opacity-90 backdrop-blur-sm rounded-xl p-4 border border-gray-700 text-center transform transition-all duration-300 hover:scale-105">
                    <div className="text-3xl mb-2">{social.icon}</div>
                    <p
                      className={`font-semibold bg-gradient-to-r ${social.gradient} bg-clip-text text-transparent`}
                    >
                      {social.name}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE - CONTACT FORM */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl blur-2xl opacity-30"></div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="relative bg-gray-800 bg-opacity-90 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 shadow-2xl"
            >
              <div className="text-center mb-6">
                <div className="text-5xl mb-3">💬</div>
                <h3 className="text-3xl font-bold text-white mb-2">
                  Send Us a Message
                </h3>
                <p className="text-gray-400">
                  Let's start your journey to English fluency!
                </p>
              </div>

              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full bg-gray-900 bg-opacity-50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300"
                    {...register("name", { required: true })}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-gray-900 bg-opacity-50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300"
                    {...register("email", { required: true })}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    className="w-full bg-gray-900 bg-opacity-50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300"
                    {...register("phone")}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    placeholder="Write your message here..."
                    className="w-full bg-gray-900 bg-opacity-50 border border-gray-600 rounded-lg px-4 py-3 h-32 text-white placeholder-gray-500 outline-none resize-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300"
                    {...register("message")}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-gray-900 font-bold py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Send Message 📩
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
          <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 text-center border-2 border-purple-400">
            <div className="text-5xl mb-4">✨</div>
            <h3 className="text-3xl font-bold text-white mb-3">
              Join Us & Transform Your English
            </h3>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Have a question? Want to join our next course? Or just want to
              know how our reward-based system works?
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection;
