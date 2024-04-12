import React from "react";
import Logo from "./Logo";
import LinksRight from "./LinksRight";
import HamburgerMenu from "./HamburgerMenu";

const Header = ({ logo, layoutData }) => {
  return (
    <>
      <nav className="bg-white w-screen z-50 h-24 md:h-36 fixed top-0 shadow-md">
        <div className="flex items-center justify-between bg-transparent max-w-6xl mx-5 md:mx-10 lg:mx-8 xl:mx-auto">
          <Logo logo={logo} />
          <LinksRight />
          <HamburgerMenu layoutData={layoutData} />
        </div>
      </nav>
      <div className="mb-24 md:mb-36 xl:mb-48"></div>
    </>
  );
};

export default Header;
