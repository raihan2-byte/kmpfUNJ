import React from "react";
import "./news.scss";
// import Image from "../../components/assets/Headline1.jpg";

const News = ({ berita }) => {
  function formatTanggal(dateString) {
    const createdAt = new Date(dateString);
    return `${createdAt.getFullYear()}-${
      createdAt.getMonth() + 1
    }-${createdAt.getDate()}`;
  }
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
                <p className="tag" style={{ fontWeight: "900" }}>
                  {data.KaryaNewsData.name}
                </p>
                <p className="date">{formatTanggal(data.created_at)}</p>
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
