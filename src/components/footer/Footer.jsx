import React from "react";
import { AiOutlineInstagram, AiOutlineYoutube, AiOutlineTwitter } from "react-icons/ai";
import { FaTiktok, FaFacebookF } from "react-icons/fa";
import "./footer.scss";
import Logo from "../../components/assets/logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__logo">
        <img src={Logo} alt="logo " />
        <p>KMPFUNJ204</p>
      </div>
      <div className="footer__info">
        <div className="contact">
          <div>
            <label htmlFor="contact">Contact Us:</label>
            <label htmlFor="email">Email:</label>
            <label htmlFor="address">Addres:</label>
          </div>
          <div>
            <p id="contact">Telp:0896-0415-9029</p>
            <p id="email">1980kmpfunj@gmail.com</p>
            <p id="address">Gedung G, R. 204, Lt. 2 Jl. Pemuda, Universitas Negeri Jakarta, Pulogadung, Jakarta Timur, DKI Jakarta 13220</p>
          </div>
        </div>
        <div className="social-media">
          <a href="/">
            <AiOutlineInstagram />
          </a>
          <a href="/">
            <AiOutlineYoutube />
          </a>
          <a href="/">
            <FaTiktok />
          </a>
          <a href="/">
            <AiOutlineTwitter />
          </a>
          <a href="/">
            <FaFacebookF />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
