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
import Proker from "../../components/proker/proker";
import API from "../../api/API";

const Artikel = () => {
  const [berita, setBerita] = React.useState([]);
  const getAllBeritaa = async () => {
    await API.get("berita/")
      .then((response) => {
        setBerita(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  React.useEffect(() => {
    getAllBeritaa();
  }, []);

  const beritaJurnalistik = berita.filter((item) => item.tags_id === 1);
  const beritaSalon = berita.filter((item) => item.tags_id === 2);
  const beritaAlternatif = berita.filter((item) => item.tags_id === 3);
  const beritaArchieve = berita.filter((item) => item.tags_id === 4);
  const beritaArtikel = berita.filter((item) => item.tags_id === 5);

  console.log(berita);
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
          <div className="konten-jurnalistik" id="jurnalistik">
            <Swiper
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
              slidesPerView={3}
              breakpoints={{
                270: {
                  slidesPerView: 1,
                  spaceBetween: 2,
                },
                290: {
                  slidesPerView: 1,
                  spaceBetween: 2,
                },
                320: {
                  slidesPerView: 1,
                  spaceBetween: 2,
                },
                350: {
                  slidesPerView: 2,
                  spaceBetween: 2,
                },
                500: {
                  slidesPerView: 2,
                  spaceBetween: 1,
                },
                668: {
                  slidesPerView: 3,
                  spaceBetween: 1,
                },
                820: {
                  slidesPerView: 3,
                  spaceBetween: 1,
                },
              }}
              loop={true}
              spaceBetween={10}
            >
              {beritaJurnalistik?.map((item) => (
                <SwiperSlide key={item.id}>
                  <a href={`/berita/${item.id}`}>
                    <img
                      src={item.file_names[0]}
                      alt="text"
                      className="kontoru"
                    />
                  </a>
                  <div className="overlay">
                    <h2>{item.judul}</h2>
                  </div>
                </SwiperSlide>
              ))}
              {/* End of duplicate slides */}
            </Swiper>
          </div>
          <div className="konten-jurnalistik" id="salon">
            <div className="sub-artikel">
              <h4>Salon</h4>
            </div>
            <Swiper
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
              slidesPerView={3}
              breakpoints={{
                270: {
                  slidesPerView: 1,
                  spaceBetween: 2,
                },
                290: {
                  slidesPerView: 1,
                  spaceBetween: 2,
                },
                320: {
                  slidesPerView: 1,
                  spaceBetween: 2,
                },
                350: {
                  slidesPerView: 2,
                  spaceBetween: 2,
                },
                500: {
                  slidesPerView: 2,
                  spaceBetween: 1,
                },
                668: {
                  slidesPerView: 3,
                  spaceBetween: 1,
                },
                820: {
                  slidesPerView: 3,
                  spaceBetween: 1,
                },
              }}
              loop={true}
              spaceBetween={10}
            >
              {beritaSalon?.map((item) => (
                <SwiperSlide key={item.id}>
                  <a href={`/berita/${item.id}`}>
                    <img
                      src={item.file_names[0]}
                      alt="text"
                      className="kontoru"
                    />
                  </a>
                  <div className="overlay">
                    <h2>{item.judul}</h2>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="konten-jurnalistik" id="alternatif">
            <div className="sub-artikel">
              <h4>Alternatif</h4>
            </div>
            <Swiper
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
              slidesPerView={3}
              breakpoints={{
                270: {
                  slidesPerView: 1,
                  spaceBetween: 2,
                },
                290: {
                  slidesPerView: 1,
                  spaceBetween: 2,
                },
                320: {
                  slidesPerView: 1,
                  spaceBetween: 2,
                },
                350: {
                  slidesPerView: 2,
                  spaceBetween: 2,
                },
                500: {
                  slidesPerView: 2,
                  spaceBetween: 1,
                },
                668: {
                  slidesPerView: 3,
                  spaceBetween: 1,
                },
                820: {
                  slidesPerView: 3,
                  spaceBetween: 1,
                },
              }}
              loop={true}
              spaceBetween={10}
            >
              {beritaAlternatif?.map((item) => (
                <SwiperSlide key={item.id}>
                  <a href={`/berita/${item.id}`}>
                    <img
                      src={item.file_names[0]}
                      alt="text"
                      className="kontoru"
                    />
                  </a>
                  <div className="overlay">
                    <h2>{item.judul}</h2>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="our-proker" id="proker">
            <h3>Proker Archieve</h3>
            <Proker news={beritaArchieve} />
          </div>

          <div className="our-proker" id="salon">
            <h3>Our Article</h3>
            <Proker news={beritaArtikel} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Artikel;
