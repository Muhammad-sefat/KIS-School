import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { Sun, Moon, MoveUpRight } from "lucide-react";
import { ImageProvider } from "@/components/common/ImageProvider";
import { useTheme } from "@/context/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const navItems = [
    { id: 1, name: "Home", path: "/" },
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
      className={`fixed w-full z-50 transition-all duration-300 section-padding-x ${scrolled ? "bg-theme-primary shadow-md" : "bg-theme-primary/99"
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
                `text-sm lg:text-base font-medium transition hover:text-theme-secondary ${isActive ? "text-theme-secondary" : ""
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Theme Toggle Button */}
        <div className="hidden md:flex">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-theme-secondary text-white hover:bg-white hover:text-theme-primary transition duration-300 shadow-lg cursor-pointer"
            aria-label="Toggle Theme"
          >
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-theme-secondary text-white"
            aria-label="Toggle Theme"
          >
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <button
            className="text-white text-2xl"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-[260px] h-full bg-theme-primary/95 backdrop-blur-sm text-white transform transition-transform duration-300 z-40 ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
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
      </div>
    </header>

  );
};

export default Navbar;
