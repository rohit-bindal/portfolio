import React, { useEffect } from "react";
import { SectionWrapper } from "../hoc";
import TagCloud from "TagCloud";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { useTheme } from "../ThemeContext";
import { skills } from "../constants";

const Skills = () => {
  const { theme, updateThemeColors } = useTheme();
  useEffect(() => {
    return () => {
      const container = ".tagcloud";

      let radius;
      if (window.innerWidth <= 768) {
        radius = 145;
      } else {
        radius = 240;
      }

      const options = {
        radius: radius,
        maxSpeed: "normal",
        initSpeed: "normal",
        keep: true,
      };

      TagCloud(container, skills, options);
    };
  }, []);

  return (
    <>
      <div className="max-w-2xl flex flex-wrap gap-7 justify-center items-center text-center mx-auto">
        <motion.div id="skills" className="section" variants={textVariant()}>
          <p
            className={`secondaryText sm:text-[18px] text-[14px] uppercase tracking-wider text-center`}
          >
            PROFICIENT ABILITIES
          </p>
          <h2
            className={`primaryText font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center`}
          >
            SKILLS
          </h2>
        </motion.div>
        {/* span tag className must be "tagcloud"  */}
        <span className="tagcloud"></span>
      </div>
      <style>
        {`
            .primaryText{
              color: ${theme.primaryColor};
            }
            .secondaryText{color: ${theme.secondaryColor}}
            .tagcloud--item:hover{color: ${theme.primaryColor}}
          `}
      </style>
    </>
  );
};

export default SectionWrapper(Skills, "");
