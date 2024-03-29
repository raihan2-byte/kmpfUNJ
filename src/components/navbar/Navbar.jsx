import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.scss";
import { Spin as Hamburger } from "hamburger-react";
import Logo from "../../components/assets/logo.png";

const navbarContent = [
  {
    display: "Home",
    path: "/",
    content: [],
  },
  {
    display: "Gallery",
    path: "/kelas",
    content: [],
  },
  {
    display: "Product & Services",
    path: "",
    content: [
      { name: "Product & Services", path: "/productservice" },
      { name: "Rent & Price", path: "/rent" },
      { name: "Merch", path: "/merch" },
    ],
  },
  {
    display: "Blog",
    path: "",
    content: [
      { name: "News", path: "/berita" },
      { name: "Artikel KMPF", path: "/artikel" },
      // { name: "Karya KMPF", path: "/upload-foto" },
      { name: "PhotoTalk", path: "/phototalk" },
    ],
  },
  {
    display: "About Us",
    path: "/aboutus",
    content: [],
  },
];

const Navbar = () => {
  const { pathname } = useLocation();
  const [addClass, setAddClass] = React.useState("");
  const active = navbarContent.findIndex((e) => e.path === pathname);

  return (
    <div className="navbar">
      <div className="navbar__wrap container">
        <div className="logo">
          <img src={Logo} alt="kamera" />
          <p>KMPFUNJ204</p>
        </div>
        <ul className={`navbar__wrap__display ${addClass}`}>
          {navbarContent.map((e, i) => (
            <li key={i} className={`${i === active ? "active" : ""}`}>
              <Link className="text" to={e.path}>
                {e.display}
              </Link>
              <div className="dropdown-content">
                {e.content.map((e, i) => (
                  <Link key={i} to={e.path} className="text-content">
                    {e.name}
                  </Link>
                ))}
              </div>
            </li>
          ))}
        </ul>
        <div className="buttonDisplay">
          <Hamburger
            onToggle={(toggled) =>
              toggled ? setAddClass("isActive") : setAddClass("")
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
