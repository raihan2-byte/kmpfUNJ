import React from "react";
import "./artikel.scss";
import API from "../../../api/API";

const Artikel = () => {
  const [judul, setJudul] = React.useState("");
  const [deskripsi, setDeskripsi] = React.useState("");
  const [file, setFile] = React.useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = { judul, deskripsi, file };
    await API.post("/phototalk/", user).catch((error) => {
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
    <div className="artikel-admin">
      <h1>Create Artikel</h1>
      <form onSubmit={handleSubmit}>
        <div class="content">
          <div class="input-field">
            <input
              type="Judul"
              onChange={(e) => setJudul(e.target.value)}
              placeholder="judul"
              autocomplete="nope"
            />
          </div>
          <div class="input-field">
            <input
              type="Message"
              onChange={(e) => setDeskripsi(e.target.value)}
              placeholder="deskripsi"
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

export default Artikel;
