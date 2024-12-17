
import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import { themeContext } from "../../Context";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <div className="slide-in-left">
            <img src={Sidebar} alt="Sidebar Project" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-in-left">
            <img src={Ecommerce} alt="E-commerce Project" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-in-left">
            <img src={MusicApp} alt="Music App Project" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-in-left">
            <img src={HOC} alt="HOC Project" />
          </div>
        </SwiperSlide>
      </Swiper>

      {/* GitHub button */}
      <div className="github-button">
        <a
          href="https://github.com/an3-bit"
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          View My GitHub
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
