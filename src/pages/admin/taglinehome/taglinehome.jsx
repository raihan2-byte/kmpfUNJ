import React from "react";
import Button from "../../../components/button/Button";
import "./taglinehome.scss";
// import Berita from "../../../components/assets/Headline1.jpg";
import Sidebar from "../../../components/sidebar/Sidebar";
import API from "../../../api/API";
import SweatAlert from "../../../sweetaleet/SweetAlert";
import { MdDelete } from "react-icons/md";
import { AiFillEye } from "react-icons/ai";

const TagLineHome = () => {
  const [tagHome, setTagHome] = React.useState([]);
  console.log(tagHome);
  const getAllTagHome = async () => {
    await API.get("/tagLine/")
      .then((response) => {
        setTagHome(response.data.data);
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
    getAllTagHome();
  }, []);

  const handleDeletePhototalk = async (id) => {
    try {
      // Panggil endpoint API untuk menghapus berita berdasarkan id
      await API.delete(`/tagLine/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "multipart/form-data",
        },
      }).then((response) => {
        console.log(response.data);
        SweatAlert("Berhasil Menghapus data", "success");
      });
      // Setelah penghapusan berhasil, perbarui daftar berita
      getAllTagHome();
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
            <h2>Tag Home</h2>
          </div>
        </div>
        <div className="kontent">
          <div className="list">
            <h4>List tag home</h4>
            <a href="/create-tag-home">
              <Button className="btn-create">Create tag home</Button>
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
                    <th>Heading</th>
                    <th>Text</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {tagHome?.map((item) => (
                    <tr>
                      <td>
                        <p>{item.Heading}</p>
                      </td>
                      <td>
                        <p>
                          <div
                            className="text"
                            dangerouslySetInnerHTML={{
                              __html: item.Text,
                            }}
                          ></div>
                        </p>
                      </td>
                      <td>
                        <Button
                          className="btn"
                          onClick={() => handleDeletePhototalk(item.ID)}
                        >
                          <MdDelete />
                        </Button>
                        <a href={`/tagHome/`}>
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

export default TagLineHome;
