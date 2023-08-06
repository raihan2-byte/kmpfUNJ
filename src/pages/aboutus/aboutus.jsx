import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./aboutus.scss";
// import Berita from "../assets/Headline1.jpg";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import AboutUs1 from "../../components/assets/aboutus-1.jpg";
import AboutUs2 from "../../components/assets/aboutus-2.jpg";
import AboutUs3 from "../../components/assets/aboutus-3.jpg";
import AboutUs4 from "../../components/assets/aboutus-4.jpg";
import AboutUs5 from "../../components/assets/aboutus-5.jpg";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Ketua from "../../components/assets/Ketua-Organisasi.jpg";
import Bendahara from "../../components/assets/BendaharaUmum.jpg";
import EaS from "../../components/assets/EquipmentandSupplies_.jpg";
import PD from "../../components/assets/People-Developement_.jpg";
import PersonalDev from "../../components/assets/Personnel-Developement_.jpg";
import PaD from "../../components/assets/Photography-Developement.jpg";
import PaM from "../../components/assets/ProductandMerchandise_.jpg";
import Sekre from "../../components/assets/SekretarisUmum.jpg";
// import Ketua from "../../components/assets/Ketua-Organisasi.jpg";

import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const aboutus = () => {
  const mapStyles = {
    height: "400px",
    width: "100%",
  };

  const location = {
    lat: -6.2088,
    lng: 106.8456,
  };
  return (
    <>
      <Navbar />
      <div className="aboutus-parent">
        <h2>About Us</h2>
        <div className="aboutus">
          <div className="foto-kiri">
            <Swiper
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              <div className="swiper-konten">
                <SwiperSlide className="slide">
                  <div className="tes">
                    <div className="foto-about">
                      <img src={AboutUs1} alt="text" />
                    </div>
                    <div className="teks-about">
                      <h3>KMPF UNJ</h3>
                      <p>
                        KMPF UNJ merupakan salah satu unit kegiatan mahasiwa
                        resmi di bawah naungan UNJ. Bergerak dalam bidang
                        fotografi, KMPF UNJ menjadi satu-satunya unit fotografi
                        tertinggi yang bertanggung jawab atas perkembangan
                        kefotografian mahasiswa di lingkungan Universitas Negeri
                        Jakarta.
                      </p>
                      <p>
                        KMPF UNJ didirikan tanggal 8 November 1980, oleh 8
                        mahasiswa dari berbagai disiplin ilmu, yang pada saat
                        itu sama-sama memiliki hobi dalam bidang fotografi.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                  <div className="tes">
                    <div className="foto-about">
                      <img src={AboutUs2} alt="text" />
                    </div>
                    <div className="teks-about">
                      <h3>Personnel Developement</h3>
                      <p>
                        Biro ini adalah biro yang mengatur hubungan antar
                        anggota KMPF dan juga biro yang mengeratkan anggota,
                        pengurus, dan juga senior KMPF. Salah satu prokernya
                        yaitu HUT KMPF dan KMPF Nongs.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                  <div className="tes">
                    <div className="foto-about">
                      <img src={AboutUs3} alt="text" />
                    </div>
                    <div className="teks-about">
                      <h3>Photography Developement</h3>
                      <p>
                        Biro ini bertanggung jawab untuk pengembangan skill
                        fotografi anggota kmpf, dan juga bertanggung jawab untuk
                        apresiasi karya dalam bentuk pameran maupun Photo of the
                        Month.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                  <div className="tes">
                    <div className="foto-about">
                      <img src={AboutUs4} alt="text" />
                    </div>
                    <div className="teks-about">
                      <h3>People Developement</h3>
                      <p>
                        Biro ini lebih dominan dalam kepengurusan organisasi
                        yang ada di KMPF dan juga perekrutan anggota baru.
                        Program kerjanya salah satunya Penerimaan Aggota Baru
                        ini dan juga Training for Leadership.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                  <div className="tes">
                    <div className="foto-about">
                      <img src={AboutUs5} alt="text" />
                    </div>
                    <div className="teks-about">
                      <h3>Public Relation</h3>
                      <p>
                        Biro yang mengurusi segala hal terkait media sosial KMPF
                        dan hubungan eksternal dan internal KMPF dengan
                        organisasi lain. Prokernya seperti Pengelolaan Sosmed ,
                        jambore fotografi, dsb.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                  <div className="tes">
                    <div className="foto-about">
                      <img src={AboutUs5} alt="text" />
                    </div>
                    <div className="teks-about">
                      <h3>Product and Merchandise</h3>
                      <p>
                        Sesuai namanya biro ini mengurusi segala hal tentang
                        jasa kefotografian dan juga penjualan merchandise. Salah
                        satu prokernya seperti foto wisuda, dokumentasi event.
                        Dan lain sebagainya.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                  <div className="tes">
                    <div className="foto-about">
                      <img src={AboutUs5} alt="text" />
                    </div>
                    <div className="teks-about">
                      <h3>Equipment and Supplies</h3>
                      <p>
                        Biro yang mengurusi semua alat fotografi yang ada di
                        KMPF dan juga mengatur peminjaman alat fotografi baik
                        untuk internal maupun eksternal.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
        </div>
        <div className="text-aboutus">
          <h3>KMPF UNJ</h3>
          <h4>Tujuan</h4>
          <p>
            KMPF Universitas Negeri Jakarta bertujuan mengembangkan minat dan
            bakat dalam bidang fotografi dan organisasi bagi anggota KMPF
            Universitas Negeri Jakarta guna meningkatkan ketakwaan kepada Tuhan
            Yang Maha Esa, serta pengabdian kepada bangsa dan negara Indonesia.
          </p>
        </div>
        <div className="text-usaha">
          <h3>Usaha</h3>
          <h4>KMPF Universitas Negeri Jakarta berusaha :</h4>
          <div className="detail-usaha">
            <p>
              1. Memelihara dan meningkatkan mental spiritual mahasiswa
              Universitas Negeri Jakarta pada khususnya dan bangsa Indonesia
              pada umumnya.
            </p>
            <p>
              2. Memberikan dan mengembangkan pengetahuan dan keterampilan
              fotografi serta pengelolaan keorganisasian kepada anggota KMPF
              Universitas Negeri Jakarta.
            </p>
            <p>3. Mengaplikasikan Tri Darma Perguruan Tinggi.</p>
            <p>4. Mengusahakan kesejahteraan KMPF UNJ.</p>
            <p>
              5. Mengadakan usaha lainnya yang tidak bertentangan dengan
              anggaran dasar dan anggaran rumah tangga KMPF Universitas Negeri
              Jakarta.
            </p>
          </div>
        </div>
        <div className="team">
          <h3>Meet The Team</h3>
          <div className="team-child">
            <div className="bagus">
              <div className="bagus-child">
                <img src={Ketua} alt="kamera" />
              </div>
              <div className="nama">Bagus Fahmi A</div>
              <div className="jabatan">Ketua Umum</div>
            </div>
            <div className="bagus">
              <div className="bagus-child">
                <img src={Sekre} alt="kamera" />
              </div>
              <div className="nama">Rizka Amira</div>
              <div className="jabatan">Sekretaris Umum</div>
            </div>
            <div className="bagus">
              <div className="bagus-child">
                <img src={Bendahara} alt="kamera" />
              </div>
              <div className="nama">Hanna Chaerunnisa</div>
              <div className="jabatan">Bendahara Umum</div>
            </div>
            <div className="bagus">
              <div className="bagus-child">
                <img src={PD} alt="kamera" />
              </div>
              <div className="nama">Fathiya Annisa P</div>
              <div className="jabatan">Kepala Biro people developement</div>
            </div>
            <div className="bagus">
              <div className="bagus-child">
                <img src={PaD} alt="kamera" />
              </div>
              <div className="nama">Fabien Destariano</div>
              <div className="jabatan">Kepala Biro Photography Development</div>
            </div>
            <div className="bagus">
              <div className="bagus-child">
                <img src={Ketua} alt="kamera" />
                {/* ga ada fotonya */}
              </div>
              <div className="nama">Hairunnisa N</div>
              <div className="jabatan">Kepala Biro Public Relation</div>
            </div>
            <div className="bagus">
              <div className="bagus-child">
                <img src={PaM} alt="kamera" />
              </div>
              <div className="nama">Arnolandra Alfiansyah</div>
              <div className="jabatan">Kepala Biro Product Merchandise</div>
            </div>
            <div className="bagus">
              <div className="bagus-child">
                <img src={PD} alt="kamera" />
                {/* ga ada fotonya */}
              </div>
              <div className="nama">Fiorina</div>
              <div className="jabatan">Kepala Biro Personel Management</div>
            </div>
            <div className="bagus">
              <div className="bagus-child">
                <img src={EaS} alt="kamera" />
              </div>
              <div className="nama">Ika Maryani</div>
              <div className="jabatan">Kepala Biro Equipement & Supplies</div>
            </div>
          </div>
        </div>
        <div className="maps">
          <LoadScript googleMapsApiKey="YOUR_API_KEY">
            <GoogleMap
              mapContainerStyle={mapStyles}
              center={location}
              zoom={15}
            >
              <Marker position={location} />
            </GoogleMap>
          </LoadScript>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default aboutus;
