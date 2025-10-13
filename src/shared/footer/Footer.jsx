import { ImageProvider } from "@/components/common/ImageProvider";
import Title from "@/components/common/Title";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="section-padding-x pb-6 pt-12 bg-theme-primary">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row items-start justify-between gap-10 border-b border-gray-500 pb-4">
        {/* Logo + About */}
        <div className="w-full lg:w-[40%] flex flex-col items-center lg:items-start text-center lg:text-left">
          <Link
            to="/"
            className="flex items-center lg:items-start justify-center cursor-pointer gap-4"
          >
            <img className="w-[60px]" src={ImageProvider.logo} alt="logo" />
            <div className="flex flex-col items-center gap-1 mt-2">
              <Title level="title36" className="!font-bold text-white">
                KISS
              </Title>
            </div>
          </Link>
          <p className="text-white w-full mt-4 max-w-lg">
            Empowering learners across Asia to solve real-world challenges
            through practical, skill-based education. Learn. Apply. Grow with
            KIS School.
          </p>
        </div>

        {/* Company Links */}
        <div className="w-full sm:w-[50%] lg:w-[25%] text-center">
          <Title level="title22" className="!font-bold mb-4 text-white">
            Company
          </Title>
          <ul className="flex flex-col items-center gap-2 text-white">
            <li className="cursor-pointer hover:text-theme-secondary hover:underline transition ease-in-out w-fit">
              <Link to="/about-us">About Us</Link>
            </li>
            <li className="cursor-pointer hover:text-theme-secondary hover:underline transition ease-in-out w-fit">
              <Link to={"/service"}>Our Service</Link>
            </li>
            <li className="cursor-pointer hover:text-theme-secondary hover:underline transition ease-in-out w-fit">
              <Link to="/">Reports</Link>
            </li>
          </ul>
        </div>

        {/* Help Links */}
        <div className="w-full sm:w-[50%] lg:w-[25%] text-center">
          <Title level="title22" className="!font-bold mb-4 text-white">
            Help
          </Title>
          <ul className="flex flex-col items-center gap-2 text-white">
            <li className="cursor-pointer hover:text-theme-secondary hover:underline transition ease-in-out w-fit">
              <Link to="/contact-us">Contact Us</Link>
            </li>
            <li className="cursor-pointer hover:text-theme-secondary hover:underline transition ease-in-out w-fit">
              <Link to={"/"}>FAQs</Link>
            </li>
            <li className="cursor-pointer hover:text-theme-secondary hover:underline transition ease-in-out w-fit">
              <Link to="/">Privacy Policy</Link>
            </li>
            <li className="cursor-pointer hover:text-theme-secondary hover:underline transition ease-in-out w-fit">
              <Link to="/">Terms & Conditions</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom note */}
      <div className="mt-6 text-center text-sm text-white">
        © {new Date().getFullYear()} KISS All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
