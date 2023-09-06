import React from "react";
import "./barang.scss";
import Button from "../../../components/button/Button";
import Sidebar from "../../../components/sidebar/Sidebar";
import API from "../../../api/API";
import SweatAlert from "../../../sweetaleet/SweetAlert";
import { MdDelete } from "react-icons/md";
import { AiFillEye } from "react-icons/ai";

const Barang = () => {
  const [barang, setBarang] = React.useState([]);
  console.log(barang);
  const getAllNews = async () => {
    await API.get("/barang/")
      .then((response) => {
        setBarang(response.data.data);
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
      <div className="parent">
        <div className="top-parent">
          <div className="parent-kontent">
            {" "}
            <h2>Barang</h2>
          </div>
        </div>
        <div className="kontent">
          <div className="list">
            <h4>List Barang</h4>
            <a href="/create-berita">
              <Button className="btn-create">Create Barang</Button>
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
                    <th>Nama Barang</th>
                    <th>Harga</th>
                    <th>Photo</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {barang?.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <p>{item.nama}</p>
                      </td>
                      <td>
                        <p>{item.harga}</p>
                      </td>
                      <td>
                        <img src={item.file_name} alt="text" />
                      </td>
                      <td>
                        <Button className="btn">
                          <a href={`/barang/delete/${item.id}`}>
                            <MdDelete />
                          </a>
                        </Button>
                        <Button className="btn">
                          <a href={`/barang/${item.id}`}>
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

export default Barang;
