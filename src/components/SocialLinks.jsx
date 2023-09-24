import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../ThemeContext";
import { useState } from "react";
import { lc, cc, cf, gfg, linkedin, git, resume } from "../assets";
import { Tooltip as ReactTooltip } from "react-tooltip";

function SocialLinks() {
  const { theme, updateThemeColors } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <button
        onClick={toggleMenu}
        className="borderPrimary border z-10 rounded-full text-white w-12 h-12 fixed bottom-5 right-5 flex items-center justify-center cursor-pointer"
      >
        <FontAwesomeIcon icon={faLink} />
      </button>
      {isMenuOpen && (
        <div className="fixed bottom-14 right-1 p-2 z-10 rounded-xl">
          <ul className="py-2">
            <li className="px-4 py-2">
              <a
                href="https://drive.google.com/file/d/1FAFjsJdXeYjCvLAXB4RXR1T__BnKRihS/view?usp=sharing"
                target="_blank"
              >
                <img
                  data-tooltip-id="resume"
                  src={resume}
                  alt=""
                  className="w-[30px] h-[30px] hover:pointer rounded-full border border-white"
                />
              </a>
              <ReactTooltip id="resume" place="left" content="Resume" />
            </li>
            <li className="px-4 py-2">
              <a
                href="https://www.linkedin.com/in/rohit-bindal-251445197/"
                target="_blank"
              >
                <img
                  data-tooltip-id="linkedin"
                  src={linkedin}
                  alt=""
                  className="w-[30px] h-[30px] hover:pointer rounded-full border border-white"
                />
              </a>
              <ReactTooltip id="linkedin" place="left" content="LinkedIn" />
            </li>
            <li className="px-4 py-2">
              <a href="https://github.com/rohit-bindal" target="_blank">
                <img
                  data-tooltip-id="github"
                  src={git}
                  alt=""
                  className="w-[30px] h-[30px] hover:pointer rounded-full border border-white"
                />
              </a>
              <ReactTooltip id="github" place="left" content="GitHub" />
            </li>
            <li className="px-4 py-2">
              <a href="https://leetcode.com/rohitbindal29/" target="_blank">
                <img
                  data-tooltip-id="leetcode"
                  src={lc}
                  alt=""
                  className="w-[30px] h-[30px] hover:pointer rounded-full border border-white"
                />
              </a>
              <ReactTooltip id="leetcode" place="left" content="LeetCode" />
            </li>
            <li className="px-4 py-2">
              <a
                href="https://auth.geeksforgeeks.org/user/rohitbindal29"
                target="_blank"
              >
                <img
                  data-tooltip-id="gfg"
                  src={gfg}
                  alt=""
                  className="w-[30px] h-[30px] hover:pointer rounded-full border border-white"
                />
              </a>
              <ReactTooltip id="gfg" place="left" content="GeeksForGeeks" />
            </li>
            <li className="px-4 py-2">
              <a
                href="https://codeforces.com/profile/code_bindal"
                target="_blank"
              >
                <img
                  data-tooltip-id="codeforces"
                  src={cf}
                  alt=""
                  className="w-[30px] h-[30px] hover:pointer rounded-full border border-white "
                />
              </a>
              <ReactTooltip id="codeforces" place="left" content="CodeForces" />
            </li>
            <li className="px-4 py-2">
              <a
                href="https://www.codechef.com/users/code_bindal"
                target="_blank"
              >
                <img
                  data-tooltip-id="codechef"
                  src={cc}
                  alt=""
                  className="w-[30px] h-[30px] hover:pointer rounded-full border border-white"
                />
              </a>
              <ReactTooltip id="codechef" place="left" content="CodeChef" />
            </li>
          </ul>
        </div>
      )}
      <style>
        {`
            .borderPrimary{
              border-color: ${theme.primaryColor};
            }
          `}
      </style>
    </>
  );
}

export default SocialLinks;
