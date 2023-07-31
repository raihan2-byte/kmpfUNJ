import React from "react";
import "./berita.scss";

const berita = () => {
  return (
    <div className="berita-admin">
      <h1>Create Berita</h1>
      <form>
        <div class="content">
          <div class="input-field">
            <input type="nama" placeholder="judul" autocomplete="nope" />
          </div>
          <div class="input-field">
            <input
              type="harga"
              placeholder="deskripsi"
              autocomplete="new-deskripsi"
            />
          </div>
          <div class="input-field">
            <input type="file" placeholder="file" autocomplete="nope" />
          </div>
          <div class="input-field">
            <label for="category">Tags:</label>
            <select id="category">
              <option value="1">Proker</option>
              <option value="2">Karya</option>
              {/* <option value="3">Category 3</option> */}
            </select>
          </div>
          <div class="input-field">
            <label for="category">Karya:</label>
            <select id="category">
              <option value="1">Promotion</option>
              <option value="2">Equipment & Accesories 2</option>
              <option value="3">Karya</option>
            </select>
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

export default berita;
