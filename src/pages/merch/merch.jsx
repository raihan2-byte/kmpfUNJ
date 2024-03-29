import React from "react";
import "./merch.scss";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

import Logo from "../../components/assets/logo.png";
import Button from "../../components/button/Button";
import API from "../../api/API";
import { Link } from "react-router-dom";

const Merch = () => {
  const [merch, setMerch] = React.useState([]);
  const getAllMerch = async () => {
    await API.get("merch/")
      .then((response) => {
        setMerch(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  React.useEffect(() => {
    getAllMerch();
  }, []);

  function formatRupiah(number) {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  }
  return (
    <>
      <Navbar />
      <div className="merch-parent">
        <div className="merch">
          <div className="gambar">
            <div className="logoheader">
              <svg width={260} height={130}>
                <path id="curve" d="M 0 120 C 0 120, 130 0, 260 120"></path>
                <text className="text" textAnchor="middle">
                  <textPath className="__path" href="#curve" startOffset="50%">
                    KMPF STORE
                  </textPath>
                </text>
              </svg>
            </div>
            <div className="logo">
              <img src={Logo} alt="" />
            </div>
          </div>
          <div className="merch-produk">
            {merch?.map((item) => (
              <div className="merch1">
                <img src={item.FileName} alt="merch" />
                <div className="tulisan">
                  <div className="nama-merch">{item.Name}</div>

                  <div className="price">{formatRupiah(item.Price)}</div>

                  <Link to={item.Link}>
                    <Button className="btn">Purchase Now</Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Merch;
