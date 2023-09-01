import React from "react";
import Button from "../../../components/button/Button";
import Sidebar from "../../../components/sidebar/Sidebar";
import SweatAlert from "../../../sweetaleet/SweetAlert";
import API from "../../../api/API";

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
  return (
    <div>
      <Sidebar />

      <section id="content">
        <main>
          <div class="head-title">
            <div class="left">
              <h1>Admin</h1>
              <ul class="breadcrumb">
                <li>Merch</li>
                <li>
                  <i class="bx bx-chevron-right"></i>
                </li>
                <li>
                  <a class="active" href="/">
                    Home
                  </a>
                </li>
                <li>
                  <Button
                    onClick={() => (window.location.href = "/create-merch")}
                  >
                    Create
                  </Button>
                </li>
              </ul>
            </div>
          </div>
          <div class="table-data">
            <div class="order">
              <div class="head">
                <h3>List Merch</h3>
                <i class="bx bx-search"></i>
                <i class="bx bx-filter"></i>
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
                        <Button>Create</Button>
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

export default Merch;
