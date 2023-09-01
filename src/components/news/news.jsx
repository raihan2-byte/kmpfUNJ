import React from "react";
import "./news.scss";
// import Image from "../../components/assets/Headline1.jpg";

const News = ({ berita }) => {
  console.log(berita);
  return (
    <div className="news-parent">
      {berita?.map((data) => (
        <div className="tes">
          <a href={`/berita/${data.id}`} key={data.id}>
            <div className="photo-news">
              <img src={data.file_name} alt="news" />
            </div>
          </a>
          <div className="text-news">
            <div className="judul-news">
              <h3>{data.judul}</h3>
            </div>
            <div className="tags">
              <div className="tags-spesifik">
                <p className="tag">{data.TagsData.nama}</p>
                <p className="date">10-07-2023</p>
              </div>
              <div className="seperator"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default News;
