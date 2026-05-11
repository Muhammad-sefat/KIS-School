import { ImageProvider } from "@/components/common/ImageProvider";
import Title from "@/components/common/Title";
import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="section-padding-x pb-4 pt-6 bg-theme-primary">
      <div className="flex flex-col items-center justify-center text-center border-b border-gray-500 pb-4">
        <Link
          to="/"
          className="flex flex-col items-center justify-center gap-x-3 cursor-pointer"
        >
          <img
            className="w-[60px]"
            src={ImageProvider.logo}
            alt="logo"
          />

          <Title level="title36" className="!font-bold text-white">
            {t("KISS")}
          </Title>
        </Link>

        <p className="text-white mt-4 max-w-2xl leading-relaxed">
          {t("Footer About")}
        </p>
      </div>

      {/* Bottom note */}
      <div className="mt-6 text-center text-sm text-white">
        © {new Date().getFullYear()} {t("KIS")}{" "}
        {t("All rights reserved")}
      </div>
    </footer>
  );
};

export default Footer;