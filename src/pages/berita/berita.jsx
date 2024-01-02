import React from "react";
import "./berita.scss";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import News from "../../components/news/news";
import Button from "../../components/button/Button";
import API from "../../api/API";
import { Link } from "react-router-dom";

const Berita = () => {
  const [berita, setBerita] = React.useState([]);
  const getAllBeritaa = async () => {
    await API.get("berita/")
      .then((response) => {
        setBerita(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  React.useEffect(() => {
    getAllBeritaa();
  }, []);
  const sortedBerita = berita.sort((a, b) => b.ID - a.ID);
  const lastThreeBerita = sortedBerita.slice(0, 3);

  function formatTanggal(dateString) {
    const createdAt = new Date(dateString);
    return `${createdAt.getFullYear()}-${
      createdAt.getMonth() + 1
    }-${createdAt.getDate()}`;
  }

  const spaceBerita = lastThreeBerita.slice(0, 1); // Ambil yang terbaru untuk space
  const beritaChildBerita = berita.slice(1).slice(0, 3); // Ambil 3 terbaru untuk berita-child
  const archieveBerita = berita.slice(6).slice(0, 6);
  const maxBeritaChild = window.innerWidth <= 475 ? 2 : 3;
  const beritaChildTampilan = beritaChildBerita.slice(0, maxBeritaChild);
  const artikelFiltered = berita.filter((item) =>
    [1, 2, 3].includes(item.tags_id)
  );
  const prokerFiltered = berita.filter((item) => item.tags_id === 4);

  return (
    <>
      <Navbar />
      <div className="berita-parent">
        <div className="space">
          {spaceBerita.slice(0, 1).map((item) => (
            <a href={`/berita/${item.slug}`} key={item.id}>
              <div className="text">
                <img src={item.file_names[0]} alt="text" className="kontoru" />
                <h3>{item.judul}</h3>
                <p>{formatTanggal(item.created_at)}</p>
              </div>
            </a>
          ))}

          <div className="berita-child">
            {beritaChildTampilan.map((item) => (
              <a href={`/berita/${item.slug}`} key={item.id}>
                <div class="card">
                  <img
                    src={item.file_names[0]}
                    alt="text"
                    className="kontoru"
                  />

                  <div class="card-content">
                    <h3 class="card-title-left">{item.judul}</h3>
                  </div>
                </div>
              </a>
            ))}
          </div>
          <div className="archieve">
            <div className="news-archieve">
              <h3>News Archieve</h3>
            </div>
            <News className="archieve-konten" berita={archieveBerita} />
          </div>
        </div>
        <div className="tambahan">
          <div className="tambahan-child">
            {artikelFiltered.slice(0, 1).map((item) => (
              <div className="karya">
                <h3 className="teks-tambahan">Karya Archieve</h3>
                <a href={`/berita/${item.slug}`} key={item.id}>
                  <div className="image">
                    <h5>{item.judul}</h5>

                    <img
                      src={item.file_names[0]}
                      style={{ filter: "brightness(20%)" }}
                      alt="img"
                    />
                  </div>
                </a>
                {/* <Link smooth to="/artikel#our-proker" style={{ zIndex: "999" }}> */}
                <Link
                  className="btn"
                  style={{ zIndex: "999" }}
                  to="/artikel?scrollTo=karya"
                >
                  More
                </Link>
                {/* </Link> */}
              </div>
            ))}
            {prokerFiltered.slice(0, 1).map((item) => (
              <div className="proker">
                <h3 className="teks-tambahan">Proker Archieve</h3>
                <a href={`/berita/${item.slug}`} key={item.id}>
                  <div className="image">
                    <h5>{item.judul}</h5>
                    <img src={item.file_names[0]} alt="img" />
                  </div>
                </a>
                {/* <Link smooth to="/artikel#our-proker" style={{ zIndex: "999" }}> */}
                <Link
                  className="btn"
                  style={{ zIndex: "999" }}
                  to="/artikel?scrollTo=proker"
                >
                  More
                </Link>
                {/* </Link> */}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Berita;
