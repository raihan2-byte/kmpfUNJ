import React from "react";
import "./product.scss";
import Button from "../../components/button/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import Merch1 from "../../components/assets/whitee.png";
import Merch2 from "../../components/assets/black.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
// import Rent from "../../pages/Renting/Rent";

const product = () => {
  return (
    <>
      <Navbar />
      <div className="foto-wisuda-parent">
        <div className="foto-wisuda-left">
          <h3>Jasa Foto Wisuda Pribadi</h3>

          <div className="carousel-atas">
            <div class="card">
              <div class="card-content">
                <Swiper
                  navigation={true}
                  modules={[Pagination, Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <img src="https://picsum.photos/600/400" alt="text" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="https://picsum.photos/600/400" alt="text" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="https://picsum.photos/600/400" alt="text" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="https://picsum.photos/600/400" alt="text" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="https://picsum.photos/600/400" alt="text" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="https://picsum.photos/800/400" alt="text" />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
        <div className="foto-wisuda-middle">
          <h3>1 wisudawan</h3>
          <h3>lorem ipsum</h3>
          <h3>lorem ipsum</h3>
          <h3 className="ket">keterangan lainya</h3>
        </div>
        <div className="button">
          <div className="book-now">
            <Button onClick="null">Book Now</Button>
          </div>
        </div>
      </div>

      <div className="jasa-foto-parent">
        <div className="jasa-foto-left">
          <h3>Photographer</h3>
          <h3>Keterangan</h3>
          <h3>Keterangan</h3>
        </div>
        <div className="jasa-foto-middle">
          <h3>Jasa Pas foto</h3>
          <div className="carousel-jasa">
            <Swiper
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src="https://picsum.photos/600/400" alt="text" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://picsum.photos/600/400" alt="text" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://picsum.photos/600/400" alt="text" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://picsum.photos/600/400" alt="text" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://picsum.photos/600/400" alt="text" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://picsum.photos/800/400" alt="text" />
              </SwiperSlide>
            </Swiper>
            <div className="button">
              <div className="book-now">
                <Button onClick="null">Book Now</Button>
              </div>
            </div>
          </div>
        </div>
        <div className="jasa-foto-right">
          <h3>1 Photographer</h3>
          <h3>Keterangan</h3>
          <h3>Keterangan</h3>
        </div>
      </div>
      <div className="merch-parent">
        <div className="merch">
          <h2>Merch</h2>
          <div className="merch-produk">
            <div className="merch1">
              <img src={Merch1} alt="merch" />
              <div className="price">IDR 50.000</div>
              <Button onClick="btn">Purchase Now</Button>
            </div>
            <div className="merch2">
              <img src={Merch2} alt="merch" />
              <div className="price">IDR 50.000</div>
              <Button onClick="btn">Purchase Now</Button>
            </div>
          </div>
        </div>
      </div>
      {/* <Rent /> */}
      <Footer />
    </>
  );
};

export default product;
