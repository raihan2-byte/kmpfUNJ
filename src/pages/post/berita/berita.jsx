import React from "react";
import "./berita.scss";
import { TrixEditor } from "react-trix";
import API from "../../../api/API";
import SweatAlert from "../../../sweetaleet/SweetAlert";

const Berita = () => {
  const [judul, setJudul] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [files, setFiles] = React.useState([]);
  const [tags, setTags] = React.useState("");
  const [karya, setKarya] = React.useState("");

  const changeHandler = (e) => {
    const newFiles = [...e.target.files];
    setFiles([...files, ...newFiles]);
  };

  const handleEditorReady = (editor) => {
    // this is a reference back to the editor if you want to
    // do editing programatically
  };

  const handleChange = (html, text) => {
    // html is the new html content
    // text is the new text content
    setMessage(html);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a FormData object to store your form data, including files
    const formData = new FormData();

    // Append each file to the FormData with keys like 'file1', 'file2', etc.
    files.forEach((file, index) => {
      formData.append(`file${index + 1}`, file);
    });

    // Append other form data fields
    formData.append("judul", judul);
    formData.append("message", message);
    formData.append("tags_id", tags);
    formData.append("karya_id", karya);

    // Make an Axios POST request
    try {
      const response = await API.post("/berita/", formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "multipart/form-data",
        },
      });

      console.log(response.data);
      SweatAlert("Berhasil menambahkan data", "success");
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      alert(message);
    }
  };

  return (
    <div className="berita-admin">
      <h1>Create Berita</h1>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="content">
          <div className="input-field">
            <input
              type="text"
              onChange={(e) => setJudul(e.target.value)}
              placeholder="judul"
              autoComplete="off"
            />
          </div>
          <div className="input-field">
            <input type="file" onChange={changeHandler} />
          </div>
          <div className="input-field">
            <input type="file" onChange={changeHandler} />
          </div>
          <div className="input-field">
            <input type="file" onChange={changeHandler} />
          </div>
          <div className="input-field">
            <input type="file" onChange={changeHandler} />
          </div>
          <div className="input-field">
            <input type="file" onChange={changeHandler} />
          </div>
          <div className="input-field">
            <label for="tags">Tags:</label>
            <select id="tags" onChange={(e) => setTags(e.target.value)}>
              <option value="">Pilih Tags</option>
              <option value="1">Karya Jurnalis</option>
              <option value="2">Karya Salon</option>
              <option value="3">Karya Alternatif</option>
              <option value="4">Proker</option>
              <option value="5">Artikel</option>
            </select>
          </div>
          <div className="input-field">
            <label for="karya">Karya:</label>
            <select
              id="karya"
              onChange={(e) => setKarya(e.target.value)}
              // disabled={tags === "4" || tags === "5"}
            >
              <option value="">Pilih Karya</option>
              <option value="1">Jurnalistik</option>
              <option value="2">Salon</option>
              <option value="3">Alternatif</option>
              <option value="4">proker</option>
              <option value="5">artikel</option>
            </select>
          </div>
          <div className="input-field">
            <TrixEditor
              className="custom-css-class"
              placeholder="deskripsi"
              onChange={handleChange}
              onEditorReady={handleEditorReady}
            />
          </div>
        </div>
        <div className="action">
          <button type="submit">Create</button>
        </div>
      </form>
    </div>
  );
};

export default Berita;
