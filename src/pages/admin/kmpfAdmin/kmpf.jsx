import React from "react";
import Button from "../../../components/button/Button";
import Sidebar from "../../../components/sidebar/Sidebar";
import { MdDelete } from "react-icons/md";
import { AiFillEye } from "react-icons/ai";
import API from "../../../api/API";
import SweatAlert from "../../../sweetaleet/SweetAlert";

const Kmpf = () => {
  const [shortvideo, setShortVideo] = React.useState([]);
  console.log(shortvideo);
  const getAllShortvideo = async () => {
    await API.get("/short-video/")
      .then((response) => {
        setShortVideo(response.data.data);
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
    getAllShortvideo();
  }, []);
  return (
    <div>
      <Sidebar />
      <div className="parent">
        <div className="top-parent">
          <div className="parent-kontent">
            {" "}
            <h2>Short Video</h2>
          </div>
        </div>
        <div className="kontent">
          <div className="list">
            <h4>List Short Video</h4>
            <a href="/create-berita">
              <Button className="btn-create">Create Short Video</Button>
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
                  {shortvideo?.map((item) => (
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
                        <a href={`/short-video/delete/${item.id}`}>
                          <Button className="btn">
                            <MdDelete />
                          </Button>
                        </a>
                        <a href={`/kelas/#video-reels`}>
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

export default Kmpf;
