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
      <div className="parent">
        <div className="top-parent">
          <div className="parent-kontent">
            {" "}
            <h2>Users</h2>
          </div>
          <div className="parent-kontent"> </div>
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
                        <Button className="btn">
                          <AiFillFileAdd />
                        </Button>
                      </td>
                    </tr>
                  ))}
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
