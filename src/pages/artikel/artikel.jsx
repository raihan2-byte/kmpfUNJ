import React, { useEffect } from "react";
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
  useEffect(() => {
    getAllBeritaa();
  }, []);

  const searchParams = new URLSearchParams(document.location.search);
  const isScrolls = searchParams.get("scrollTo");

  function scrollToTargetAdjusted(id) {
    var element = document.getElementById(id);
    var screenWidth = window.innerWidth; // Mendapatkan lebar layar saat ini
    var headerOffset = screenWidth <= 475 ? 50 : 100; // Menggunakan nilai headerOffset berdasarkan lebar layar

    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }

  React.useEffect(() => {
    if (isScrolls) {
      console.log(isScrolls);
      setTimeout(() => {
        scrollToTargetAdjusted(isScrolls);
      }, 3000);
    }
  }, [isScrolls]);

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
                  <a href={`/berita/${item.slug}`}>
                    <img
                      src={item.file_names[0]}
                      alt="text"
                      className="image"
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
                  <a href={`/berita/${item.slug}`}>
                    <img
                      src={item.file_names[0]}
                      alt="text"
                      className="image"
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
                  <a href={`/berita/${item.slug}`}>
                    <img
                      src={item.file_names[0]}
                      alt="text"
                      className="image"
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

          <div className="our-proker" id="karya">
            <h3>Karya Article</h3>
            <Proker news={beritaArtikel} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Artikel;
