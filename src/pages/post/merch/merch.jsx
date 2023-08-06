import React from "react";
import "./merch.scss";
import API from "../../../api/API";

const Merch = () => {
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [file, setFile] = React.useState(null);

  const changeHandler = (e) => {
    const file = e.target.files[0];
    setFile(file);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const merch = { name, price, file };
    await API.post("merch/", merch, {
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
    <div className="merch-admin">
      <h1>Create Merch</h1>
      <form onSubmit={handleSubmit}>
        <div class="content">
          <div class="input-field">
            <input
              type="Nama"
              onChange={(e) => setName(e.target.value)}
              placeholder="Nama"
              autocomplete="nope"
            />
          </div>
          <div class="input-field">
            <input
              type="Harga"
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Harga"
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

export default Merch;
