import React from "react";
import "./barang.scss";
import SweatAlert from "../../../sweetaleet/SweetAlert";
import API from "../../../api/API";

const Barang = () => {
  const [nama, setNama] = React.useState("");
  const [hargaa, setHargaa] = React.useState("");
  const [file, setFile] = React.useState("");
  const [category, setCategory] = React.useState("");

  const changeHandler = (e) => {
    const file = e.target.files[0];
    setFile(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const beritaa = { nama, harga: parseInt(hargaa), file_name: file, category_id: parseInt(category) };
    await API.post("/berita/", beritaa, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}`, "Content-Type": "multipart/form-data" },
    })
      .then((response) => {
        console.log(response.data);
        SweatAlert("Berhasil menambahkan data", "success");
      })
      .catch((error) => {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        SweatAlert(message, "warning");
      });
  };
  return (
    <div className="barang-admin">
      <h1>Create Barang</h1>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div class="content">
          <div class="input-field">
            <input type="nama" onChange={(e) => setNama(e.target.value)} placeholder="nama" autocomplete="nope" />
          </div>
          <div class="input-field">
            <input type="harga" onChange={(e) => setHargaa(e.target.value)} placeholder="harga" autocomplete="new-deskripsi" />
          </div>
          <div class="input-field">
            <input type="file" onChange={changeHandler} placeholder="file" autocomplete="nope" />
          </div>
          <div class="input-field">
            <label for="category">Category:</label>
            <select id="category" onChange={(e) => setCategory(e.target.value)}>
              <option value="1">Category 1</option>
              <option value="2">Category 2</option>
              <option value="3">Category 3</option>
            </select>
          </div>
        </div>
        <div class="action">
          <button>Create</button>
        </div>
      </form>
    </div>
  );
};

export default Barang;
