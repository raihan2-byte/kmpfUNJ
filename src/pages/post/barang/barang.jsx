import React from "react";
import "./barang.scss";
import SweatAlert from "../../../sweetaleet/SweetAlert";
import API from "../../../api/API";

const Barang = () => {
  const [nama_paket, setNamaPaket] = React.useState("");
  const [nama, setNama] = React.useState("");
  const [harga_awal, setHargaAwal] = React.useState("");
  const [hargaa, setHargaa] = React.useState("");
  const [diskon, setDiskon] = React.useState("");
  const [file, setFile] = React.useState("");
  const [category, setCategory] = React.useState("");

  const changeHandler = (e) => {
    const file = e.target.files[0];
    setFile(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const barang = {
      nama_paket: nama_paket,
      nama: nama,
      harga_awal: harga_awal,
      harga: parseInt(hargaa),
      discount: diskon,
      file: file,
      categoryID: parseInt(category),
    };
    await API.post("barang/", barang, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "multipart/form-data",
      },
    })
      .then((response) => {
        console.log(response.data);
        SweatAlert("Berhasil menambahkan data", "success");
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
  return (
    <div className="barang-admin">
      <h1>Create Barang</h1>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div class="content">
          <div class="input-field">
            <input
              type="nama-paket"
              onChange={(e) => setNamaPaket(e.target.value)}
              placeholder="nama paket"
              autocomplete="nope"
            />
          </div>
          <div class="input-field">
            <input
              type="nama"
              onChange={(e) => setNama(e.target.value)}
              placeholder="nama"
              autocomplete="nope"
            />
          </div>
          <div class="input-field">
            <input
              type="diskon"
              onChange={(e) => setDiskon(e.target.value)}
              placeholder="diskon"
              autocomplete="new-deskripsi"
            />
          </div>
          <div class="input-field">
            <input
              type="harga-awal"
              onChange={(e) => setHargaAwal(e.target.value)}
              placeholder="harga awal"
              autocomplete="new-deskripsi"
            />
          </div>
          <div class="input-field">
            <input
              type="harga"
              onChange={(e) => setHargaa(e.target.value)}
              placeholder="harga"
              autocomplete="new-deskripsi"
            />
          </div>

          <div class="input-field">
            <input
              type="file"
              onChange={changeHandler}
              placeholder="file"
              autocomplete="nope"
            />
          </div>
          <div class="input-field">
            <label for="category">Category:</label>
            <select id="category" onChange={(e) => setCategory(e.target.value)}>
              <option value="">Pilih Category</option>
              <option value="1">Promo</option>
              <option value="2">Camera & Lens</option>
              <option value="3">Equipment & Accesories</option>
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
