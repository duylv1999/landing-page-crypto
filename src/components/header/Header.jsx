import React, { useState } from "react";

//adding up componenents
import Logo from "../../assets/img/ethereum.png";
import AccountBtns from "../button/AccountBtns";

//import icons
import { CgMenuRight, CgmenuRight } from "react-icons/cg";

const Header = ({ setNavMobile, toggleDarkMode, isDarkMode }) => {
  //to open open drawer
  const handleClick = () => {
    setNavMobile(true);
  };

  return (
    <header
      className="py-[30px] lg:pt-[60px]"
      data-aos="fade-down"
      data-aos-delay="400"
      data-aos-duration="2000"
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* logo */}
        <a href="#/">
          <img src={Logo} alt="logo" />
        </a>
        {/* Nav butttons */}
        <div className="hidden lg:flex gap-x-[55px]">
          <AccountBtns
            toggleDarkMode={toggleDarkMode}
            isDarkMode={isDarkMode}
          />
        </div>
        {/* Open nav button */}
        <div
          onClick={handleClick}
          className="lg:hidden cursor-pointer dark:text-white"
        >
          <CgMenuRight className="text-2xl" />
        </div>
      </div>
    </header>
  );
};

export default Header;
