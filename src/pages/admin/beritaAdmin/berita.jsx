import React from "react";
import "./berita.scss";
import Button from "../../../components/button/Button";
import Sidebar from "../../../components/sidebar/Sidebar";
import API from "../../../api/API";
import SweatAlert from "../../../sweetaleet/SweetAlert";

const Berita = () => {
  const [berita, setBerita] = React.useState([]);
  console.log(berita);
  const getAllNews = async () => {
    await API.get("/berita/")
      .then((response) => {
        setBerita(response.data.data);
      })
      .catch((error) => {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        SweatAlert(message, "warning");
      });
  };
  React.useEffect(() => {
    getAllNews();
  }, []);

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
                <h3>List Berita</h3>
                <i class="bx bx-search"></i>
                <i class="bx bx-filter"></i>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>Headline berita</th>
                    <th>Photo</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {berita?.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <p>{item.judul}</p>
                      </td>
                      <td>
                        <img src={item.file_name} alt="text" />
                      </td>
                      <td>
                        <Button>Delete</Button>
                        <Button>Get</Button>
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

export default Berita;
