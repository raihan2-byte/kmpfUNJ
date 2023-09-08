import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./sidebar.scss";
import { Spin as Hamburger } from "hamburger-react";
import Button from "../button/Button";

const navbarContent = [
  {
    display: "Users",
    path: "/admin",
    content: [],
  },
  {
    display: "Berita",
    path: "/berita-admin",
    content: [],
  },
  {
    display: "Barang",
    path: "/barang-admin",
    content: [],
  },
  {
    display: "PhotoTalk",
    path: "/phototalk-admin",
    content: [],
  },
  {
    display: "Short Video",
    path: "/kmpf-admin",
    content: [],
  },
  {
    display: "Merch",
    path: "/merch-admin",
    content: [],
  },
];

const Sidebar = () => {
  const { pathname } = useLocation();
  const [addClass, setAddClass] = React.useState("");
  const active = navbarContent.findIndex((e) => e.path === pathname);
  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <div className="sidebar">
      <div className="sidebar__wrap container">
        <div className="logo">
          {/* <img src={Logo} alt="kamera" /> */}
          <a href="/">
            <h3 style={{ color: "black" }}>Dashboard Admin</h3>
          </a>
        </div>
        <ul className={`sidebar__wrap__display ${addClass}`}>
          {navbarContent.map((e, i) => (
            <li key={i} className={`${i === active ? "active" : ""}`}>
              <Link className="text" to={e.path}>
                {e.display}
              </Link>
              <div class="dropdown-content">
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
        <Button onClick={logout} className="logout">
          <i className="bx bxs-log-out-circle"></i>
          <span className="text">Logout</span>
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
