import React from "react";
import "./merch.scss";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Merch1 from "../../components/assets/whitee.png";
import Merch2 from "../../components/assets/black.png";
import LogoHeader from "../../components/assets/Frame.png";
import Logo from "../../components/assets/logo.png";
import Button from "../../components/button/Button";
import API from "../../api/API";
import { Link } from "react-router-dom";

const Merch = () => {
  const [merch, setMerch] = React.useState([]);
  console.log(merch);
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
            <img src={LogoHeader} alt="" className="logoheader" />
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
