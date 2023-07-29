import React from "react";
import "./artikel.scss";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Headline from "../../components/assets/Headline1.jpg";
import Proker from "../../components/proker/proker";

const artikel = () => {
  return (
    <>
      <Navbar />
      <div className="artikel-parent">
        <div className="judul-artikel">
          <h3>Karya Archieve</h3>
        </div>

        <div className="konten">
          <div className="sub-artikel">
            <h4>Jurnalistik</h4>
          </div>
          <div className="konten-jurnalistik">
            <Swiper
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
              slidesPerView={3}
              loop={true}
              spaceBetween={10}
            >
              <SwiperSlide>
                <img src={Headline} alt="text" className="kontoru" />
                <div className="overlay">
                  <h2>Judul dan Headline Berita</h2>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img src={Headline} alt="text" className="kontoru" />
                <div className="overlay">
                  <h2>Judul dan Headline Berita</h2>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img src={Headline} alt="text" className="kontoru" />
                <div className="overlay">
                  <h2>Judul dan Headline Berita</h2>
                </div>
              </SwiperSlide>
              {/* Duplicate slides */}
              <SwiperSlide>
                <img src={Headline} alt="text" className="kontoru" />
                <div className="overlay">
                  <h2>Judul dan Headline Berita</h2>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img src={Headline} alt="text" className="kontoru" />
                <div className="overlay">
                  <h2>Judul dan Headline Berita</h2>
                </div>
              </SwiperSlide>
              {/* End of duplicate slides */}
            </Swiper>
          </div>
          <div className="konten-jurnalistik">
            <div className="sub-artikel">
              <h4>Salon</h4>
            </div>
            <Swiper
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
              slidesPerView={3}
              loop={true}
              spaceBetween={10}
            >
              <SwiperSlide>
                <img src={Headline} alt="text" className="kontoru" />
                <div className="overlay">
                  <h2>Judul dan Headline Berita</h2>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img src={Headline} alt="text" className="kontoru" />
                <div className="overlay">
                  <h2>Judul dan Headline Berita</h2>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img src={Headline} alt="text" className="kontoru" />
                <div className="overlay">
                  <h2>Judul dan Headline Berita</h2>
                </div>
              </SwiperSlide>
              {/* Duplicate slides */}
              <SwiperSlide>
                <img src={Headline} alt="text" className="kontoru" />
                <div className="overlay">
                  <h2>Judul dan Headline Berita</h2>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img src={Headline} alt="text" className="kontoru" />
                <div className="overlay">
                  <h2>Judul dan Headline Berita</h2>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="konten-jurnalistik">
            <div className="sub-artikel">
              <h4>Alternatif</h4>
            </div>
            <Swiper
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
              slidesPerView={3}
              loop={true}
              spaceBetween={10}
            >
              <SwiperSlide>
                <img src={Headline} alt="text" className="kontoru" />
                <div className="overlay">
                  <h2>Judul dan Headline Berita</h2>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img src={Headline} alt="text" className="kontoru" />
                <div className="overlay">
                  <h2>Judul dan Headline Berita</h2>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img src={Headline} alt="text" className="kontoru" />
                <div className="overlay">
                  <h2>Judul dan Headline Berita</h2>
                </div>
              </SwiperSlide>
              {/* Duplicate slides */}
              <SwiperSlide>
                <img src={Headline} alt="text" className="kontoru" />
                <div className="overlay">
                  <h2>Judul dan Headline Berita</h2>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img src={Headline} alt="text" className="kontoru" />
                <div className="overlay">
                  <h2>Judul dan Headline Berita</h2>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="our-proker">
            <h3>Proker Archieve</h3>
            <Proker />
          </div>

          <div className="our-proker">
            <h3>Our Article</h3>
            <Proker />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default artikel;
