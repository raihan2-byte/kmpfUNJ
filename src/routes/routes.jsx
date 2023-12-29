import React from "react";

import { Route, Routes as Switch } from "react-router-dom";
import Home from "../pages/home/Home";
import Kelas from "../pages/kelas/kelas";
import Product from "../pages/products/product";
import Berita from "../pages/berita/berita";
import Rent from "../pages/Renting/Rent";
// import UploadFoto from "../pages/upload-foto/uploadfoto";
import Dashboard from "../pages/admin/dashboard/dashboard";
import BeritaAdmin from "../pages/admin/beritaAdmin/berita";
import BarangAdmin from "../pages/admin/barangAdmin/barang";
import PhotoTalkAdmin from "../pages/admin/photoTalk-admin/phototalk";
import KmpfAdmin from "../pages/admin/kmpfAdmin/kmpf";
import MerchAdmin from "../pages/admin/merchAdmin/merch";
import Login from "../components/login/login";
import Aboutus from "../pages/aboutus/aboutus";
// import Producservice from "../pages/productservice/producservice";
import Newskonten from "../components/newskonten/newskonten";
import Artikel from "../pages/artikel/artikel";
import NotFound from "../pages/notFound";
import Phototalk from "../pages/phototalk/phototalk";
import ShortVideo from "../components/shortvideo/shortvideo";
import CreatePhotoTalk from "../pages/post/phototalk/phototalk";
import CreateShortVideo from "../pages/post/shortvideo/shortvideo";
import CreateBarang from "../pages/post/barang/barang";
import CreateBerita from "../pages/post/berita/berita";
import CreateArtikel from "../pages/post/artikel/artikel";
import CreateMerch from "../pages/post/merch/merch";
import CreateTaglineHome from "../pages/post/taglinehome/taglinehome";
import TagLineHome from "../pages/admin/taglinehome/taglinehome";
import ProtectRouter from "../pages/protectRoute/ProtectRouter";
import Merch from "../pages/merch/merch";
// Periksa import default dari file
import Stastics from "../pages/admin/Statistics/statistics"; // Pastikan file tersebut memiliki ekspor default dengan nama 'Statistics'
// import Barang from "../pages/admin/barangAdmin/barang";
const Routes = () => {
  return (
    <Switch>
      <Route path="/" element={<Home />} />
      <Route path="/kelas" element={<Kelas />} />
      <Route path="/productservice" element={<Product />} />
      <Route path="/berita" element={<Berita />} />
      <Route path="/rent" element={<Rent />} />
      {/* <Route path="/upload-foto" element={<UploadFoto />} /> */}
      <Route element={<ProtectRouter />}>
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/berita-admin" element={<BeritaAdmin />} />
        <Route path="/barang-admin" element={<BarangAdmin />} />
        <Route path="/phototalk-admin" element={<PhotoTalkAdmin />} />
        <Route path="/kmpf-admin" element={<KmpfAdmin />} />
        <Route path="/merch-admin" element={<MerchAdmin />} />
        <Route path="/tag-home-admin" element={<TagLineHome />} />
        <Route path="/create-phototalk" element={<CreatePhotoTalk />} />
        <Route path="/create-short-video" element={<CreateShortVideo />} />
        <Route path="/create-barang" element={<CreateBarang />} />
        <Route path="/create-berita" element={<CreateBerita />} />
        <Route path="/create-artikel" element={<CreateArtikel />} />
        <Route path="/create-merch" element={<CreateMerch />} />
        <Route path="/create-tag-home" element={<CreateTaglineHome />} />
        <Route path="/statistics" element={<Stastics />} />

        {/* <Route path="/berita/delete/:id" component={Newskonten} /> */}
      </Route>
      {/* <Route path="/short-video/delete/:id" component={ShortVideo} />
      <Route path="/merch/delete/:id" component={Merch} /> */}

      <Route path="/login" element={<Login />} />
      <Route path="/aboutus" element={<Aboutus />} />
      {/* <Route path="/productservice" element={<Producservice />} /> */}
      <Route path="/berita/:id" element={<Newskonten />} />
      <Route path="/artikel" element={<Artikel />} />
      <Route path="/phototalk" element={<Phototalk />} />
      <Route path="/merch" element={<Merch />} />

      <Route path="/short-video/:id" element={<ShortVideo />} />
      <Route path="*" element={<NotFound />} />
    </Switch>
  );
};

export default Routes;
