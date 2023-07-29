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
import Kamera from "../../components/assets/logo.png";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
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
              <SwiperSlide>
                <img src={AboutUs1} alt="text" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={AboutUs2} alt="text" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={AboutUs3} alt="text" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={AboutUs4} alt="text" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={AboutUs5} alt="text" />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="text-kanan">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem,
            ipsam tempore! Magni, consectetur vitae! Quas dignissimos incidunt
            nam, porro beatae obcaecati dolorem corrupti nulla quibusdam
            repellendus ea, quis neque illo?
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
                <img src={Kamera} alt="kamera" />
              </div>
              <div className="nama">Bagus Fahmi A</div>
              <div className="jabatan">Ketua Umum</div>
            </div>
            <div className="bagus">
              <div className="bagus-child">
                <img src={Kamera} alt="kamera" />
              </div>
              <div className="nama">Rizka Amira</div>
              <div className="jabatan">Sekretaris Umum</div>
            </div>
            <div className="bagus">
              <div className="bagus-child">
                <img src={Kamera} alt="kamera" />
              </div>
              <div className="nama">Hanna Chaerunnisa</div>
              <div className="jabatan">Bendahara Umum</div>
            </div>
            <div className="bagus">
              <div className="bagus-child">
                <img src={Kamera} alt="kamera" />
              </div>
              <div className="nama">Fathiya Annisa P</div>
              <div className="jabatan">Kepala Biro people developement</div>
            </div>
            <div className="bagus">
              <div className="bagus-child">
                <img src={Kamera} alt="kamera" />
              </div>
              <div className="nama">Fabien Destariano</div>
              <div className="jabatan">Kepala Biro Photography Development</div>
            </div>
            <div className="bagus">
              <div className="bagus-child">
                <img src={Kamera} alt="kamera" />
              </div>
              <div className="nama">Hairunnisa N</div>
              <div className="jabatan">Kepala Biro Public Relation</div>
            </div>
            <div className="bagus">
              <div className="bagus-child">
                <img src={Kamera} alt="kamera" />
              </div>
              <div className="nama">Arnolandra Alfiansyah</div>
              <div className="jabatan">Kepala Biro Product Merchandise</div>
            </div>
            <div className="bagus">
              <div className="bagus-child">
                <img src={Kamera} alt="kamera" />
              </div>
              <div className="nama">Fiorina</div>
              <div className="jabatan">Kepala Biro Personel Management</div>
            </div>
            <div className="bagus">
              <div className="bagus-child">
                <img src={Kamera} alt="kamera" />
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
