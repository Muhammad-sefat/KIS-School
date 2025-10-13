import Footer from "@/shared/footer/Footer";
import Navbar from "@/shared/navbar/Navbar";
import Lenis from "lenis";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
