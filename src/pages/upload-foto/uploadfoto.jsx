import React from "react";
import "./uploadfoto.scss";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const uploadfoto = () => {
  return (
    <>
      <Navbar />
      <div className="upload-foto-parent">
        <h3 className="tulisan">Hasil Karya KMPFUNJ</h3>
        <div className="upload-foto-child">
          <div class="card">
            <div class="card-content">
              <h3 class="card-title">Judul dan HeadlineBerita</h3>
              <p class="card-description">Deskripsi Card</p>
            </div>
          </div>
          <div class="card">
            <div class="card-content">
              <h3 class="card-title">Judul dan HeadlineBerita</h3>
              <p class="card-description">Deskripsi Card</p>
            </div>
          </div>
          <div class="card">
            <div class="card-content">
              <h3 class="card-title">Judul dan HeadlineBerita</h3>
              <p class="card-description">Deskripsi Card</p>
            </div>
          </div>
          <div class="card">
            <div class="card-content">
              <h3 class="card-title">Judul dan HeadlineBerita</h3>
              <p class="card-description">Deskripsi Card</p>
            </div>
          </div>
          <div class="card">
            <div class="card-content">
              <h3 class="card-title">Judul dan HeadlineBerita</h3>
              <p class="card-description">Deskripsi Card</p>
            </div>
          </div>
          <div class="card">
            <div class="card-content">
              <h3 class="card-title">Judul dan HeadlineBerita</h3>
              <p class="card-description">Deskripsi Card</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default uploadfoto;
