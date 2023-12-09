import React from "react";
import API from "../../../api/API";
import SweatAlert from "../../../sweetaleet/SweetAlert";
import { TrixEditor } from "react-trix";
import "./taglinehome.scss";

const TagLineHome = () => {
  const [Heading, setHeading] = React.useState("");
  const [Text, setText] = React.useState("");

  const handleEditorReady = (editor) => {
    // this is a reference back to the editor if you want to
    // do editing programatically
  };

  const handleChange = (html, text) => {
    // html is the new html content
    // text is the new text content
    setText(html);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const homeTagLine = { Heading, Text };
    await API.post("tagLine/", homeTagLine, {
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
    <div>
      {" "}
      <div className="shortvideo-admin">
        <h1>Create Short Video</h1>
        <form onSubmit={handleSubmit}>
          <div class="content">
            <div class="input-field">
              <input
                type="judul"
                onChange={(e) => setHeading(e.target.value)}
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
          </div>
          <div class="action">
            <button>Create</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TagLineHome;
