import React from "react";
import "./artikel.scss";
import API from "../../../api/API";
import { TrixEditor } from "react-trix";

const Artikel = () => {
  const [judul, setJudul] = React.useState("");
  const [deskripsi, setDeskripsi] = React.useState("");
  const [file, setFile] = React.useState("");
  const handleEditorReady = (editor) => {
    // this is a reference back to the editor if you want to
    // do editing programatically
  };
  const handleChange = (html, text) => {
    // html is the new html content
    // text is the new text content
    setDeskripsi(text);
  };
  const changeHandler = (e) => {
    const file = e.target.files[0];
    setFile(file);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = { judul, deskripsi, file };
    await API.post("/phototalk/", user)
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
    <div className="artikel-admin">
      <h1>Create Artikel</h1>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div class="content">
          <div class="input-field">
            <input type="Judul" onChange={(e) => setJudul(e.target.value)} placeholder="judul" autocomplete="nope" />
          </div>
          <div class="input-field">
            <input type="file" onChange={changeHandler} placeholder="file" autocomplete="nope" />
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

export default Artikel;
