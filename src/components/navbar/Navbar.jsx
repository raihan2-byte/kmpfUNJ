import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.scss";
import { Spin as Hamburger } from "hamburger-react";
import Logo from "../../components/assets/logo.png";

const navbarContent = [
  {
    display: "Home",
    path: "/",
  },
  {
    display: "Gallery",
    path: "/",
  },
  {
    display: "Product & Services",
    path: "/",
  },
  {
    display: "Blog",
    path: "/",
  },
  {
    display: "About Us",
    path: "/",
  },
];

const Navbar = () => {
  const { pathname } = useLocation();
  const [addClass, setAddClass] = React.useState("");
  const navbarRef = React.useRef(null);
  const active = navbarContent.findIndex((e) => e.path === pathname);

  const onScrollHeader = () => {
    if (
      document.body.scrollTop > 150 ||
      document.documentElement.scrollTop > 150
    ) {
      navbarRef.current.classList.add("onScroll");
    } else {
      navbarRef.current.classList.remove("onScroll");
    }
  };
  window.addEventListener("scroll", onScrollHeader);
  return (
    <div className="navbar" ref={navbarRef}>
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
