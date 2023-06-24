import React from "react";
import Header from "../../components/header/Header";
import Button from "../../components/button/Button";
import "./home.scss";
import PhotoTalk from "../../components/assets/phototalk.jpg";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const Home = () => {
  return (
    <>
      <Header />
      <div className="rental-foto">
        <div className="fotografi">
          <h1>Menyediakan Jasa Fotografi</h1>
          <div className="book-now">
            <Button onClick="null">Book Now</Button>
          </div>
        </div>
        <div className="rental">
          <h1>Meminjamkan dan Menyewakan Alat Fotografi</h1>
        </div>
      </div>
      {/* <div className="galery">
        <div className="background">
          <h1>Gallery</h1>
        </div>
      </div> */}
      <div className="phototalk">
        <h1>PhotoTalk</h1>
        <Swiper
          slidesPerView={1}
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
            <img src={PhotoTalk} alt="" className="photo" />
            <h5>Judul</h5>
            <p>deskripsi</p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={PhotoTalk} alt="" className="photo" />
            <h5>Judul</h5>
            <p>deskripsi</p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={PhotoTalk} alt="" className="photo" />
            <h5>Judul</h5>
            <p>deskripsi</p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={PhotoTalk} alt="" className="photo" />
            <h5>Judul</h5>
            <p>deskripsi</p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={PhotoTalk} alt="" className="photo" />
            <h5>Judul</h5>
            <p>deskripsi</p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={PhotoTalk} alt="" className="photo" />
            <h5>Judul</h5>
            <p>deskripsi</p>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Home;
