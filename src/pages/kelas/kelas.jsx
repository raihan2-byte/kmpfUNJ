import React from "react";
import "./kelas.scss";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import Jurnalistik from "../../components/assets/jurnalistik.jpeg";
import Alternatif from "../../components/assets/alternatif.jpeg";
import Salon from "../../components/assets/salon.jpeg";
import { MdMoreHoriz } from "react-icons/md";
// import { CgMoreR } from "react-icons/cg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import API from "../../api/API";
import { Link } from "react-router-dom";

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
      <div className="parent-kelas">
        <Navbar />
        <div className="kmpf-mencari">
          <div className="text-kmpf">#KMPFMENCARIKARYA</div>
        </div>
        <div className="parent-child">
          <div className="kelas-fotografi">
            <Swiper
              // ref={swiperRef}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              // onSlideChange={handleSlideChange}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide className="tes">
                <div className="jurnalis-konten">
                  <div className="judul">
                    <h3>Kelas Jurnalistik</h3>
                  </div>

                  <div className="kontoru">
                    <img src={Jurnalistik} alt="text" className="kontoru" />
                  </div>
                  <div className="text">
                    <p>
                      Fotografi Jurnalistik adalah seni dan praktik mengambil
                      gambar dengan tujuan untuk mendokumentasikan
                      peristiwa-peristiwa yang terjadi di dunia ini secara
                      akurat dan obyektif.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="tes">
                <div className="jurnalis-konten">
                  <div className="judul">
                    <h3>Kelas Jurnalistik</h3>
                  </div>
                  <div className="kontoru">
                    <img src={Jurnalistik} alt="text" className="kontoru" />
                  </div>
                  <div className="text">
                    <p>
                      Fotografer jurnalistik berfokus pada penangkapan
                      momen-momen penting, berita terkini, dan cerita berharga
                      yang dapat mempengaruhi masyarakat. Mereka berusaha untuk
                      mengungkapkan kebenaran dan menceritakan kisah melalui
                      gambar-gambar yang kuat dan menggugah perasaan.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="tes-1">
                <div className="jurnalis-konten">
                  <div className="judul">
                    <h3>Kelas Jurnalistik</h3>
                  </div>
                  <div className="kontoru">
                    <img src={Jurnalistik} alt="text" className="kontoru" />
                  </div>
                  <div className="text">
                    <p>
                      Fotografi jurnalistik memainkan peran yang penting dalam
                      jurnalisme, memberikan visualisasi dan rasa yang lebih
                      dalam terhadap berita-berita yang disampaikan.
                      <Link smooth to="/artikel#konten-jurnalistik">
                        <MdMoreHoriz
                          className="icon"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            fontSize: "30px",
                            marginLeft: "-5px",
                            opacity: "0.7",
                          }}
                        />
                      </Link>
                    </p>
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
          <div className="kelas-fotografi">
            <Swiper
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide className="tes">
                {/* <img src={PhotoTalk} alt="text" className="kontoru" /> */}
                <div className="jurnalis-konten">
                  <div className="judul">
                    <h3>Kelas Salon</h3>
                  </div>
                  <div className="kontoru">
                    <img src={Salon} alt="text" className="kontoru" />
                  </div>
                  <div className="text">
                    <p>
                      Kelas Fotografi Salon atau Komersil berfokus pada teknik
                      dan estetika dalam menghasilkan foto-foto yang menarik
                      secara visual dan dapat digunakan dalam berbagai konteks
                      komersil, seperti iklan, periklanan, dan publikasi.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="tes">
                <div className="jurnalis-konten">
                  <div className="judul">
                    <h3>Kelas Salon</h3>
                  </div>
                  <div className="kontoru">
                    <img src={Salon} alt="text" className="kontoru" />
                  </div>
                  <div className="text">
                    <p>
                      Dalam kelas ini, para mahasiswa akan belajar tentang
                      pengaturan pencahayaan, komposisi, pengeditan, dan teknik
                      lainnya yang memungkinkan mereka untuk menghasilkan
                      gambar-gambar yang profesional dan menarik perhatian.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="tes-1">
                <div className="jurnalis-konten">
                  <div className="judul">
                    <h3>Kelas Salon</h3>
                  </div>
                  <div className="kontoru">
                    <img src={Salon} alt="text" className="kontoru" />
                  </div>
                  <div className="text">
                    <p>
                      Tujuan dari kelas Fotografi Salon adalah untuk memberikan
                      pemahaman yang mendalam tentang aspek-aspek teknis dan
                      kreatif dalam fotografi komersil, sehingga mahasiswa dapat
                      mengembangkan kemampuan mereka dalam industri yang
                      berkaitan dengan iklan, mode, dan bidang lainnya.
                      <Link smooth to="/artikel#konten-salon">
                        <MdMoreHoriz
                          className="icon"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            fontSize: "30px",
                            marginLeft: "-5px",
                            opacity: "0.7",
                          }}
                        />
                      </Link>
                    </p>
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
          <div className="kelas-fotografi">
            <Swiper
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide className="tes">
                <div className="jurnalis-konten">
                  <div className="judul">
                    <h3>Kelas Alternatif</h3>
                  </div>
                  <div className="kontoru">
                    <img src={Alternatif} alt="text" className="kontoru" />
                  </div>
                  <div className="text">
                    <p>
                      Fotografi alternatif mengacu pada pendekatan dan teknik
                      fotografi yang berbeda dari gaya konvensional.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="tes">
                <div className="jurnalis-konten">
                  <div className="judul">
                    <h3>Kelas Alternatif</h3>
                  </div>
                  <div className="kontoru">
                    <img src={Alternatif} alt="text" className="kontoru" />
                  </div>
                  <div className="text">
                    <p>
                      Dalam fotografi alternatif, para mahasiswa akan belajar
                      untuk berpikir kreatif, melakukan eksplorasi dan inovasi
                      dalam mengambil gambar, serta menggunakan keunikan dan
                      eksperimen dalam mengungkapkan ide-ide mereka.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="tes-1">
                <div className="jurnalis-konten">
                  <div className="judul">
                    <h3>Kelas Alternatif</h3>
                  </div>
                  <div className="kontoru">
                    <img src={Alternatif} alt="text" className="kontoru" />
                  </div>
                  <div className="text">
                    <p>
                      Dengan kata lain, fotografi alternatif memberikan
                      kesempatan bagi para mahasiswa untuk melampaui batas-batas
                      tradisional dan merangkul kebebasan berekspresi dalam
                      menciptakan karya fotografi yang unik.
                      <Link to="/artikel#konten-alternatif">
                        <MdMoreHoriz
                          className="icon"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            fontSize: "30px",
                            marginLeft: "-5px",
                            opacity: "0.7",
                          }}
                        />
                      </Link>
                    </p>
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
                slidesPerView: 2,
                spaceBetween: 30,
              },
              910: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {shortvideo?.map((item) => (
              <SwiperSlide>
                <a href={`/short-video/${item.ID}`} key={item.id}>
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
