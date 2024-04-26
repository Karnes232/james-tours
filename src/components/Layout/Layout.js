import React from "react";
import Header from "./HeaderComponents/Header";
import Footer from "./FooterComponents/Footer";

const Layout = ({ children, layoutData, effectImage }) => {
  return (
    <div className="min-h-screen font-montserrat flex flex-col justify-between overflow-x-hidden bg-primary-bg-color">
      <Header logo={layoutData.logo.gatsbyImage} layoutData={layoutData} />
      {children}
      <Footer layoutData={layoutData} effectImage={effectImage} />
    </div>
  );
};

export default Layout;
