import React from "react";
import Button from "../../../components/button/Button";
import Sidebar from "../../../components/sidebar/Sidebar";
import SweatAlert from "../../../sweetaleet/SweetAlert";
import API from "../../../api/API";
import { MdDelete } from "react-icons/md";
import { AiFillEye } from "react-icons/ai";

const Merch = () => {
  const [merch, setMerch] = React.useState([]);
  console.log(merch);
  const getAllMerch = async () => {
    await API.get("/merch/")
      .then((response) => {
        setMerch(response.data.data);
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
    getAllMerch();
  }, []);

  const handleDeleteMerch = async (id) => {
    try {
      // Panggil endpoint API untuk menghapus berita berdasarkan id
      await API.delete(`/merch/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "multipart/form-data",
        },
      }).then((response) => {
        console.log(response.data);
        SweatAlert("Berhasil Menghapus data", "success");
      });
      // Setelah penghapusan berhasil, perbarui daftar berita
      getAllMerch();
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
            <h2>Merch</h2>
          </div>
        </div>
        <div className="kontent">
          <div className="list">
            <h4>List Merch</h4>
            <a href="/create-berita">
              <Button className="btn-create">Create Merch</Button>
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
                    <th>Nama</th>
                    <th>Price</th>
                    <th>Photo</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {merch?.map((item) => (
                    <tr key={item.ID}>
                      <td>
                        <p>{item.Name}</p>
                      </td>
                      <td>
                        <p>100.000</p>
                      </td>
                      <td>
                        <img src={item.FileName} alt="text" />
                      </td>
                      <td>
                        <Button
                          className="btn"
                          onClick={() => handleDeleteMerch(item.ID)}
                        >
                          <MdDelete />
                        </Button>
                        <a href={`/merch/#merch-produk`}>
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

export default Merch;
