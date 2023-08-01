import React from "react";
import "./berita.scss";
import { TrixEditor } from "react-trix";
import API from "../../../api/API";

const Berita = () => {
  const [judul, setJudul] = React.useState("");
  const [deskripsi, setDeskripsi] = React.useState("");
  const [file, setFile] = React.useState("");
  const changeHandler = (e) => {
    const file = e.target.files[0];
    setFile(file);
  };
  const handleEditorReady = (editor) => {
    // this is a reference back to the editor if you want to
    // do editing programatically
  };
  const handleChange = (html, text) => {
    // html is the new html content
    // text is the new text content
    setDeskripsi(text);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = { judul, deskripsi, file };
    await API.post("/berita/", user, { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } })
      .then((response) => {
        alert();
      })
      .catch((error) => {
        // console.log("error->" + error);
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        alert(message);
      });
  };
  return (
    <div className="berita-admin">
      <h1>Create Berita</h1>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div class="content">
          <div class="input-field">
            <input type="nama" onChange={(e) => setJudul(e.target.value)} placeholder="judul" autocomplete="nope" />
          </div>
          <div class="input-field">
            <input type="file" onChange={changeHandler} placeholder="file" autocomplete="nope" />
          </div>
          <div class="input-field">
            <label for="category">Tags:</label>
            <select id="category" onChange={""}>
              <option value="1">Proker</option>
              <option value="2">Karya</option>
            </select>
          </div>
          <div class="input-field">
            <label for="category">Karya:</label>
            <select id="category" onChange={""}>
              <option value="1">Promotion</option>
              <option value="2">Equipment & Accesories 2</option>
              <option value="3">Karya</option>
            </select>
          </div>
          <div className="input-field">
            <TrixEditor className="custom-css-class" placeholder="deskripsi" onChange={handleChange} onEditorReady={handleEditorReady} />
          </div>
        </div>
        <div class="action">
          <button>Create</button>
        </div>
      </form>
    </div>
  );
};

export default Berita;
