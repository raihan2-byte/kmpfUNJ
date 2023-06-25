import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import Kelas from "./pages/kelas/kelas";
import Product from "./pages/product/product";
import Berita from "./pages/berita/berita";
import Rent from "./pages/Renting/Rent";
import UploadFoto from "../src/pages/upload-foto/uploadfoto";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Kelas />
      <Product />
      <Rent />
      <Berita />
      <UploadFoto />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
