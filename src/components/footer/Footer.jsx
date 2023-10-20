import React from "react";
import {
  AiOutlineInstagram,
  AiOutlineYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
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
            <label htmlFor="address">Addrees:</label>
          </div>
          <div>
            <p id="contact">Telp:0896-0415-9029</p>
            <p id="email">1980kmpfunj@gmail.com</p>
            <p id="address">
              Gedung G, R. 204, Lt. 2 Jl. Pemuda, Universitas Negeri Jakarta,
              Pulogadung, Jakarta Timur, DKI Jakarta 13220
            </p>
          </div>
        </div>
        <div className="social-media">
          <a href="instagram.com/kmpfunj204">
            <AiOutlineInstagram />
          </a>
          <a href="https://youtube.com/@kmpfunj2043">
            <AiOutlineYoutube />
          </a>
          <a href="https://vm.tiktok.com/ZSLybSL2N/">
            <FaTiktok />
          </a>
          <a href="https://twitter.com/kmpfunj204?t=z1GG7sPpURfr9OkBwoFWnA&s=09">
            <AiOutlineTwitter />
          </a>
          <a href="https://www.facebook.com/KMPF.UNJ">
            <FaFacebookF />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
