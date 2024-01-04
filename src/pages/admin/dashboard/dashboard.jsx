import React, { useEffect, useState } from "react";
import "./dashboard.scss";
import Sidebar from "../../../components/sidebar/Sidebar";
import API from "../../../api/API";
import SweatAlert from "../../../sweetaleet/SweetAlert";

const Admin = () => {
  const [totalCount, setTotalCount] = useState({
    merch: null,
    rent: null,
  });

  const getStatistics = async () => {
    try {
      const merch = await API.get("/statistics/view-all-merch");
      const rent = await API.get("/statistics/View-All-Rent");
      const berita = await API.get("/statistics/View-All-News");
      const site = await API.get("/statistics/View-Site");
      const phototalk = await API.get("/statistics/View-All-Phototalk");
      const shortVideo = await API.get("/statistics/View-All-short-video");
      if (
        merch.data.totalCount &&
        rent.data.totalCount &&
        berita.data.totalCount &&
        site.data.totalCount &&
        phototalk.data.totalCount &&
        shortVideo.data.totalCount
      ) {
        setTotalCount((prev) => ({
          ...prev,
          merch: merch.data.totalCount,
          rent: rent.data.totalCount,
          berita: berita.data.totalCount,
          site: site.data.totalCount,
          phototalk: phototalk.data.totalCount,
          shortVideo: shortVideo.data.totalCount,
        }));
      }
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
  console.log(totalCount);

  return (
    <div>
      <Sidebar />
      <div className="parent">
        <div className="top-parent">
          <div className="parent-kontent">
            <h2>Statistic</h2>
          </div>
        </div>
        <div className="kontent">
          <div className="list">
            <h4>List total count</h4>
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
                  <tr>
                    <td>View Website</td>
                    <td>{totalCount.site}</td>
                  </tr>
                  <tr>
                    <td>View Barang</td>
                    <td>{totalCount.rent}</td>
                  </tr>
                  <tr>
                    <td>View Merch</td>
                    <td>{totalCount.merch}</td>
                  </tr>
                  <tr>
                    <td>View Berita</td>
                    <td>{totalCount.berita}</td>
                  </tr>
                  <tr>
                    <td>View Artikel</td>
                    <td>{totalCount.berita}</td>
                  </tr>
                  <tr>
                    <td>View Phototalk</td>
                    <td>{totalCount.phototalk}</td>
                  </tr>
                  <tr>
                    <td>View Short Video</td>
                    <td>{totalCount.shortVideo}</td>
                  </tr>
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
