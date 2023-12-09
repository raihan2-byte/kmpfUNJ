import React from "react";
import "./phototalk.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Headline from "../../components/assets/Headline1.jpg";
import { Pagination, Navigation } from "swiper";
import API from "../../api/API";

const Phototalk = () => {
  const [phototalk, setPhototalk] = React.useState([]);
  console.log(phototalk);
  const getAllPhototalk = async () => {
    await API.get("artikel/")
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
      <Navbar />
      <div className="phototalk-parent">
        <div className="phototalk-teks">
          <h3>Phototalk</h3>
          <p>
            Phototalk merupakan sebuah konten berbentuk video yang berisi
            tentang edukasi fotografi dengan berbagai skema penyampaian yang
            bertujuan mengedukasi juga meng-entertain
          </p>
        </div>
        <div className="phototalk-konten">
          <div className="section">
            <Swiper
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              {phototalk?.map((item) => (
                <SwiperSlide>
                  <div className="konten">
                    <img src={item.FileName} alt="text" className="kontoru" />
                    <div
                      className="overlay"
                      dangerouslySetInnerHTML={{
                        __html: item.Deskripsi,
                      }}
                    ></div>
                    {/* <div className="overlay">
                      <h2>{item.Deskripsi}</h2>
                    </div> */}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Phototalk;
