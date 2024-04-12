import React from "react";
import SocialMedia from "./SocialMedia";
import Sitemap from "./Sitemap";
import Copyright from "./Copyright";

const Footer = ({ layoutData }) => {
  return (
    <>
      <footer className="border-b bg-gray-800 shadow-sm w-screen">
        <div className="mx-5 mt-5 flex max-w-6xl flex-col justify-between xl:mx-auto">
          <SocialMedia layoutData={layoutData} classes={"text-white"} />
          <Sitemap />
          <div className="flex flex-col justify-between md:flex-row">
            <Copyright tourCompany={layoutData.tourCompanyName} />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
