import React from "react";
import "./kelas.scss";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
// import PhotoTalk from "../../components/assets/phototalk.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import API from "../../api/API";

const Kelas = () => {
  const [shortvideo, setShortVideo] = React.useState([]);
  console.log(shortvideo);
  const getAllShortVideo = async () => {
    await API.get("short-video/")
      .then((response) => {
        setShortVideo(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  React.useEffect(() => {
    getAllShortVideo();
  }, []);
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
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {shortvideo?.map((item) => (
              <SwiperSlide>
                <a href={`/short-video/${item.ID}`}>
                  <img src={item.FileName} alt="" className="photo" />
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Kelas;
