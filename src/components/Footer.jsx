import React from "react";
import { SectionWrapper } from "../hoc";
import { lc, cc, cf, gfg, linkedin, git, resume } from "../assets";
import { Tooltip as ReactTooltip } from "react-tooltip";

function Footer() {
  return (
    <div className="bg-black flex flex-wrap justify-between gap-2 w-full">
      <h2>Copyright &#169; Rohit Bindal 2023</h2>
      <div className="flex flex-row gap-5">
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
        <ReactTooltip id="linkedin" place="top" content="LinkedIn" />
        <a href="https://github.com/rohit-bindal" target="_blank">
          <img
            data-tooltip-id="github"
            src={git}
            alt=""
            className="w-[30px] h-[30px] hover:pointer rounded-full border border-white"
          />
        </a>
        <ReactTooltip id="github" place="top" content="GitHub" />
        <a href="https://leetcode.com/rohitbindal29/" target="_blank">
          <img
            data-tooltip-id="leetcode"
            src={lc}
            alt=""
            className="w-[30px] h-[30px] hover:pointer rounded-full border border-white"
          />
        </a>
        <ReactTooltip id="leetcode" place="top" content="LeetCode" />
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
        <ReactTooltip id="gfg" place="top" content="GeeksForGeeks" />
        <a href="https://codeforces.com/profile/code_bindal" target="_blank">
          <img
            data-tooltip-id="codeforces"
            src={cf}
            alt=""
            className="w-[30px] h-[30px] hover:pointer rounded-full border border-white "
          />
        </a>
        <ReactTooltip id="codeforces" place="top" content="CodeForces" />
        <a href="https://www.codechef.com/users/code_bindal" target="_blank">
          <img
            data-tooltip-id="codechef"
            src={cc}
            alt=""
            className="w-[30px] h-[30px] hover:pointer rounded-full border border-white"
          />
        </a>
        <ReactTooltip id="codechef" place="top" content="CodeChef" />
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
        <ReactTooltip id="resume" place="top" content="Resume" />
      </div>
    </div>
  );
}

export default SectionWrapper(Footer, "");
