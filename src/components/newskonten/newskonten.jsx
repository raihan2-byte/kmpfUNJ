import React from "react";
import "./newskonten.scss";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import Headline from "../assets/Headline1.jpg";
import { useParams } from "react-router-dom";
import API from "../../api/API";
import { MdPeopleAlt } from "react-icons/md";

// import News from "../news/news";
const Newskonten = () => {
  const params = useParams();
  const [berita, setBerita] = React.useState({});
  // const beritaIterable = Array.from(berita);
  console.log(berita);
  const getBeritaID = async (id) => {
    await API.get(`berita/${id}`)
      .then((response) => {
        setBerita(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  React.useEffect(() => {
    getBeritaID(params.id);
  }, [params.id]);

  function formatTanggal(dateString) {
    const createdAt = new Date(dateString);
    return `${createdAt.getFullYear()}-${
      createdAt.getMonth() + 1
    }-${createdAt.getDate()}`;
  }
  return (
    <>
      <Navbar />
      <div className="news-konten-parent">
        <div className="news-konten-img">
          <div className="foto-parent">
            <h3 className="judul-konten">{berita.judul}</h3>
            <div className="foto-konten">
              <div className="kiri">
                <div className="foto">
                  <img src={berita.file_name} alt="img" />
                </div>
                <br />
                <div className="pembuat">
                  <p
                    className="admin"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {" "}
                    <MdPeopleAlt style={{ marginRight: "5px" }} /> admin
                  </p>
                  <p className="date">{formatTanggal(berita.created_at)}</p>
                  <p className="tags-news">{berita.KaryaNewsData?.name}</p>
                </div>
                <div className="text-konten">
                  <br />
                  <div
                    className="text"
                    dangerouslySetInnerHTML={{
                      __html: berita.berita_message,
                    }}
                  ></div>
                </div>
              </div>
              <div className="news-recomendation">
                <div className="konten-recomendation">
                  <h4>Recomendation</h4>
                  <div className="titit">
                    {/* <div className="konten-recomendation-child">
                      <div className="photo-news">
                        <img src={Headline} alt="news" />
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
                    </div> */}
                    {/* {Array.from(berita).map((item) => ( */}
                    <div className="konten-recomendation-child">
                      <a href={`/berita/${berita.id}`} key={berita.id}>
                        <div className="photo-news">
                          <img src={berita.file_name} alt="news" />
                        </div>
                      </a>
                      <div className="text-news">
                        <div className="judul-news">
                          <h3>{berita.judul}</h3>
                        </div>
                        <div className="tags">
                          <div className="tags-spesifik">
                            <p className="tag">berita</p>
                            <p className="date">10-07-2023</p>
                          </div>
                          <div className="seperator"></div>
                        </div>
                      </div>
                    </div>
                    {/* ))} */}
                    <div className="konten-recomendation-child">
                      <a href={`/berita/${berita.id}`} key={berita.id}>
                        <div className="photo-news">
                          <img src={berita.file_name} alt="news" />
                        </div>
                      </a>
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Newskonten;
