import React, { useEffect, useState } from "react";
import "./dashboard.scss";
import Button from "../../../components/button/Button";
import Sidebar from "../../../components/sidebar/Sidebar";
import API from "../../../api/API";
import SweatAlert from "../../../sweetaleet/SweetAlert";
import { MdDelete } from "react-icons/md";
import { AiFillFileAdd } from "react-icons/ai";

const Admin = () => {
  const [admin, setAdmin] = useState([]);

  const getStatistics = async () => {
    try {
      const response = await API.get("/statistics/View-All-News");
      setAdmin(response);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      SweatAlert(message, "warning");
    }
  };

  useEffect(() => {
    getStatistics();
  }, []);

  // const filteredAdmin = admin.filter(
  //   (item) => item.featureName === "View-All-Berita"
  // );

  return (
    <div>
      <Sidebar />
      <div className="parent">
        <div className="top-parent">
          <div className="parent-kontent">
            <h2>Users</h2>
          </div>
        </div>
        <div className="kontent">
          <div className="list">
            <h4>List User</h4>
          </div>
          <div className="table-data">
            <div className="order">
              <div className="head">
                {/* <h3>List User</h3> */}
                <i className="bx bx-search"></i>
                <i className="bx bx-filter"></i>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>Nama fitur yang di kunjungi</th>
                    <th>Jumlah</th>
                  </tr>
                </thead>
                <tbody>
                  <td>
                    <p>View Berita</p>
                  </td>
                  <td>{admin.totalCount}</td>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
