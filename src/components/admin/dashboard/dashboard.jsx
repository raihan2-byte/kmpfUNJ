import React from "react";
import "./dashboard.scss";
// import { Link } from "react-router-dom";
import Button from "../../button/Button";
import Sidebar from "../../sidebar/Sidebar";

const admin = () => {
  return (
    <div>
      <Sidebar />

      <section id="content">
        <main>
          <div class="head-title">
            <div class="left">
              <h1>Admin</h1>
              <ul class="breadcrumb">
                <li>user</li>
                <li>
                  <i class="bx bx-chevron-right"></i>
                </li>
                <li>
                  <a class="active" href="/">
                    Home
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="table-data">
            <div class="order">
              <div class="head">
                <h3>List User</h3>
                <i class="bx bx-search"></i>
                <i class="bx bx-filter"></i>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>User</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <p>John Doe</p>
                    </td>
                    <td>
                      <Button>Create</Button>
                      <Button>Delete</Button>
                      <Button>Get</Button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>John Doe</p>
                    </td>
                    <td>
                      <Button>Create</Button>
                      <Button>Delete</Button>
                      <Button>Get</Button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>John Doe</p>
                    </td>
                    <td>
                      <Button>Create</Button>
                      <Button>Delete</Button>
                      <Button>Get</Button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>John Doe</p>
                    </td>
                    <td>
                      <Button>Create</Button>
                      <Button>Delete</Button>
                      <Button>Get</Button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>John Doe</p>
                    </td>
                    <td>
                      <Button>Create</Button>
                      <Button>Delete</Button>
                      <Button>Get</Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
};

export default admin;
