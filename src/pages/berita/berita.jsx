import React from "react";
import "./berita.scss";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const berita = () => {
  return (
    <>
      <Navbar />
      <div className="berita-parent">
        <div className="text">
          <p>Judul dan Headline Berita</p>
          <p>Tanggal</p>
        </div>
        <div className="berita-child">
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

export default berita;
