import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { MoveUpRight } from "lucide-react";
import { ImageProvider } from "@/components/common/ImageProvider";

const Navbar = () => {
  const navItems = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About Us", path: "/about-us" },
    { id: 3, name: "Service", path: "/service" },
    { id: 4, name: "Contact", path: "/contact-us" },
  ];

  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 section-padding-x ${
        scrolled ? "bg-theme-primary shadow-md" : "bg-theme-primary/99"
      }`}
    >
      <div className="py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={ImageProvider.logo}
            alt="KIS School Logo"
            className="h-8 w-8 object-cover"
          />
          <span className="text-white font-bold text-lg lg:text-xl">KISS</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-white">
          {navItems.map((item) => (
            <NavLink
              key={item.id}
              to={item.path}
              className={({ isActive }) =>
                `text-sm lg:text-base font-medium transition hover:text-theme-secondary ${
                  isActive ? "text-theme-secondary" : ""
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Sign Up Button */}
        <div className="hidden md:flex">
          <Link
            to="/sign-up"
            className="group flex items-center gap-2 px-4 py-2 text-sm lg:text-base font-medium text-white bg-theme-secondary rounded-full hover:bg-white hover:text-theme-primary transition duration-300"
          >
            Sign Up
            <MoveUpRight
              size={16}
              className="transform transition-all duration-300 ease-in-out group-hover:translate-x-1 group-hover:rotate-[45deg]"
            />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-[260px] h-full bg-theme-primary/95 backdrop-blur-sm text-white transform transition-transform duration-300 z-40 ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-5 py-4 border-b border-white/20">
          <h2 className="font-bold text-lg">KIS School</h2>
          <FiX className="text-2xl cursor-pointer" onClick={closeMenu} />
        </div>
        <nav className="flex flex-col gap-4 px-6 mt-6">
          {navItems.map((item) => (
            <NavLink
              key={item.id}
              to={item.path}
              className="text-base font-medium hover:text-theme-secondary"
              onClick={closeMenu}
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
        <div className="px-6 mt-8">
          <Link
            to="/signup"
            onClick={closeMenu}
            className="block text-center bg-theme-secondary py-2 rounded-full font-medium hover:bg-white hover:text-theme-primary transition"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
