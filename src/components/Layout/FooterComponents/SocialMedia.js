import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaTiktok } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const SocialMedia = ({ layoutData, classes }) => {
  console.log(layoutData);
  return (
    <div className="">
      <div
        className={`mx-8 flex justify-around py-4 md:mx-auto md:max-w-md border-b border-gray-500 md:border-none ${classes}`}
      >
        {layoutData.facebook && (
          <a
            href={layoutData.facebook}
            target="_blank"
            aria-label="Facebook"
            rel="noreferrer"
          >
            <FaFacebookF className="footerIcons" />
          </a>
        )}

        {layoutData.instagram && (
          <a
            href={layoutData.instagram}
            target="_blank"
            aria-label="Instagram"
            rel="noreferrer"
          >
            <FaInstagram className="footerIcons" />
          </a>
        )}
        {layoutData.tiktok && (
          <a
            href={layoutData.tiktok}
            target="_blank"
            aria-label="tiktok"
            rel="noreferrer"
          >
            <FaTiktok className="footerIcons" />
          </a>
        )}

        {layoutData.email && (
          <a
            href={`mailto:${layoutData.email}`}
            aria-label="Gmail"
            rel="noreferrer"
          >
            <GrMail className="footerIcons" />
          </a>
        )}
      </div>
    </div>
  );
};

export default SocialMedia;
