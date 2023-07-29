import React from "react";
import "./berita.scss";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import News from "../../components/news/news";
import Button from "../../components/button/Button";
import Headline from "../../components/assets/Headline1.jpg";

const berita = () => {
  return (
    <>
      <Navbar />
      <div className="berita-parent">
        <div className="space">
          <div className="text">
            <p>Judul dan Headline Berita</p>
            <p>Tanggal</p>
          </div>
          <div className="berita-child">
            <div class="card">
              <img src={Headline} alt="text" className="kontoru" />
              <div class="card-content">
                <h3 class="card-title-left">Judul dan HeadlineBerita</h3>
              </div>
            </div>
            <div class="card">
              <img src={Headline} alt="text" className="kontoru" />

              <div class="card-content">
                <h3 class="card-title-middle">Judul dan HeadlineBerita</h3>
              </div>
            </div>
            <div class="card">
              <img src={Headline} alt="text" className="kontoru" />

              <div class="card-content">
                <h3 class="card-title-right">Judul dan HeadlineBerita</h3>
              </div>
            </div>
          </div>
          <div className="news-archieve">
            <h3>News Archieve</h3>
            <hr style={{ borderBlockColor: "black" }} />
          </div>
          <News />
          <News />
          <News />
          <News />
        </div>
        <div className="tambahan">
          <div className="tambahan-child">
            <div className="karya">
              <h3>Karya Archieve</h3>
              <div className="image">
                <h5>Judul dan Headline Berita</h5>
                <img src={Headline} alt="img" />
              </div>
              <Button>More</Button>
            </div>
            {/* <hr className="garis" /> */}
            <div className="proker">
              <h3>Proker Archieve</h3>
              <div className="image">
                <h5>Judul dan Headline Berita</h5>
                <img src={Headline} alt="img" />
              </div>

              <Button>More</Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default berita;
