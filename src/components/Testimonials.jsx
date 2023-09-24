import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useTheme } from "../ThemeContext";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="border border-white p-10 rounded-3xl xs:w-[500px] w-full flex flex-col justify-center items-center h-full"
  >
    <p className="text-white font-black text-[48px]">"</p>

    <div className="mt-1">
      <p className="text-white tracking-wider text-[18px]">{testimonial}</p>

      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-white font-medium text-[16px]">
            <span className="blue-text-gradient">@</span> {name}
          </p>
          <p className="mt-1 text-secondary text-[12px]">
            {designation} at {company}
          </p>
        </div>

        <img
          src={image}
          alt={`feedback_by-${name}`}
          className="w-11 h-11 rounded-full"
        />
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  const { theme, updateThemeColors } = useTheme();
  useEffect(() => {}, [theme]);
  return (
    <>
      <motion.div
        className="section"
        id="testimonials"
        variants={textVariant()}
      >
        <p
          className={`secondaryText sm:text-[18px] text-[14px] uppercase tracking-wider text-center`}
        >
          WHAT OTHERS SAY
        </p>
        <h2
          className={`primaryText font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center`}
        >
          TESTIMONIALS
        </h2>
      </motion.div>
      <div className={`mt-20 pb-14 ${styles.paddingX}`}>
        <Swiper
          style={{
            "--swiper-pagination-color": "white",
            "--swiper-pagination-bullet-inactive-color": "white",
            "--swiper-pagination-bullet-inactive-opacity": "0.4",
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <center >
                <FeedbackCard
                  index={index}
                  {...testimonial}
                />
              </center>
            </SwiperSlide>
          ))}
        </Swiper>
        <style>
          {`
            .swiper-button-next, .swiper-button-prev {
              color: ${theme.primaryColor};
            }
            .primaryText{
              color: ${theme.primaryColor};
            }
            .secondaryText{color: ${theme.secondaryColor}}
          `}
        </style>
      </div>
    </>
  );
};

export default SectionWrapper(Feedbacks, "");
