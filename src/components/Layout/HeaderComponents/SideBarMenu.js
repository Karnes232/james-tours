import React from "react";
import {
  Sidebar,
  // menuClasses,
  Menu,
  MenuItem,
  // SubMenu,
} from "react-pro-sidebar";
import { Link } from "gatsby";
import SocialMedia from "../FooterComponents/SocialMedia";

const SideBarMenu = ({ toggled, setToggled, layoutData }) => {
  return (
    <>
      <Sidebar
        backgroundColor="rgb(255, 255, 255, .9)"
        onBackdropClick={() => setToggled(false)}
        toggled={toggled}
        breakPoint="all"
      >
        <div className="flex flex-col h-full justify-between">
          <div>
            <div className="mt-7 mb-10 flex justify-center items-center font-yellowtail tracking-wide text-2xl">
              {layoutData.tourCompanyName}
            </div>
            <Menu className="ml-4 overflow-hidden">
              <MenuItem component={<Link to="/" className="hamburger" />}>
                <p className="hamburger">Home</p>
              </MenuItem>
              <MenuItem component={<Link to="/tours" className="hamburger" />}>
                <p className="hamburger">Tours</p>
              </MenuItem>
              <MenuItem component={<Link to="/about" className="hamburger" />}>
                <p className="hamburger">About</p>
              </MenuItem>
              <MenuItem
                component={<Link to="/contact" className="hamburger" />}
              >
                <p className="hamburger">Contact</p>
              </MenuItem>
            </Menu>
          </div>
          <footer className="hamburger mx-4">
            <SocialMedia
              classes="text-black mx-auto border-none"
              layoutData={layoutData}
            />
          </footer>
        </div>
      </Sidebar>
    </>
  );
};

export default SideBarMenu;
