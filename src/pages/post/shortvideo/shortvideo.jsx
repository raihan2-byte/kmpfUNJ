import React from "react";
import "./shortvideo.scss";
import API from "../../../api/API";

const Shortvideo = () => {
  const [judul, setJudul] = React.useState("");
  const [deskripsi, setDeskripsi] = React.useState("");
  const [file, setFile] = React.useState(null);
  const [source_link, setLink] = React.useState("");

  const changeHandler = (e) => {
    const file = e.target.files[0];
    setFile(file);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const shortvideo = { judul, deskripsi, file, source_link };
    await API.post("short-video/", shortvideo, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
      },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
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
    <div className="shortvideo-admin">
      <h1>Create Short Video</h1>
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
          <div class="input-field">
            <input
              type="deskripsi"
              onChange={(e) => setDeskripsi(e.target.value)}
              placeholder="deskripsi"
              autocomplete="new-deskripsi"
            />
          </div>
          <div class="input-field">
            <input
              type="source-link"
              onChange={(e) => setLink(e.target.value)}
              placeholder="source link"
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
        </div>
        <div class="action">
          <button>Create</button>
        </div>
      </form>
    </div>
  );
};

export default Shortvideo;
