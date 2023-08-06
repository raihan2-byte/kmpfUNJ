import React from "react";
import "./berita.scss";
import { TrixEditor } from "react-trix";
import API from "../../../api/API";
import SweatAlert from "../../../sweetaleet/SweetAlert";

const Berita = () => {
  const [judul, setJudul] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [file, setFile] = React.useState("");
  const [tags, setTags] = React.useState("");
  const [karya, setKarya] = React.useState("");

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
    setMessage(text);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const beritaa = { judul, berita_message: message, file_name: file, tags_id: parseInt(tags), karya_news_id: parseInt(karya) };
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
            <select id="category" onChange={(e) => setTags(e.target.value)}>
              <option>Tags</option>
              <option value="1">Karya</option>
              <option value="2">Proker</option>
            </select>
          </div>
          <div class="input-field">
            <label for="category">Karya:</label>
            <select id="category" onChange={(e) => setKarya(e.target.value)} disabled={tags === "2" ? true : false}>
              <option>Karya</option>
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
