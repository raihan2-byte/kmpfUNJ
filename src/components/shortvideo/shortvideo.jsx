import React from "react";
import "./shortvideo.scss";
import Headline from "../assets/Headline1.jpg";
// import Button from "../button/Button";
import { Link } from "react-router-dom";

const shortvideo = () => {
  return (
    <div className="short-video-parent">
      <div className="short-video-child">
        <div className="konten">
          <img src={Headline} alt="img" />
        </div>
        <div className="teks-video-short">
          <div className="judul-video-short">
            <h3>KMPF UNJ GOES TO MALANG</h3>
          </div>
          <div className="teks-video-short-child">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam
              animi laudantium doloremque provident adipisci molestias
              temporibus voluptates reprehenderit delectus quasi odio cumque
              sunt aliquam illo exercitationem, eum vel itaque deserunt?
            </p>
          </div>
          <div className="link-barang">
            <p>Source : </p>
            <Link>http://localhost:3000/short-video</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default shortvideo;
