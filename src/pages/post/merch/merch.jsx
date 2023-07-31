import React from "react";
import "./merch.scss";
import API from "../../../api/API";

const Merch = () => {
  const [nama, setNama] = React.useState("");
  const [harga, setHarga] = React.useState("");
  const [file, setFile] = React.useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = { nama, harga, file };
    await API.post("/merch/", user).catch((error) => {
      // console.log("error->" + error);
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      alert(message);
    });
  };
  return (
    <div className="merch-admin">
      <h1>Create Merch</h1>
      <form onSubmit={handleSubmit}>
        <div class="content">
          <div class="input-field">
            <input
              type="Nama"
              onChange={(e) => setNama(e.target.value)}
              placeholder="Nama"
              autocomplete="nope"
            />
          </div>
          <div class="input-field">
            <input
              type="Harga"
              onChange={(e) => setHarga(e.target.value)}
              placeholder="Harga"
              autocomplete="new-deskripsi"
            />
          </div>
          <div class="input-field">
            <input
              type="file"
              onChange={(e) => setFile(e.target.value)}
              placeholder="file"
              autocomplete="nope"
            />
          </div>
          {/* <a href="/login" class="link">
            Forgot Your Password?
          </a> */}
        </div>
        <div class="action">
          <button>Create</button>
        </div>
      </form>
    </div>
  );
};

export default Merch;
