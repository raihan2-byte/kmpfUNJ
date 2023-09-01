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
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import API from "../../api/API";
import { useParams } from "react-router-dom";

const Home = () => {
  const [news, setNews] = React.useState([]);

  const getAllNews = async () => {
    await API.get("berita/")
      .then((response) => {
        setNews(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  React.useEffect(() => {
    getAllNews();
  }, []);

  return (
    <>
      <Navbar />
      <Header news={news} />
      <div className="rental-foto">
        <a href="/berita">
          <div className="fotografi-parent">
            <div className="fotografi">
              <h1>Menyediakan Jasa Fotografi</h1>
              <div className="book-now">
                <Button onClick="null">Book Now</Button>
              </div>
            </div>
          </div>
        </a>
        <a href="/rent">
          <div className="rental-parent">
            <div className="rental">
              <h1>Meminjamkan dan Menyewakan Alat Fotografi</h1>
              <div className="book-now">
                <Button onClick="null">Book Now</Button>
              </div>
            </div>
          </div>
        </a>
        {/* <div className="galery">
          <h1>Gallery</h1>
        </div> */}
        <a href="/kelas">
          <div className="galery">
            <div className="background">
              <h1>Gallery</h1>
            </div>
          </div>
        </a>
      </div>
      <a href="/phototalk">
        <div className="phototalk">
          <h1>PhotoTalk</h1>
          <Swiper
            slidesPerView={2}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              390: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 20,
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
      </a>
      <Footer />
    </>
  );
};

export default Home;
