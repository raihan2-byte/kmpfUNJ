import React from "react";
import Header from "../../components/header/Header";
import Button from "../../components/button/Button";
import "./home.scss";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import API from "../../api/API";
import { Link } from "react-router-dom";

const Home = () => {
  const [news, setNews] = React.useState([]);
  const [tagLineHome, setTagLineHome] = React.useState([]);

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

  const getAllTagLineHome = async () => {
    await API.get("tagLine/")
      .then((response) => {
        setTagLineHome(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  React.useEffect(() => {
    getAllTagLineHome();
  }, []);

  const [phototalk, setPhototalk] = React.useState([]);
  const getAllPhototalk = async () => {
    await API.get("phototalk/")
      .then((response) => {
        setPhototalk(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  React.useEffect(() => {
    getAllPhototalk();
  }, []);
  return (
    <>
      <div
        className="parent-home"
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          maxWidth: "1350px",
          margin: "6.5rem auto",
          // alignItems: "center",
        }}
      >
        <Navbar />
        <Header news={news} tagLine={tagLineHome} />
        <div className="rental-foto">
          <a href="/productservice">
            <div className="fotografi-parent">
              <div className="fotografi">
                <div className="text">
                  <h1>Menyediakan Jasa Fotografi</h1>
                  <h4>"We are the best choice for your photo needs."</h4>
                </div>
                <div className="book-now">
                  <Button onClick="null" className="btn">
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
          </a>
          <a href="/rent">
            <div className="rental-parent">
              <div className="rental">
                <div className="text">
                  <h1>Meminjamkan dan Menyewakan Alat Fotografi</h1>
                  <h4>
                    "We have everything you need for your photography needs".
                  </h4>
                </div>
                <div className="book-now">
                  <Button onClick="null" className="btn">
                    Book Now
                  </Button>
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
                  spaceBetween: 10,
                },
                640: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
                870: {
                  slidesPerView: 4,
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
              {phototalk?.map((item) => (
                <SwiperSlide key={item.id}>
                  <Link to={item.Link}>
                    <img src={item.FileName} alt="" className="photo" />
                    <h5>{item.Judul}</h5>
                  </Link>
                  {/* <p>deskripsi</p> */}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </a>
      </div>
      <Footer />
    </>
  );
};

export default Home;
