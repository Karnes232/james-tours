import { Link } from "gatsby";
import React from "react";

const InformationButton = ({ Icon, title, link }) => {
  return (
    <>
      <Link to={`${link}`}>
        <div className="!z-50 relative flex flex-col justify-center items-center space-y-3 bg-slate-800 opacity-60 h-44 w-44 my-5 mx-2 rounded-2xl drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] ">
          <div className="text-primary-color text-5xl">{Icon}</div>
          <div className="text-primary-color text-xl font-lato">{title}</div>
        </div>
      </Link>
    </>
  );
};

export default InformationButton;
