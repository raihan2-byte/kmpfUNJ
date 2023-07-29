import React from "react";
import "./news.scss";
import Image from "../../components/assets/Headline1.jpg";

const news = () => {
  return (
    <div className="news-parent">
      <div className="photo-news">
        <img src={Image} alt="news" />
      </div>
      <div className="text-news">
        <div className="judul-news">
          <h3>Judul dan headline berita blablbabla</h3>
        </div>
        <div className="tags">
          <div className="tags-spesifik">
            <p className="tag">karya</p>
            <p className="date">10-07-2023</p>
          </div>
          <div className="seperator"></div>
        </div>
      </div>
    </div>
  );
};

export default news;
