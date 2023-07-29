import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Headline from "../../components/assets/Headline1.jpg";

import Proker from "../../components/assets/proker-terbaru.JPG";
import Karya from "../../components/assets/karya-terbaru.jpg";

// import required modules
import { Pagination, Navigation } from "swiper";

import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <Swiper
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={Headline} alt="text" className="kontoru" />
            <div className="overlay">
              <h2>Headline Terbaru</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={Headline} alt="text" className="kontoru" />
            <div className="overlay">
              <h2>Headline Terbaru</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={Headline} alt="text" className="kontoru" />
            <div className="overlay">
              <h2>Headline Terbaru</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={Headline} alt="text" className="kontoru" />
            <div className="overlay">
              <h2>Headline Terbaru</h2>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="header__right">
        <div className="header__right__top">
          <img src={Karya} alt="text" className="img-top" />
          <h2 className="teks-right">Karya Terbaru</h2>
        </div>
        <div className="header__right__bottom">
          <img src={Proker} alt="text" className="img-bot" />
          <h2 className="teks-right">Proker Terbaru</h2>
        </div>
      </div>
    </div>
  );
};

export default Header;
