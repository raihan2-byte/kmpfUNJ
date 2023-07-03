import React from "react";

import { Route, Routes as Switch } from "react-router-dom";
import Home from "../pages/home/Home";
import Kelas from "../pages/kelas/kelas";
import Product from "../pages/product/product";
import Berita from "../pages/berita/berita";
import Rent from "../pages/Renting/Rent";
import UploadFoto from "../pages/upload-foto/uploadfoto";
import Dashboard from "../components/admin/dashboard/dashboard";
import BeritaAdmin from "../components/admin/beritaAdmin/berita";
import BarangAdmin from "../components/admin/barangAdmin/barang";
import PhotoTalkAdmin from "../components/admin/photoTalk-admin/phototalk";
import KmpfAdmin from "../components/admin/kmpfAdmin/kmpf";
import MerchAdmin from "../components/admin/merchAdmin/merch";

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
    </Switch>
  );
};

export default Routes;
