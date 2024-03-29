import React from "react";
import "./phototalk.scss";
import API from "../../../api/API";
import "trix/dist/trix.js";
import "trix/dist/trix.css";
import { TrixEditor } from "react-trix";
import SweatAlert from "../../../sweetaleet/SweetAlert";

const Phototalk = () => {
  const [judul, setJudul] = React.useState("");
  const [deskripsi, setDeskripsi] = React.useState("");
  const [link, setLink] = React.useState("");
  const [file, setFile] = React.useState(null);

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
    setDeskripsi(html);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const phototalk = { judul, deskripsi, link, file };
    await API.post("phototalk/", phototalk, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        Accept: "application/json",
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
    <div className="phototalk-admin">
      <h1>Create Phototalk</h1>
      <form onSubmit={handleSubmit}>
        <div class="content">
          <div class="input-field">
            <input
              type="judul"
              onChange={(e) => setJudul(e.target.value)}
              placeholder="judul"
              autocomplete="nope"
            />
          </div>

          <div className="input-field">
            <TrixEditor
              className="custom-css-class"
              placeholder="deskripsi"
              onChange={handleChange}
              onEditorReady={handleEditorReady}
            />
          </div>
          <div class="input-field">
            <input
              type="link"
              onChange={(e) => setLink(e.target.value)}
              placeholder="link"
              autocomplete="new-link"
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

export default Phototalk;
