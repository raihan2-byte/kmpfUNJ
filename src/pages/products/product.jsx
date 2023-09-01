import React from "react";
import "./product.scss";
import Button from "../../components/button/Button";
import { Swiper, SwiperSlide } from "swiper/react";

import { GiReceiveMoney, GiRibbonMedal } from "react-icons/gi";
import { FaHandshake } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Image1 from "../../components/assets/wisuda.jpg";
import Image9 from "../../components/assets/Wisuda KMPF.jpg";
import Image2 from "../../components/assets/wisuda rumahan.jpg";
import Image3 from "../../components/assets/Photobooth.jpg";
import Image4 from "../../components/assets/photoshot outdoor2.jpg";
import Image5 from "../../components/assets/Dokumentasi.jpg";
import Image6 from "../../components/assets/Pas Foto.jpg";
import Image7 from "../../components/assets/Photoshoot Indoor.jpg";
import Image8 from "../../components/assets/Foto Produk.jpg";

// import Rent from "../../pages/Renting/Rent";

const Product = () => {
  return (
    <>
      <Navbar />
      <div className="parent">
        <div className="foto-wisuda-parent">
          <div className="foto-wisuda-left">
            <div className="carousel-atas">
              <div class="card">
                <div class="card-content">
                  <Swiper
                    navigation={{
                      nextEl: ".swiper-button-next",
                      prevEl: ".swiper-button-prev",
                    }}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                  >
                    <SwiperSlide>
                      <div className="wisuda-parent">
                        <div className="wisuda1">
                          <img src={Image1} alt="text" />
                        </div>
                        <div className="button">
                          <div className="book-now">
                            <h3 className="text-1">GRADUATION PHOTOSHOT</h3>
                            <h4 className="text-2">
                              Capture Your Special Graduation Moments
                            </h4>
                            <h1 className="text-3">Start From 150k</h1>
                            <Button onClick="null" className="btn">
                              Book Now
                            </Button>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="wisuda-parent">
                        <div className="wisuda1">
                          <img src={Image9} alt="text" />
                        </div>
                        <div className="button">
                          <div className="book-now">
                            <h3 className="text-1">
                              STUDIO GRADUATION AT KMPF
                            </h3>
                            <h4 className="text-2">
                              Not just photos, but stories. Our graduation
                              studio is here to make these precious moments
                              eternal in every camera shot
                            </h4>
                            <h1 className="text-3">Start From 400k</h1>
                            <Button onClick="null" className="btn">
                              Book Now
                            </Button>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="wisuda-parent">
                        <div className="wisuda1">
                          <img src={Image2} alt="text" />
                        </div>
                        <div className="button">
                          <div className="book-now">
                            <h3 className="text-1">
                              STUDIO GRADUATION AT HOME
                            </h3>
                            <h4 className="text-2">
                              Capture unforgettable memories from your
                              graduation day with us, without having to leave
                              the house.
                            </h4>
                            <h1 className="text-3">Start From 600k</h1>
                            <Button onClick="null" className="btn">
                              Book Now
                            </Button>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
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
              </div>
            </div>
          </div>
          {/* <div className="button">
            <div className="book-now">
              <h3 className="text-1">Graduation Photoshot</h3>
              <h4 className="text-2">
                Capture Your Special Graduation Moments
              </h4>
              <h1 className="text-3">Start From 150k</h1>
              <Button onClick="null" className="btn">
                Book Now
              </Button>
            </div>
          </div> */}
        </div>

        <div className="foto-wisuda-parent">
          <div className="foto-wisuda-left">
            <div className="carousel-atas">
              <div class="card">
                <div class="card-content">
                  <Swiper
                    navigation={{
                      nextEl: ".swiper-button-next",
                      prevEl: ".swiper-button-prev",
                    }}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                  >
                    <SwiperSlide>
                      <div className="wisuda-parent">
                        <div className="wisuda1">
                          <img src={Image6} alt="text" />
                        </div>
                        <div className="button-1">
                          <div className="book-now">
                            <h3 className="text-1">PAS FOTO</h3>
                            <h4 className="text-2">
                              Appear confident in our professional footprint.
                              Get high-quality passport photos for all your
                              needs
                            </h4>

                            <h1 className="text-3">Start From 25k</h1>
                            <Button onClick="null" className="btn">
                              Book Now
                            </Button>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="wisuda-parent">
                        <div className="wisuda1">
                          <img src={Image7} alt="text" />
                        </div>
                        <div className="button-1">
                          <div className="book-now">
                            <h3 className="text-1">PHOTOSHOOT INDOOR</h3>
                            <h4 className="text-2">
                              Create your own visual story. Our indoor photo
                              shoots bring your imagination to life.
                            </h4>

                            <h1 className="text-3">Start From 250k</h1>
                            <Button onClick="null" className="btn">
                              Book Now
                            </Button>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="wisuda-parent">
                        <div className="wisuda1">
                          <img src={Image4} alt="text" />
                        </div>
                        <div className="button-1">
                          <div className="book-now">
                            <h3 className="text-1">PHOTOSHOOT OUTDOOR</h3>
                            <h4 className="text-2">
                              In nature's embrace, show your naturalness.
                              Outdoor photo shoots give every shot a natural and
                              authentic touch.
                            </h4>

                            <h1 className="text-3">Start From 400k</h1>
                            <Button onClick="null" className="btn">
                              Book Now
                            </Button>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="wisuda-parent">
                        <div className="wisuda1">
                          <img src={Image8} alt="text" />
                        </div>
                        <div className="button-1">
                          <div className="book-now">
                            <h3 className="text-1">FOTO PRODUK</h3>
                            <h4 className="text-2">
                              Present your product in the best possible light.
                            </h4>

                            <h1 className="text-3">Start From 20k</h1>
                            <Button onClick="null" className="btn">
                              Book Now
                            </Button>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    {/* <SwiperSlide>
                      <img src="https://picsum.photos/600/400" alt="text" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="https://picsum.photos/600/400" alt="text" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="https://picsum.photos/800/400" alt="text" />
                    </SwiperSlide> */}
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
              </div>
            </div>
          </div>
          {/* <div className="button-1">
            <div className="book-now">
              <h3 className="text-1">Mulai dari 250K</h3>
              <h4 className="text-2">Unlimited shoots | Soft file | Cetak</h4>
              <h1 className="text-3">Yuk studio-an dengan jasa kami!</h1>
              <Button onClick="null" className="btn">
                Book Now
              </Button>
            </div>
          </div> */}
        </div>
        <div className="foto-wisuda-parent">
          <div className="foto-wisuda-left">
            <div className="carousel-atas">
              <div class="card">
                <div class="card-content">
                  <Swiper
                    navigation={{
                      nextEl: ".swiper-button-next",
                      prevEl: ".swiper-button-prev",
                    }}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                  >
                    <SwiperSlide>
                      <div className="wisuda-parent">
                        <div className="wisuda1">
                          <img src={Image5} alt="text" />
                        </div>
                        <div className="button-2">
                          <div className="book-now">
                            <h3 className="text-1">FOTO DOKUMENTASI</h3>
                            <h4 className="text-2">
                              Moments together, recorded forever.
                            </h4>

                            <h1 className="text-3">Start From 500k</h1>
                            <Button onClick="null" className="btn">
                              Book Now
                            </Button>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>

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
              </div>
            </div>
          </div>
        </div>
        <div className="foto-wisuda-parent">
          <div className="foto-wisuda-left">
            <div className="carousel-atas">
              <div class="card">
                <div class="card-content">
                  <Swiper
                    navigation={{
                      nextEl: ".swiper-button-next",
                      prevEl: ".swiper-button-prev",
                    }}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                  >
                    <SwiperSlide>
                      <div className="wisuda-parent">
                        <div className="wisuda1">
                          <img src={Image3} alt="text" />
                        </div>
                        <div className="button-3">
                          <div className="book-now">
                            <h3 className="text-1">PHOTOBOOTH</h3>
                            <h4 className="text-2">
                              Simple but full of joy. Our photobooth gives you
                              the space to express yourself in different poses.
                            </h4>

                            <h1 className="text-3">Start From 2.000k</h1>
                            <Button onClick="null" className="btn">
                              Book Now
                            </Button>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>

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
              </div>
            </div>
          </div>
        </div>
        <div className="why-us">
          <h2>Mengapa Harus Jasa Foto KMPF?</h2>

          <div className="point-why-us">
            <div className="cheap">
              <span>
                <GiReceiveMoney
                  className="icon"
                  style={{
                    fontSize: "100px",
                    display: "flex",
                    alignItems: "center",
                    margin: "auto",
                  }}
                />
              </span>
              <h3>Terjangkau</h3>
            </div>
            <div className="medal">
              <span>
                <GiRibbonMedal
                  className="icon"
                  style={{
                    fontSize: "100px",
                    display: "flex",
                    alignItems: "center",
                    margin: "auto",
                  }}
                />
              </span>
              <h3>Kualitas Terbaik</h3>
            </div>
            <div className="hand">
              <span>
                <FaHandshake
                  className="icon"
                  style={{
                    fontSize: "100px",
                    display: "flex",
                    alignItems: "center",
                    margin: "auto",
                  }}
                />
              </span>
              <h3>Terpercaya</h3>
            </div>
          </div>
        </div>
      </div>
      {/* <Rent /> */}
      <Footer />
    </>
  );
};

export default Product;
