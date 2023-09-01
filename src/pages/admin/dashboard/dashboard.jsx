import React, { useEffect, useState } from "react";
import "./dashboard.scss";
import Button from "../../../components/button/Button";
import Sidebar from "../../../components/sidebar/Sidebar";
import API from "../../../api/API";
import SweatAlert from "../../../sweetaleet/SweetAlert";
import { MdDelete } from "react-icons/md";

const Admin = () => {
  const [admin, setAdmin] = useState([]);

  const getAllUsers = async () => {
    try {
      const response = await API.get("/users/");
      setAdmin(response.data.data);
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
    getAllUsers();
  }, []);

  return (
    <div>
      <Sidebar />
      <section id="content">
        <main>
          <div className="head-title">
            <div className="left">
              <h1>Admin</h1>
              <ul className="breadcrumb">
                <li>User</li>
                <li>
                  <i className="bx bx-chevron-right"></i>
                </li>
                <li>
                  <a className="active" href="/">
                    Home
                  </a>
                </li>
                <li>
                  <Button onClick={getAllUsers}>Get All User</Button>
                </li>
              </ul>
            </div>
          </div>
          <div className="table-data">
            <div className="order">
              <div className="head">
                <h3>List User</h3>
                <i className="bx bx-search"></i>
                <i className="bx bx-filter"></i>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>User</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {admin.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <p>{item.Username}</p>
                      </td>
                      <td>
                        <Button className="btn">
                          <MdDelete />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
};

export default Admin;
