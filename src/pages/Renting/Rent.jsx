import React from "react";
import "./Rent.scss";
import Button from "../../components/button/Button";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import API from "../../api/API";
import { CiGlobe } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import { TbHandFinger } from "react-icons/tb";
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
                  fontSize: "50px",
                  marginRight: "10px",
                  // border: "2px solid #505050",
                  // borderRadius: "20%",
                }}
              >
                <CiGlobe style={{ padding: "8px" }} />
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
                  fontSize: "50px",
                  marginRight: "10px",
                  // border: "2px solid #505050",
                  // borderRadius: "20%",
                }}
              >
                <FiPhoneCall style={{ padding: "8px" }} />
              </span>
              Setelah menemukan alat yang diinginkan, klik tombol "Book Now".
              Anda akan diarahkan ke WhatsApp kami secara otomatis lorem.
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
                  fontSize: "50px",
                  marginRight: "10px",
                  // border: "2px solid #505050",
                  // borderRadius: "20%",
                }}
              >
                <TbHandFinger style={{ padding: "8px" }} />
              </span>
              <p>
                Menetapkan barang peminjaman dan tanggal
                pengambilan/pengembalian barang.
              </p>
            </div>
            {/* <div
              className="text"
              style={{
                display: "flex",
                alignItems: "center",
                padding: "30px !important",
              }}
            >
              <span
                style={{
                  fontSize: "50px",
                  marginRight: "10px",
                  // border: "2px solid #505050",
                  // borderRadius: "20%",
                }}
              >
                <TbHandFinger style={{ padding: "8px " }} />
              </span>
              Menetapkan barang peminjaman dan tanggal pengambilan/pengembalian
              barang
            </div> */}

            <div
              style={{ display: "flex", alignItems: "center" }}
              className="text"
            >
              <span
                style={{
                  fontSize: "50px",
                  marginRight: "10px",
                  // border: "2px solid #505050",
                  // borderRadius: "20%",
                }}
              >
                <FaPeopleCarry style={{ padding: "8px" }} />
                {/* <LiaPeopleCarrySolid style={{ padding: "8px" }} /> */}
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
                  fontSize: "50px",
                  marginRight: "10px",
                  // border: "2px solid #505050",
                  // borderRadius: "20%",
                }}
              >
                <FaMoneyCheckAlt style={{ padding: "8px" }} />
                {/* <LiaPeopleCarrySolid style={{ padding: "8px" }} /> */}
              </span>
              Melakukan pembayaran melalui dompet digital yang tersedia
            </div>
            <div
              style={{ display: "flex", alignItems: "center" }}
              className="text"
            >
              <span
                style={{
                  fontSize: "50px",
                  marginRight: "10px",
                  // border: "2px solid #505050",
                  // borderRadius: "20%",
                }}
              >
                <TfiPencilAlt style={{ padding: "8px" }} />
                {/* <LiaPeopleCarrySolid style={{ padding: "8px" }} /> */}
              </span>
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
                <a href={`/barang/${item.id}`}>
                  <div className="Kamera-2-child">
                    <img src={item.file_name} alt="kamera2" />
                  </div>
                  <div className="rent-nama-paket">{item.nama_paket}</div>
                  <div className="rent-nama">{item.nama}</div>
                  <div className="harga">
                    <div className="price-awal">RP {item.harga_awal}</div>
                    <div className="price-asli">Rp {item.harga}</div>
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
                      <div className="price-asli">Rp {item.harga}</div>
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
                      <div className="price-asli">Rp {item.harga}</div>
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
