import React from "react";
import "./sidebar.scss";
import { Link, useLocation } from "react-router-dom";

const sidebarContent = [
  {
    display: "Users",
    path: "/admin",
  },
  {
    display: "Berita",
    path: "/berita-admin",
  },
  {
    display: "Barang",
    path: "/barang-admin",
  },
  {
    display: "PhotoTalk",
    path: "/phototalk-admin",
  },
  {
    display: "KMPF",
    path: "/kmpf-admin",
  },
  {
    display: "Merch",
    path: "/merch-admin",
  },
];

const Sidebar = () => {
  const location = useLocation();
  return (
    <section id="sidebar">
      <a href="/" className="brand">
        <i className="bx bxs-smile"></i>
        <span className="text">AdminHub</span>
      </a>
      <ul className="side-menu top">
        {sidebarContent.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={`${
                  item.path === location.pathname.toString() ? "active" : ""
                } link`}
                to={item.path}
              >
                <i className="bx bxs-group"></i>
                <span className="text">{item.display}</span>
              </Link>
            </li>
          );
        })}
        <li>
          <a href="/" className="logout">
            <i className="bx bxs-log-out-circle"></i>
            <span className="text">Logout</span>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Sidebar;
