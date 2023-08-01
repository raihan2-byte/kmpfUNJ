import React from "react";
import "./barang.scss";

const barang = () => {
  return (
    <div className="barang-admin">
      <h1>Create Barang</h1>
      <form>
        <div class="content">
          <div class="input-field">
            <input type="nama" placeholder="nama" autocomplete="nope" />
          </div>
          <div class="input-field">
            <input type="harga" placeholder="harga" autocomplete="new-deskripsi" />
          </div>
          <div class="input-field">
            <input type="file" placeholder="file" autocomplete="nope" />
          </div>
          <div class="input-field">
            <label for="category">Category:</label>
            <select id="category">
              <option value="1">Category 1</option>
              <option value="2">Category 2</option>
              <option value="3">Category 3</option>
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

export default barang;
