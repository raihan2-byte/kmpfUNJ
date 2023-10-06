import React from "react";
import Button from "../../../components/button/Button";
import "./phototalk.scss";
// import Berita from "../../../components/assets/Headline1.jpg";
import Sidebar from "../../../components/sidebar/Sidebar";
import API from "../../../api/API";
import SweatAlert from "../../../sweetaleet/SweetAlert";
import { MdDelete } from "react-icons/md";
import { AiFillEye } from "react-icons/ai";

const Phototalk = () => {
  const [phototalk, setPhototalk] = React.useState([]);
  console.log(phototalk);
  const getAllPhototalk = async () => {
    await API.get("/phototalk/")
      .then((response) => {
        setPhototalk(response.data.data);
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
    getAllPhototalk();
  }, []);

  const handleDeletePhototalk = async (id) => {
    try {
      // Panggil endpoint API untuk menghapus berita berdasarkan id
      await API.delete(`/phototalk/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "multipart/form-data",
        },
      }).then((response) => {
        console.log(response.data);
        SweatAlert("Berhasil Menghapus data", "success");
      });
      // Setelah penghapusan berhasil, perbarui daftar berita
      getAllPhototalk();
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
            <h2>Phototalk</h2>
          </div>
        </div>
        <div className="kontent">
          <div className="list">
            <h4>List Phototalk</h4>
            <a href="/create-phototalk">
              <Button className="btn-create">Create Phototalk</Button>
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
                    <th>Deskripsi</th>
                    <th>Photo</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {phototalk?.map((item) => (
                    <tr>
                      <td>
                        <p>{item.Judul}</p>
                      </td>
                      <td>
                        <p>{item.Deskripsi}</p>
                      </td>
                      <td>
                        <img src={item.FileName} alt="text" />
                      </td>
                      <td>
                        <Button
                          className="btn"
                          onClick={() => handleDeletePhototalk(item.ID)}
                        >
                          <MdDelete />
                        </Button>
                        <a href={`/phototalk/`}>
                          <Button className="btn">
                            <AiFillEye />
                          </Button>
                        </a>
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

export default Phototalk;
