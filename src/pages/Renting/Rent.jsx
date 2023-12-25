import React from "react";
import "./Rent.scss";
import Button from "../../components/button/Button";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import API from "../../api/API";

import { CiGlobe } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineTouchApp, MdOutlineNavigateNext } from "react-icons/md";
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

  // Membuat event listener untuk mengubah jumlah item saat ukuran layar berubah

  return (
    <>
      <div className="rent-parent">
        <Navbar />
        <div className="how-to-rent">
          <h3>How To Rent</h3>
          <div className="how-to">
            <div style={{ display: "flex" }} className="text">
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
              <span className="nomor">1</span>
              Silahkan kunjungi situs web kami untuk menemukan alat-alat yang
              kami tawarkan.
            </div>

            <div
              className="text"
              style={{
                display: "flex",
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
              <span className="nomor">2</span>
              Setelah menemukan alat yang diinginkan, klik tombol "Book Now".
              Anda akan diarahkan ke WhatsApp kami.
            </div>
            <div
              className="text"
              style={{
                display: "flex",
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
              <span className="nomor">3</span>
              Menetapkan barang peminjaman dan tanggal pengambilan atau
              pengembalian barang.
            </div>

            <div style={{ display: "flex" }} className="text">
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
              <span className="nomor">4</span>
              Pengembalian barang dan penyerahan jaminan berupa kartu identitas
              diri (KTP, SIM, atau KTA)
            </div>
            <div style={{ display: "flex" }} className="text">
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
              <span className="nomor">5</span>
              Melakukan pembayaran melalui dompet digital yang tersedia
            </div>
            <div style={{ display: "flex" }} className="text">
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
              <span className="nomor">6</span>
              Pihak peminjaman membuat invoice kepada peminjam
            </div>
          </div>
        </div>
        <div className="promotion">
          <h3>Promo!</h3>
          <div className="promotion-child">
            {rentFiltered.slice(0, 3).map((item) => (
              <div className="Kamera-2">
                <div className="diskon">{item.discount}%</div>
                {/* <a href={`/barang/${item.id}`}> */}
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
                  <Button className="btn" style={{}}>
                    {" "}
                    Book Now
                    <MdOutlineNavigateNext
                      style={{
                        fontSize: "15px",
                        backgroundColor: "#EAEAEA",
                        borderRadius: "50%",
                        marginLeft: "5px",
                      }}
                    />
                  </Button>
                </a>
                {/* </a> */}
              </div>
            ))}
          </div>
        </div>
        <div className="exhibition">
          <h3>Camera & Lens</h3>
          <h4 style={{ color: "red" }}>*For Internal Only</h4>
          <div className="promotion-child">
            {rent
              .filter((item) => item.category_id === 2)
              .map((item) => (
                <div className="Kamera-2">
                  {/* <a href={`/barang/${item.id}`}> */}
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
                    <Button className="btn" style={{}}>
                      {" "}
                      Book Now
                      <MdOutlineNavigateNext
                        style={{
                          fontSize: "15px",
                          backgroundColor: "#EAEAEA",
                          borderRadius: "50%",
                          marginLeft: "5px",
                        }}
                      />
                    </Button>
                  </a>
                  {/* </a> */}
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
                  {/* <a href={`/barang/${item.id}`}> */}
                  <div className="Kamera-2-child">
                    <img src={item.file_name} alt="kamera2" />
                  </div>
                  <div className="rent-nama">{item.nama}</div>
                  <div className="harga">
                    <div className="price-asli">{formatRupiah(item.harga)}</div>
                  </div>
                  <a href="https://wa.link/luxtrv">
                    <Button className="btn" style={{}}>
                      {" "}
                      Book Now
                      <MdOutlineNavigateNext
                        style={{
                          fontSize: "15px",
                          backgroundColor: "#EAEAEA",
                          borderRadius: "50%",
                          marginLeft: "5px",
                        }}
                      />
                    </Button>
                  </a>
                  {/* </a> */}
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
