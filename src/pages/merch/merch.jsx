import React from "react";
import "./merch.scss";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Merch1 from "../../components/assets/whitee.png";
import Merch2 from "../../components/assets/black.png";
import LogoHeader from "../../components/assets/Frame.png";
import Logo from "../../components/assets/logo.png";
import Button from "../../components/button/Button";

const merch = () => {
  return (
    <>
      <Navbar />
      <div className="merch-parent">
        <div className="merch">
          <img src={LogoHeader} alt="" className="logoheader" />
          <div className="logo">
            <img src={Logo} alt="" />
          </div>
          <div className="merch-produk">
            <div className="merch1">
              <img src={Merch1} alt="merch" />
              <div className="tulisan">
                <div className="nama-merch">ToteBag 'Kumpul Gan'</div>

                <div className="price">IDR 50.000</div>
                <Button className="btn">Purchase Now</Button>
              </div>
            </div>
            <div className="merch2">
              <img src={Merch2} alt="merch" />
              <div className="tulisan">
                <div className="nama-merch">ToteBag 'Kumpul Gan'</div>

                <div className="price">IDR 50.000</div>
                <Button className="btn">Purchase Now</Button>
              </div>
            </div>
            <div className="merch1">
              <img src={Merch1} alt="merch" />
              <div className="tulisan">
                <div className="nama-merch">ToteBag 'Kumpul Gan'</div>

                <div className="price">IDR 50.000</div>
                <Button className="btn">Purchase Now</Button>
              </div>
            </div>
            <div className="merch1">
              <img src={Merch1} alt="merch" />
              <div className="tulisan">
                <div className="nama-merch">ToteBag 'Kumpul Gan'</div>

                <div className="price">IDR 50.000</div>
                <Button className="btn">Purchase Now</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default merch;
