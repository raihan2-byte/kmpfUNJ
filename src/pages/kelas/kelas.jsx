import React from "react";
import "./kelas.scss";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const kelas = () => {
  return (
    <>
      <Navbar />
      <div className="parent">
        <div className="kelas-foga">
          <div className="foga">
            <h1>#KMPFMENCARIKARYA</h1>
          </div>
        </div>
        <div className="kelas-fotografi">
          <h1>Kelas Fotografi</h1>
          <div className="kelas-jurnalis-parent">
            <div className="kelas-jurnalis-left"></div>
            <div className="kelas-jurnalis-right">
              <h1>Kelas Jurnalistik</h1>
              <p>Kelas Jurnalistik merupakan kelas yang mempelajari tentang blablabla</p>
            </div>
          </div>
          <div className="kelas-salon-parent">
            <div className="kelas-salon-left">
              <h1>Kelas Salon</h1>
              <p>Kelas Salon merupakan kelas yang mempelajari tentang blablabla</p>
            </div>
            <div className="kelas-salon-right"></div>
          </div>
          <div className="kelas-alternatif-parent">
            <div className="kelas-alternatif-left"></div>
            <div className="kelas-alternatif-right">
              <h1>Kelas Alternatif</h1>
              <p>Kelas Alternatif merupakan kelas yang mempelajari tentang blablabla</p>
            </div>
          </div>
        </div>
        <div className="members-parent">
          <h1>Members</h1>
          <img src="https://picsum.photos/800/400" alt="text" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default kelas;
