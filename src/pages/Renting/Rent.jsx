import React, { useEffect, useState } from "react";
import "./Rent.scss";
import Button from "../../components/button/Button";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import API from "../../api/API";

import { CiGlobe } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineTouchApp } from "react-icons/md";
import { FaPeopleCarry, FaMoneyCheckAlt } from "react-icons/fa";
import { TfiPencilAlt } from "react-icons/tfi";

const Rent = () => {
  const [rent, setRent] = React.useState([]);
  console.log(rent);
  const getAllRent = async () => {
    await API.get("/barang/")
      .then((response) => {
        setRent(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  React.useEffect(() => {
    getAllRent();
  }, []);

  const rentFiltered = rent.filter((item) => item.category_id === 1);

  function formatRupiah(number) {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  }

  const calculateItemsToDisplay = () => {
    if (window.innerWidth >= 600) {
      // Lebar layar lebih besar atau sama dengan 600px, tampilkan 3 item
      return 3;
    } else {
      // Lebar layar kurang dari 600px, tampilkan 2 item
      return 2;
    }
  };

  const [itemsToDisplay, setItemsToDisplay] = useState(
    calculateItemsToDisplay()
  );

  // Membuat event listener untuk mengubah jumlah item saat ukuran layar berubah
  useEffect(() => {
    const handleResize = () => {
      setItemsToDisplay(calculateItemsToDisplay());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Navbar />
      <div className="rent-parent">
        <div className="how-to-rent">
          <h3>How To Rent</h3>
          <div className="how-to">
            <div
              style={{ display: "flex", alignItems: "center" }}
              className="text"
            >
              <span
                style={{
                  fontSize: "45px",
                  marginRight: "5px",
                  // border: "2px solid #505050",
                  // borderRadius: "20%",
                }}
              >
                <CiGlobe style={{ padding: "5px" }} className="icon" />
              </span>
              Mengunjungi situs web kami dan cari alat yang ingin di sewa
            </div>

            <div
              className="text"
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  fontSize: "45px",
                  marginRight: "5px",
                  // border: "2px solid #505050",
                  // borderRadius: "20%",
                }}
              >
                <FiPhoneCall style={{ padding: "5px" }} className="icon" />
              </span>
              Setelah menemukan alat yang diinginkan, klik tombol "Book Now".
              Anda akan diarahkan ke WhatsApp kami secara otomatis.
            </div>
            <div
              className="text"
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  fontSize: "45px",
                  marginRight: "5px",
                  // border: "2px solid #505050",
                  // borderRadius: "20%",
                }}
              >
                <MdOutlineTouchApp
                  style={{ padding: "5px" }}
                  className="icon"
                />
              </span>
              Menetapkan barang peminjaman dan tanggal pengambilan atau
              pengembalian barang.
            </div>

            <div
              style={{ display: "flex", alignItems: "center" }}
              className="text"
            >
              <span
                style={{
                  fontSize: "45px",
                  marginRight: "5px",
                  // border: "2px solid #505050",
                  // borderRadius: "20%",
                }}
              >
                <FaPeopleCarry style={{ padding: "5px" }} className="icon" />
                {/* <LiaPeopleCarrySolid style={{ padding: "5px" }} /> */}
              </span>
              Pengembalian barang dan penyerahan jaminan berupa kartu identitas
              diri (KTP, SIM, atau KTA)
            </div>
            <div
              style={{ display: "flex", alignItems: "center" }}
              className="text"
            >
              <span
                style={{
                  fontSize: "45px",
                  marginRight: "5px",
                  // border: "2px solid #505050",
                  // borderRadius: "20%",
                }}
              >
                <FaMoneyCheckAlt style={{ padding: "5px" }} className="icon" />
                {/* <LiaPeopleCarrySolid style={{ padding: "5px" }} /> */}
              </span>
              Melakukan pembayaran melalui dompet digital yang tersedia
            </div>
            <div
              style={{ display: "flex", alignItems: "center" }}
              className="text"
            >
              <span
                style={{
                  fontSize: "45px",
                  marginRight: "5px",
                  // border: "2px solid #505050",
                  // borderRadius: "20%",
                }}
              >
                <TfiPencilAlt style={{ padding: "5px" }} className="icon" />
                {/* <LiaPeopleCarrySolid style={{ padding: "5px" }} /> */}
              </span>
              Pihak peminjaman membuat invoice kepada peminjam
            </div>
          </div>
        </div>
        <div className="promotion">
          <h3>Promo!</h3>
          <div className="promotion-child">
            {rentFiltered.slice(0, itemsToDisplay).map((item) => (
              <div className="Kamera-2">
                <div className="diskon">{item.discount}%</div>
                <a href={`/barang/${item.id}`}>
                  <div className="Kamera-2-child">
                    <img src={item.file_name} alt="kamera2" />
                  </div>
                  <div className="rent-nama-paket">{item.nama_paket}</div>
                  <div className="rent-nama">{item.nama}</div>
                  <div className="harga">
                    <div className="price-awal">
                      {formatRupiah(item.harga_awal)}
                    </div>
                    <div className="price-asli">{formatRupiah(item.harga)}</div>
                  </div>
                  <a href="https://wa.link/luxtrv">
                    <Button className="btn">Book Now</Button>
                  </a>
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="exhibition">
          <h3>Camera & Lens</h3>
          <div className="promotion-child">
            {rent
              .filter((item) => item.category_id === 2)
              .map((item) => (
                <div className="Kamera-2">
                  <a href={`/barang/${item.id}`}>
                    <div className="Kamera-2-child">
                      <img src={item.file_name} alt="kamera2" />
                    </div>
                    <div className="rent-nama">{item.nama}</div>
                    <div className="harga">
                      <div className="price-asli">
                        {" "}
                        {formatRupiah(item.harga)}
                      </div>
                    </div>
                    <a href="https://wa.link/d0j6az">
                      <Button className="btn">Book Now</Button>
                    </a>
                  </a>
                </div>
              ))}
          </div>
        </div>
        <div className="equipment-accesories">
          <h3>Equipment & Accesories</h3>
          <div className="promotion-child">
            {rent
              .filter((item) => item.category_id === 3)
              .map((item) => (
                <div className="Kamera-2">
                  <a href={`/barang/${item.id}`}>
                    <div className="Kamera-2-child">
                      <img src={item.file_name} alt="kamera2" />
                    </div>
                    <div className="rent-nama">{item.nama}</div>
                    <div className="harga">
                      <div className="price-asli">
                        {formatRupiah(item.harga)}
                      </div>
                    </div>
                    <a href="https://wa.link/luxtrv">
                      <Button className="btn">Book Now</Button>
                    </a>
                  </a>
                </div>
              ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Rent;
