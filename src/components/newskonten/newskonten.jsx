import React, { useState, useEffect } from "react";
import "./newskonten.scss";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { useParams } from "react-router-dom";
import API from "../../api/API";
import { MdPeopleAlt } from "react-icons/md";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import News from "../news/news";
const Newskonten = () => {
  const params = useParams();
  const [berita, setBerita] = useState({});
  const [rekomendasiBerita, setRekomendasiBerita] = useState([]);

  const getBeritaID = async (id) => {
    try {
      const response = await API.get(`berita/${id}`);
      setBerita(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getRekomendasiBerita = async () => {
    try {
      const response = await API.get("berita/");
      const filteredBerita = response.data.data.filter(
        (item) => item.id !== params.id
      );
      setRekomendasiBerita(filteredBerita);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getBeritaID(params.id);
  }, [params.id]);

  useEffect(() => {
    if (berita.id) {
      getRekomendasiBerita();
    }
  }, [berita.id]);

  function formatTanggal(dateString) {
    const createdAt = new Date(dateString);
    return `${createdAt.getFullYear()}-${
      createdAt.getMonth() + 1
    }-${createdAt.getDate()}`;
  }

  const maxBeritaChild = window.innerWidth <= 450 ? 2 : 3;

  return (
    <>
      <Navbar />
      <div className="news-konten-parent">
        <div className="news-konten-img">
          <div className="foto-parent">
            <h3 className="judul-konten">{berita.judul}</h3>
            <div className="foto-konten">
              <div className="kiri">
                <div className="foto">
                  <Swiper
                    // style={{ width: "40%" }}
                    navigation={{
                      nextEl: ".swiper-button-next",
                      prevEl: ".swiper-button-prev",
                    }}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                  >
                    {/* <SwiperSlide key={berita.id}>
                      <img
                        style={{ width: "60vh" }}
                        src={berita.file_names[0]}
                        alt="text"
                        className="kontoru"
                      />
                    </SwiperSlide> */}
                    {berita?.file_names?.map((item, key) => (
                      <SwiperSlide key={key}>
                        <img
                          // style={{ width: "60vh" }}
                          src={item}
                          alt="text"
                          className="kontoru"
                        />
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
                <br />
                <div className="pembuat">
                  <p
                    className="admin"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {" "}
                    <MdPeopleAlt style={{ marginRight: "5px" }} /> admin
                  </p>
                  <p className="date">{formatTanggal(berita.created_at)}</p>
                  <p
                    className="tags-news"
                    style={{ color: "black", fontWeight: "900" }}
                  >
                    {berita.KaryaNewsData?.name}
                  </p>
                </div>
                <div className="text-konten">
                  <br />
                  <div
                    className="text"
                    dangerouslySetInnerHTML={{
                      __html: berita.berita_message,
                    }}
                  ></div>
                </div>
              </div>
              <div className="news-recomendation">
                <div className="konten-recomendation">
                  <h4>Recomendation</h4>
                  <div className="titit">
                    {rekomendasiBerita
                      .slice(0, maxBeritaChild)
                      .map((item, key) => (
                        <div className="konten-recomendation-child" key={key}>
                          <a href={`/berita/${item.id}`}>
                            <div className="photo-news">
                              <img src={item.file_names[0]} alt="news" />
                            </div>
                          </a>
                          <div className="text-news">
                            <div className="judul-news">
                              <h3>{item.judul}</h3>
                            </div>
                            <div className="tags">
                              <div className="tags-spesifik">
                                <p className="tag">{item.KaryaNewsData.name}</p>
                                <p className="date">
                                  {formatTanggal(item.created_at)}
                                </p>
                              </div>
                              <div className="seperator"></div>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Newskonten;
