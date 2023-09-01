import React from "react";
import "./shortvideo.scss";
// import Headline from "../assets/Headline1.jpg";
// import Button from "../button/Button";
import { Link, useParams } from "react-router-dom";
import API from "../../api/API";

const Shortvideo = () => {
  const params = useParams();
  const [shortvideo, setShortVideo] = React.useState([]);
  console.log(shortvideo);
  const getShortVideo = async (id) => {
    await API.get(`short-video/${id}`)
      .then((response) => {
        setShortVideo(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  React.useEffect(() => {
    getShortVideo(params.id);
  }, [params.id]);

  return (
    <div className="short-video-parent">
      <div className="short-video-child">
        <div className="konten">
          <img src={shortvideo.FileName} alt="img" />
        </div>
        <div className="teks-video-short">
          <div className="judul-video-short">
            <h3>{shortvideo.Judul}</h3>
          </div>
          <div className="teks-video-short-child">
            <p>{shortvideo.Deskripsi}</p>
          </div>
          <div className="link-barang">
            <p>Source : </p>
            <Link to={shortvideo.Source}>{shortvideo.Source}</Link>
          </div>
          {/* <div className="link-barang">
            <p>Dibuat : </p>
            <Link>{shortvideo.CreatedAt}</Link>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Shortvideo;
