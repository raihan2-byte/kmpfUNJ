import React from "react";
import "./berita.scss";
import Button from "../../../components/button/Button";
import Sidebar from "../../../components/sidebar/Sidebar";
import API from "../../../api/API";
import SweatAlert from "../../../sweetaleet/SweetAlert";
import { MdDelete } from "react-icons/md";

const Berita = () => {
  const [berita, setBerita] = React.useState([]);
  console.log(berita);
  const getAllNews = async () => {
    await API.get("/berita/")
      .then((response) => {
        setBerita(response.data.data);
      })
      .catch((error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        SweatAlert(message, "warning");
      });
  };
  React.useEffect(() => {
    getAllNews();
  }, []);

  return (
    <div>
      <Sidebar />
      <section id="test">
        <main>
          <div className="head-title">
            <div className="left">
              <h1>Admin</h1>
              <ul className="breadcrumb">
                <li>Berita</li>
                <li>
                  <i className="bx bx-chevron-right"></i>
                </li>
                <li>
                  <a className="active" href="/">
                    Home
                  </a>
                </li>
                <li>
                  <Button
                    onClick={() => (window.location.href = "/create-berita")}
                  >
                    Create
                  </Button>
                </li>
              </ul>
            </div>
          </div>
          <div className="table-data">
            <div className="order">
              <div className="head">
                <h3>List Berita</h3>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>Judul Berita</th>
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
                        <Button>
                          <MdDelete />
                        </Button>
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
