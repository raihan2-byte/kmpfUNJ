import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import Headline from "../../components/assets/Headline1.jpg";

import Proker from "../../components/assets/proker-terbaru.JPG";
import Karya from "../../components/assets/karya-terbaru.jpg";

// import required modules
import { Pagination, Navigation } from "swiper";

import "./header.scss";

const Header = ({ news, tagLine }) => {
  console.log(news);
  console.log(tagLine);

  const sortedTagLine = tagLine.slice().sort((a, b) => b.ID - a.ID);

  // Mengambil data dengan ID tertinggi (paling baru)
  const latestTagLine = sortedTagLine.length > 0 ? sortedTagLine[0] : null;

  // Ambil satu berita pertama dari beritaArtikel

  // Ambil satu berita pertama dari beritaArchieve

  return (
    <div className="parent-header">
      <div className="header">
        <div className="header__left">
          <Swiper
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {news?.map((data) => (
              <SwiperSlide key={data.id}>
                <a href={`/berita/${data.slug}`}>
                  <img
                    src={data.file_names[0]}
                    alt="text"
                    className="kontoru"
                  />
                </a>
                <div className="overlay">
                  <h2>{data.judul}</h2>
                </div>
              </SwiperSlide>
            ))}
            <div
              className="swiper-button-next"
              style={{ color: "white" }}
            ></div>
            <div
              className="swiper-button-prev"
              style={{ color: "white" }}
            ></div>
          </Swiper>
        </div>

        <div className="header__right">
          {latestTagLine && (
            <div className="judul">
              <h2>{latestTagLine.Heading}</h2>
            </div>
          )}
          <div className="text">
            <p>
              {latestTagLine && (
                <div
                  className="text"
                  dangerouslySetInnerHTML={{
                    __html: latestTagLine.Text,
                  }}
                ></div>
              )}
            </p>
          </div>
        </div>
      </div>
      <div className="update">
        {/* {satuBeritaArtikel && ( */}
        <div className="header__right__top">
          <a href="/artikel">
            <img src={Proker} alt="text" className="img-top" />
          </a>

          {/* <img src={Karya} alt="text" className="img-top" /> */}
          <h2 className="teks-right">Proker Terbaru</h2>
        </div>
        {/* )} */}
        {/* {satuBeritaArchieve && ( */}
        <div className="header__right__bottom">
          <a href={"/berita"}>
            <img src={Karya} alt="text" className="img-bot" />
          </a>
          <h2 className="teks-right">Karya Terbaru</h2>
        </div>
        {/* )} */}
      </div>
    </div>
  );
};

export default Header;
