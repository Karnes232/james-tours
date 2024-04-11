import React from "react";
import Header from "../HeaderComponents/Header";

const Layout = ({ children, layoutData }) => {
  console.log(layoutData);
  return (
    <div className="min-h-screen font-montserrat flex flex-col justify-between overflow-x-hidden bg-primary-bg-color">
      <Header logo={layoutData.logo.gatsbyImage} />
      Hello World
      {children}
    </div>
  );
};

export default Layout;
