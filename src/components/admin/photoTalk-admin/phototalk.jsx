import React from "react";
import Button from "../../button/Button";
import "./phototalk.scss";
import Berita from "../../assets/Headline1.jpg";
import Sidebar from "../../sidebar/Sidebar";

const phototalk = () => {
  return (
    <div>
      <Sidebar />
      <section id="content">
        <main>
          <div class="head-title">
            <div class="left">
              <h1>Admin</h1>
              <ul class="breadcrumb">
                <li>PhotoTalk</li>
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
                <h3>List PhotoTalk</h3>
                <i class="bx bx-search"></i>
                <i class="bx bx-filter"></i>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>Judul</th>
                    <th>Deskripsi</th>
                    <th>Photo</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <p>PhotoTalk</p>
                    </td>
                    <td>
                      <p>ini adalah phototalk terbaik</p>
                    </td>
                    <td>
                      <img src={Berita} alt="text" />
                    </td>
                    <td>
                      <Button>Create</Button>
                      <Button>Delete</Button>
                      <Button>Get</Button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>PhotoTalk</p>
                    </td>
                    <td>
                      <p>ini adalah phototalk terbaik</p>
                    </td>
                    <td>
                      <img src={Berita} alt="text" />
                    </td>
                    <td>
                      <Button>Create</Button>
                      <Button>Delete</Button>
                      <Button>Get</Button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>PhotoTalk</p>
                    </td>
                    <td>
                      <p>ini adalah phototalk terbaik</p>
                    </td>
                    <td>
                      <img src={Berita} alt="text" />
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

export default phototalk;
