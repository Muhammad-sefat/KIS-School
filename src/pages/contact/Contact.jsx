import ContactBanner from "@/components/contact-components/ContactBanner";
import ContactSection from "@/components/contact-components/ContactSection";
import React from "react";
import { ScrollRestoration } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <ScrollRestoration />
      <ContactBanner />
      <ContactSection />
    </>
  );
};

export default Contact;
