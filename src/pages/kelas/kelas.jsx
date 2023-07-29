import React from "react";
import "./kelas.scss";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import PhotoTalk from "../../components/assets/phototalk.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const kelas = () => {
  return (
    <>
      <Navbar />
      <div className="parent">
        <div className="kelas-fotografi">
          <div className="kelas-jurnalis">
            <div className="judul-jurnalis">
              <h3>Kelas Jurnalistik</h3>
            </div>
            <div className="teks-jurnalis">
              <p>
                Kelas Jurnalistik merupakan kelas yang mempelajari tentang
                blablabla
              </p>
            </div>
          </div>
          <div className="kelas-salon">
            <div className="judul-salon">
              <h3>Kelas Salon</h3>
            </div>
            <div className="teks-salon">
              <p>
                Kelas Jurnalistik merupakan kelas yang mempelajari tentang
                blablabla
              </p>
            </div>
          </div>
          <div className="kelas-alternatif">
            <div className="judul-alternatif">
              <h3>Kelas Alternatif</h3>
            </div>
            <div className="teks-alternatif">
              <p>
                Kelas Jurnalistik merupakan kelas yang mempelajari tentang
                blablabla
              </p>
            </div>
          </div>
        </div>

        <div className="video-reels">
          <h1>Short Videos</h1>
          <Swiper
            slidesPerView={2}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <a href="/short-video">
                <img src={PhotoTalk} alt="" className="photo" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="/short-video">
                <img src={PhotoTalk} alt="" className="photo" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="/short-video">
                <img src={PhotoTalk} alt="" className="photo" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="/short-video">
                <img src={PhotoTalk} alt="" className="photo" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="/short-video">
                <img src={PhotoTalk} alt="" className="photo" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="/short-video">
                <img src={PhotoTalk} alt="" className="photo" />
              </a>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default kelas;
