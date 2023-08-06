import React from "react";
import "./proker.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Headline from "../../components/assets/Headline1.jpg";
const proker = () => {
  return (
    <div className="konten-our-proker">
      <div className="sub-our-proker">{/* <h4>Proker</h4> */}</div>
      <Swiper
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        slidesPerView={2}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 2,
          },
          350: {
            slidesPerView: 1,
            spaceBetween: 2,
          },
          500: {
            slidesPerView: 2,
            spaceBetween: 1,
          },
          668: {
            slidesPerView: 2,
            spaceBetween: 1,
          },
          820: {
            slidesPerView: 2,
            spaceBetween: 1,
          },
        }}
        loop={true}
        spaceBetween={10}
      >
        <SwiperSlide>
          <div className="konten-proker">
            <img src={Headline} alt="text" className="kontoru" />
            <div className="overlay">
              <h2>Judul dan Headline Berita</h2>
            </div>
          </div>
          <div className="konten-proker">
            <img src={Headline} alt="text" className="kontoru" />
            <div className="overlay">
              <h2>Judul dan Headline Berita</h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="konten-proker">
            <img src={Headline} alt="text" className="kontoru" />
            <div className="overlay">
              <h2>Judul dan Headline Berita</h2>
            </div>
          </div>
          <div className="konten-proker">
            <img src={Headline} alt="text" className="kontoru" />
            <div className="overlay">
              <h2>Judul dan Headline Berita</h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="konten-proker">
            <img src={Headline} alt="text" className="kontoru" />
            <div className="overlay">
              <h2>Judul dan Headline Berita</h2>
            </div>
          </div>
          <div className="konten-proker">
            <img src={Headline} alt="text" className="kontoru" />
            <div className="overlay">
              <h2>Judul dan Headline Berita</h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="konten-proker">
            <img src={Headline} alt="text" className="kontoru" />
            <div className="overlay">
              <h2>Judul dan Headline Berita</h2>
            </div>
          </div>
          <div className="konten-proker">
            <img src={Headline} alt="text" className="kontoru" />
            <div className="overlay">
              <h2>Judul dan Headline Berita</h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="konten-proker">
            <img src={Headline} alt="text" className="kontoru" />
            <div className="overlay">
              <h2>Judul dan Headline Berita</h2>
            </div>
          </div>
          <div className="konten-proker">
            <img src={Headline} alt="text" className="kontoru" />
            <div className="overlay">
              <h2>Judul dan Headline Berita</h2>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default proker;
