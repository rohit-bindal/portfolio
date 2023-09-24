import React, { useState } from "react";

import { styles } from "../styles";
import { navLinks, themes } from "../constants";
import { menu, close } from "../assets";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { useTheme } from "../ThemeContext";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [themeToggle, setThemeToggle] = useState(false);

  const { theme, updateThemeColors } = useTheme();

  const changeColors = (newTheme) => {
    updateThemeColors(newTheme.primaryColor, newTheme.secondaryColor);
  };

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-black`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <a href="#" className="flex items-center gap-2">
            <p className="text-white text-[18px] font-bold cursor-pointer transition duration-500 hover:scale-125">
              Rohit Bindal
            </p>
          </a>
          <img
            data-tooltip-id="theme"
            src="/theme.png"
            alt=""
            className="w-[60px] h-[45px] cursor-pointer"
            onClick={() => setThemeToggle(!themeToggle)}
          />
          <ReactTooltip id="theme" place="right" content="Themes" />
          <div
            className={`${
              !themeToggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {themes.map((theme) => (
                <li
                  key={theme.name}
                  className={`text-white font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                >
                  <p
                    onClick={(e) => {
                      e.stopPropagation();
                      changeColors(theme);
                    }}
                  >
                    {theme.name}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`text-white transition duration-500 hover:scale-125 text-[18px] font-medium cursor-pointer`}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`text-white font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                >
                  <a className="nav__link" href={`#${link.id}`}>
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
