import React from "react";
import "./artikel.scss";
import API from "../../../api/API";
import { TrixEditor } from "react-trix";

const Artikel = () => {
  const [judul, setJudul] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [file, setFile] = React.useState(null);
  const handleEditorReady = (editor) => {};
  const handleChange = (html, text) => {
    setMessage(text);
  };
  const changeHandler = (e) => {
    const file = e.target.files[0];
    setFile(file.name);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const artikel = { judul, message, file };
    await API.post("/artikel/", artikel, { headers: { Authorization: `Bearer ${localStorage.getItem("token")}`, Accept: "application/json" } })
      .then((response) => {
        console.log(response);
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
