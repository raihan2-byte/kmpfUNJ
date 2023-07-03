import React from "react";
import Button from "../../button/Button";
import Berita from "../../assets/Headline1.jpg";

const kmpf = () => {
  return (
    <div>
      <section id="sidebar">
        <a href="/" class="brand">
          <i class="bx bxs-smile"></i>
          <span class="text">AdminHub</span>
        </a>
        <ul class="side-menu top">
          {/* <li class="active">
            <a href="/admin">
              <i class="bx bxs-dashboard"></i>
              <span class="text">Dashboard</span>
            </a>
          </li> */}
          <li>
            <a href="/admin">
              <i class="bx bxs-shopping-bag-alt"></i>
              <span class="text">Users</span>
            </a>
          </li>
          <li>
            <a href="/berita-admin">
              <i class="bx bxs-doughnut-chart"></i>
              <span class="text">Berita</span>
            </a>
          </li>
          <li>
            <a href="/barang-admin">
              <i class="bx bxs-message-dots"></i>
              <span class="text">Barang</span>
            </a>
          </li>
          <li>
            <a href="/phototalk-admin">
              <i class="bx bxs-group"></i>
              <span class="text">PhotoTalk</span>
            </a>
          </li>
          <li>
            <a href="/kmpf-admin">
              <i class="bx bxs-group"></i>
              <span class="text">KMPF</span>
            </a>
          </li>
          <li>
            <a href="/merch-admin">
              <i class="bx bxs-group"></i>
              <span class="text">Merch</span>
            </a>
          </li>
        </ul>
        <ul class="side-menu">
          <li>
            <a href="/" class="logout">
              <i class="bx bxs-log-out-circle"></i>
              <span class="text">Logout</span>
            </a>
          </li>
        </ul>
      </section>

      <section id="content">
        <main>
          <div class="head-title">
            <div class="left">
              <h1>Admin</h1>
              <ul class="breadcrumb">
                <li>KMPF</li>
                <li>
                  <i class="bx bx-chevron-right"></i>
                </li>
                <li>
                  <a class="active" href="#">
                    Home
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="table-data">
            <div class="order">
              <div class="head">
                <h3>List KMPF</h3>
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
                      <p>Mahasiswa UNJ MPLS</p>
                    </td>
                    <td>
                      <p>Photo Mahasiswa UNJ Yang Sedang Mengikuti MPLS</p>
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
                      <p>Mahasiswa UNJ MPLS</p>
                    </td>
                    <td>
                      <p>Photo Mahasiswa UNJ Yang Sedang Mengikuti MPLS</p>
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
                      <p>Mahasiswa UNJ MPLS</p>
                    </td>
                    <td>
                      <p>Photo Mahasiswa UNJ Yang Sedang Mengikuti MPLS</p>
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

export default kmpf;
