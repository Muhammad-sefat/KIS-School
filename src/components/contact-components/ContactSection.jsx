/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion } from "framer-motion";
import { slideInBottom } from "@/animation/Animation";

const ContactSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredSocial, setHoveredSocial] = useState(null);

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
  ];

  const businessInfo = [
    {
      icon: "🏛️",
      title: "Trade Licence No.",
      value: "TRADE-2024-KISS-00782",
      gradient: "from-amber-500 to-yellow-600",
    },
    {
      icon: "📋",
      title: "Registration No.",
      value: "REG-BD-KISS-20240015",
      gradient: "from-rose-500 to-pink-600",
    },
    {
      icon: "📍",
      title: "Office Location",
      value: "Mirpur-10, Dhaka-1216, Bangladesh",
      gradient: "from-cyan-500 to-blue-600",
    },
  ];

  const socialMedia = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      ),
      name: "Facebook",
      gradient: "from-blue-500 to-blue-700",
      link: "#",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
        </svg>
      ),
      name: "TikTok",
      gradient: "from-yellow-500 to-yellow-600",
      link: "#",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path
            d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
            fill="none"
            stroke="white"
            strokeWidth="1.5"
          />
          <line
            x1="17.5"
            y1="6.5"
            x2="17.51"
            y2="6.5"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
      name: "Instagram",
      gradient: "from-purple-500 via-pink-500 to-orange-400",
      link: "#",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
      name: "LinkedIn",
      gradient: "from-sky-500 to-blue-700",
      link: "#",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.4a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
          <polygon
            points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"
            fill="white"
          />
        </svg>
      ),
      name: "YouTube",
      gradient: "from-red-500 to-red-700",
      link: "#",
    },
  ];

  return (
    <motion.section
      variants={slideInBottom}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="section-padding-x section-padding-y bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900"
    >
      <div className="max-w-[1600px] mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-transparent animate-pulse">
            Get in Touch with KISS
          </h2>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-yellow-400 to-purple-500 rounded-full mb-6"></div>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            We're here to guide, support, and inspire your English learning
            journey 💬
          </p>
        </div>

        {/* Contact Methods Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
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
                    hoveredCard === index ? "scale-105 rotate-6" : ""
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

        {/* Business Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {businessInfo.map((item, index) => (
            <div key={index} className="relative group">
              <div
                className={`absolute inset-0 bg-gradient-to-r ${item.gradient} rounded-2xl blur-xl opacity-40 group-hover:opacity-65 transition-opacity duration-300`}
              ></div>
              <div className="relative bg-gray-800 bg-opacity-90 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 transform transition-all duration-300 hover:scale-105 h-full">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3
                  className={`text-xl font-bold mb-2 bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}
                >
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm break-words">
                  {item.value}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Institution Info Card */}
        <div className="mb-12">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur-xl opacity-40"></div>
            <div className="relative bg-gray-800 bg-opacity-90 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-700">
              <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="text-5xl shrink-0">🏫</div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                    Key Issue Solving School
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    We don't just teach English — we transform students'
                    confidence, communication, and mindset. Even though we are
                    an online institution, we make sure every learner receives
                    real-time support — just like an offline classroom, and even
                    more effective.
                  </p>
                  <div className="h-px bg-gradient-to-r from-cyan-500 to-blue-600 mb-3"></div>
                  <p className="text-sm text-gray-400">
                    📍 Type: Online English Learning Institution
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-6">
            Follow Us On Social Media
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {socialMedia.map((social, index) => (
              <a
                key={index}
                href={social.link}
                onMouseEnter={() => setHoveredSocial(index)}
                onMouseLeave={() => setHoveredSocial(null)}
                className="relative group"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${social.gradient} rounded-xl blur-lg opacity-50 group-hover:opacity-80 transition-opacity duration-300`}
                ></div>
                <div className="relative bg-gray-800 bg-opacity-90 backdrop-blur-sm rounded-xl p-4 border border-gray-700 text-center transform transition-all duration-300 hover:scale-105">
                  <div
                    className={`flex items-center justify-center w-12 h-12 mx-auto mb-2 rounded-full bg-gradient-to-r ${social.gradient} text-white transform transition-transform duration-300 ${
                      hoveredSocial === index ? "scale-110 rotate-6" : ""
                    }`}
                  >
                    {social.icon}
                  </div>
                  <p
                    className={`font-semibold text-sm bg-gradient-to-r ${social.gradient} bg-clip-text text-transparent`}
                  >
                    {social.name}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
          <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-6 md:p-8 text-center border-2 border-purple-400">
            <div className="text-5xl mb-4">✨</div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Join Us & Transform Your English
            </h3>
            <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto">
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
