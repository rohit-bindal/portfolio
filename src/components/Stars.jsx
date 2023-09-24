import { motion } from "framer-motion";
import { styles } from "../styles";
import { StarsCanvas } from "./canvas";
import { useTheme } from "../ThemeContext";

const Stars = () => {
  const { theme, updateThemeColors } = useTheme();

  return (
    <section className={`relative w-full h-screen`}>
      <div
        className={`absolute inset-0 max-w-7xl flex justify-center items-center text-center mx-auto`}
      >
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="primaryText">Rohit</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            A Software Engineer Crafting Visually Pleasing Websites{" "}
            <br className="sm:block hidden" /> and Thriving on Limit-Pushing
            Challenges
          </p>
        </div>
      </div>
      <StarsCanvas />
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#skills">
          <div className="primaryBorder w-[35px] h-[64px] rounded-3xl border-4 flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="bg-secondary w-3 h-3 rounded-full mb-1"
            />
          </div>
        </a>
      </div>
      <style>
        {`
            .primaryText{
              color: ${theme.primaryColor};
            }
            .primaryBorder{
              border-color: ${theme.primaryColor}
            }
          `}
      </style>
    </section>
  );
};

export default Stars;
