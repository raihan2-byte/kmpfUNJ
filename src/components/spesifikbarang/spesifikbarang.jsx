import React from "react";
import "./spesifikbarang.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import Headline from "../assets/Headline1.jpg";
import Button from "../button/Button";
import { useParams } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import API from "../../api/API";

const Spesifikbarang = () => {
  const params = useParams();
  const [barang, setBarang] = React.useState([]);
  console.log(barang);
  const getBarang = async (id) => {
    await API.get(`short-video/${id}`)
      .then((response) => {
        setBarang(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  React.useEffect(() => {
    getBarang(params.id);
  }, [params.id]);
  return (
    <div className="sepesifik-barang-parent">
      <div className="barang-foto-barang">
        <div className="barang-section">
          <Swiper
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="foto-barang">
                <img src={Headline} alt="text" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="foto-barang">
                <img src={Headline} alt="text" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="foto-barang">
                <img src={Headline} alt="text" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="foto-barang">
                <img src={Headline} alt="text" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="teks-barang">
          <div className="judul-barang-spesifik">
            <h3>Kamera Light Brown</h3>
          </div>
          <div className="teks-barang-spesifik">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam
              animi laudantium doloremque provident adipisci molestias
              temporibus voluptates reprehenderit delectus quasi odio cumque
              sunt aliquam illo exercitationem, eum vel itaque deserunt?
            </p>
          </div>
          <div className="teks-price-spesifik">
            <h1 className="rupiah">Rp</h1>
            <h1 className="price">100.000</h1>
          </div>
          <div className="btn-barang">
            <Button>Book Now</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spesifikbarang;
