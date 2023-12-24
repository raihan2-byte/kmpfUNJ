import React from "react";
import "./news.scss";
// import Image from "../../components/assets/Headline1.jpg";

const News = ({ berita }) => {
  // const truncateText = (text, maxLength) => {
  //   if (text) {
  //     const words = text.split(" ");
  //     if (words.length > maxLength) {
  //       return words.slice(0, maxLength).join(" ") + "...";
  //     }
  //     return text;
  //   }
  //   return "";
  // };

  function formatTanggal(dateString) {
    const createdAt = new Date(dateString);
    return `${createdAt.getFullYear()}-${
      createdAt.getMonth() + 1
    }-${createdAt.getDate()}`;
  }
  return (
    <div className="news-parent">
      {berita?.map((data) => (
        <div className="tes">
          <a href={`/berita/${data.slug}`} key={data.id}>
            <div className="photo-news">
              <img src={data.file_names[0]} alt="news" />
            </div>
          </a>
          <div className="text-news">
            <div className="judul-news">
              <h3>{data.judul}</h3>
            </div>
            {/* <div
              className="firt-sentence"
              dangerouslySetInnerHTML={{
                __html: truncateText(data.berita_message, 20),
              }}
            ></div> */}

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
