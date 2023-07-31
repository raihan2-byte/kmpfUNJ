import React from "react";

import { Route, Routes as Switch } from "react-router-dom";
import Home from "../pages/home/Home";
import Kelas from "../pages/kelas/kelas";
import Product from "../pages/product/product";
import Berita from "../pages/berita/berita";
import Rent from "../pages/Renting/Rent";
import UploadFoto from "../pages/upload-foto/uploadfoto";
import Spesifik from "../components/spesifikbarang/spesifikbarang";
import Dashboard from "../pages/admin/dashboard/dashboard";
import BeritaAdmin from "../pages/admin/beritaAdmin/berita";
import BarangAdmin from "../pages/admin/barangAdmin/barang";
import PhotoTalkAdmin from "../pages/admin/photoTalk-admin/phototalk";
import KmpfAdmin from "../pages/admin/kmpfAdmin/kmpf";
import MerchAdmin from "../pages/admin/merchAdmin/merch";
import Login from "../components/login/login";
import Aboutus from "../pages/aboutus/aboutus";
import Producservice from "../pages/productservice/producservice";
import Newskonten from "../components/newskonten/newskonten";
import Artikel from "../pages/artikel/artikel";
import Phototalk from "../pages/phototalk/phototalk";
import ShortVideo from "../components/shortvideo/shortvideo";
import CreatePhotoTalk from "../pages/post/phototalk/phototalk";
import CreateShortVideo from "../pages/post/shortvideo/shortvideo";
import CreateBarang from "../pages/post/barang/barang";
import CreateBerita from "../pages/post/berita/berita";
import CreateArtikel from "../pages/post/artikel/artikel";
import CreateMerch from "../pages/post/merch/merch";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" element={<Home />} />
      <Route path="/kelas" element={<Kelas />} />
      <Route path="/product" element={<Product />} />
      <Route path="/berita" element={<Berita />} />
      <Route path="/rent" element={<Rent />} />
      <Route path="/upload-foto" element={<UploadFoto />} />
      <Route path="/admin" element={<Dashboard />} />
      <Route path="/berita-admin" element={<BeritaAdmin />} />
      <Route path="/barang-admin" element={<BarangAdmin />} />
      <Route path="/phototalk-admin" element={<PhotoTalkAdmin />} />
      <Route path="/kmpf-admin" element={<KmpfAdmin />} />
      <Route path="/merch-admin" element={<MerchAdmin />} />
      <Route path="/login" element={<Login />} />
      <Route path="/spesifik" element={<Spesifik />} />
      <Route path="/aboutus" element={<Aboutus />} />
      <Route path="/productservice" element={<Producservice />} />
      <Route path="/news-konten" element={<Newskonten />} />
      <Route path="/artikel" element={<Artikel />} />
      <Route path="/phototalk" element={<Phototalk />} />
      <Route path="/short-video" element={<ShortVideo />} />
      <Route path="/create-phototalk" element={<CreatePhotoTalk />} />
      <Route path="/create-short-video" element={<CreateShortVideo />} />
      <Route path="/create-barang" element={<CreateBarang />} />
      <Route path="/create-berita" element={<CreateBerita />} />
      <Route path="/create-artikel" element={<CreateArtikel />} />
      <Route path="/create-merch" element={<CreateMerch />} />
    </Switch>
  );
};

export default Routes;
