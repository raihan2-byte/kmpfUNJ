import React from "react";
import "./proker.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
const proker = ({ news }) => {
  const pairedItems = [];
  for (let i = 0; i < news.length; i += 2) {
    if (i + 1 < news.length) {
      pairedItems.push([news[i], news[i + 1]]);
    } else {
      pairedItems.push([news[i], null]);
    }
  }

  console.log(news);

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
        {pairedItems.map((pair, index) => (
          <SwiperSlide key={index}>
            <div className="konten-proker-container">
              {pair[0] && (
                <div className="konten-proker">
                  <a href={`/berita/${pair[0].id}`}>
                    <img
                      src={pair[0].file_name}
                      alt="text"
                      className="kontoru"
                    />
                    <div className="overlay">
                      <h2>{pair[0].judul}</h2>
                    </div>
                  </a>
                </div>
              )}
              {pair[1] && (
                <div className="konten-proker">
                  <a href={`/berita/${pair[1].id}`}>
                    <img
                      src={pair[1].file_name}
                      alt="text"
                      className="kontoru"
                    />
                    <div className="overlay">
                      <h2>{pair[1].judul}</h2>
                    </div>
                  </a>
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default proker;
