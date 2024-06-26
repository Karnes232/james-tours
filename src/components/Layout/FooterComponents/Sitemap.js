import { Link } from "gatsby";

import React from "react";

const Sitemap = () => {
  return (
    <div className="border-b border-white mx-8">
      <div className="flex flex-col justify-between pt-4 md:mx-auto md:max-w-2xl md:flex-row">
        <Link to="/">
          <p className="footerSitemap">Home</p>
        </Link>
        <Link to="/tours" state={{ tourGroup: "All" }}>
          <p className="footerSitemap">Tours</p>
        </Link>
        <Link to="/about">
          <p className="footerSitemap">About</p>
        </Link>
        <Link to="/contact">
          <p className="footerSitemap">Contact</p>
        </Link>
      </div>
      <div className="flex flex-col justify-around pb-4 md:pt-4 md:mx-auto md:max-w-2xl md:flex-row">
        <Link to="/information/cancellation">
          <p className="footerSitemap">Cancellation Policy</p>
        </Link>
        <Link to="/information/privacy">
          <p className="footerSitemap">Privacy</p>
        </Link>
        <Link to="/information/termsconditions">
          <p className="footerSitemap">Terms & Conditions</p>
        </Link>
      </div>
    </div>
  );
};

export default Sitemap;
