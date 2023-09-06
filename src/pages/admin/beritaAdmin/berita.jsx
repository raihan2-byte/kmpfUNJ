import React from "react";
import "./berita.scss";
import Button from "../../../components/button/Button";
import Sidebar from "../../../components/sidebar/Sidebar";
import API from "../../../api/API";
import SweatAlert from "../../../sweetaleet/SweetAlert";
import { MdDelete } from "react-icons/md";
import { AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";

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

  const handleDeleteBerita = async (beritaId) => {
    try {
      // Panggil endpoint API untuk menghapus berita berdasarkan beritaId
      await API.delete(`/berita/delete/${beritaId}`);
      // Setelah penghapusan berhasil, perbarui daftar berita
      getAllNews();
    } catch (error) {
      console.error(error);
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      SweatAlert(message, "warning");
    }
  };

  return (
    <div>
      <Sidebar />
      <div className="parent">
        <div className="top-parent">
          <div className="parent-kontent">
            {" "}
            <h2>Berita</h2>
          </div>
        </div>
        <div className="kontent">
          <div className="list">
            <h4>List Berita</h4>
            <a href="/create-berita">
              <Button className="btn-create">Create Berita</Button>
            </a>
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
                    <th>Judul</th>
                    <th>Image</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {berita.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <p>{item.judul}</p>
                      </td>
                      <td>
                        <img src={item.file_name} alt="text" />
                      </td>
                      <td>
                        <Button
                          className="btn"
                          onClick={() => handleDeleteBerita(item.id)}
                        >
                          <Link to={`/berita/delete/${item.id}`}>
                            <MdDelete />
                          </Link>
                        </Button>
                        <Button className="btn">
                          <a href={`/berita/${item.id}`}>
                            <AiFillEye />
                          </a>
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

export default Berita;
