import React from "react";
import "./barang.scss";
import Button from "../../button/Button";
import Berita from "../../assets/Headline1.jpg";
import Sidebar from "../../sidebar/Sidebar";

const barang = () => {
  return (
    <div>
      <Sidebar />

      <section id="content">
        <main>
          <div class="head-title">
            <div class="left">
              <h1>Admin</h1>
              <ul class="breadcrumb">
                <li>Berita</li>
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
                <h3>List Barang</h3>
                <i class="bx bx-search"></i>
                <i class="bx bx-filter"></i>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>Nama Barang</th>
                    <th>Harga</th>
                    <th>Photo</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <p>Headline berita UNJ</p>
                    </td>
                    <td>
                      <p>100.000</p>
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
                      <p>Headline berita UNJ</p>
                    </td>
                    <td>
                      <p>100.000</p>
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
                      <p>Headline berita UNJ</p>
                    </td>
                    <td>
                      <p>100.000</p>
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

export default barang;
