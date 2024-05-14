import React, { useState } from "react";
//import data
import { navData } from "../../data";
import Login from "./Login";
import { DarkModeSwitch } from "react-toggle-dark-mode";
const AccountBtns = ({ toggleDarkMode, isDarkMode }) => {
  return (
    <nav className="flex items-center gap-11">
      <ul className="flex gap-x-8">
        {navData.map((item, index) => {
          return (
            <li
              className="dark:text-neutral-300 border-b-2 border-transparent hover:border-blue transition-all duration-300"
              key={index}
            >
              <a href={item.href}>{item.name}</a>
            </li>
          );
        })}
        <DarkModeSwitch
          checked={isDarkMode}
          onChange={toggleDarkMode}
          size={24}
        />
      </ul>
      <Login />
    </nav>
  );
};

export default AccountBtns;
