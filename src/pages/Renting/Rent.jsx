import React from "react";
import "./Rent.scss";
import Button from "../../components/button/Button";
import Kamera from "../../components/assets/kamera.JPG";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const Rent = () => {
  return (
    <>
      <Navbar />
      <div className="rent-parent">
        <div className="how-to-rent">
          <h3>How To Rent</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            ea officiis optio iusto voluptates quia expedita repellendus culpa
            explicabo dolorum debitis incidunt, aliquam, accusantium quis quos
            vel ab dignissimos eveniet?
          </p>
        </div>
        <div className="promotion">
          <h3>Promotion!</h3>
          <div className="promotion-child">
            <div className="Kamera-2">
              <div className="Kamera-2-child">
                <img src={Kamera} alt="kamera2" />
              </div>
              <div className="price">IDR 50.000</div>
              <Button onClick="Exhibition-btn">Book Now</Button>
            </div>
            <div className="Kamera-2">
              <div className="Kamera-2-child">
                <img src={Kamera} alt="kamera2" />
              </div>
              <div className="price">IDR 50.000</div>
              <Button onClick="Exhibition-btn">Book Now</Button>
            </div>
            <div className="Kamera-2">
              <div className="Kamera-2-child">
                <img src={Kamera} alt="kamera2" />
              </div>
              <div className="price">IDR 50.000</div>
              <Button onClick="Exhibition-btn">Book Now</Button>
            </div>
            <div className="Kamera-2">
              <div className="Kamera-2-child">
                <img src={Kamera} alt="kamera2" />
              </div>
              <div className="price">IDR 50.000</div>
              <Button onClick="Exhibition-btn">Book Now</Button>
            </div>
          </div>
        </div>
        <div className="exhibition">
          <h3>For Exhibition</h3>
          <div className="promotion-child">
            <div className="Kamera-2">
              <div className="Kamera-2-child">
                <img src={Kamera} alt="kamera2" />
              </div>
              <div className="price">IDR 50.000</div>
              <Button onClick="Exhibition-btn">Book Now</Button>
            </div>
            <div className="Kamera-2">
              <div className="Kamera-2-child">
                <img src={Kamera} alt="kamera2" />
              </div>
              <div className="price">IDR 50.000</div>
              <Button onClick="Exhibition-btn">Book Now</Button>
            </div>
            <div className="Kamera-2">
              <div className="Kamera-2-child">
                <img src={Kamera} alt="kamera2" />
              </div>
              <div className="price">IDR 50.000</div>
              <Button onClick="Exhibition-btn">Book Now</Button>
            </div>
            <div className="Kamera-2">
              <div className="Kamera-2-child">
                <img src={Kamera} alt="kamera2" />
              </div>
              <div className="price">IDR 50.000</div>
              <Button onClick="Exhibition-btn">Book Now</Button>
            </div>
          </div>
        </div>
        <div className="promotion1">
          <h3>Promotion</h3>
          <div className="promotion-child">
            <div className="Kamera-2">
              <div className="Kamera-2-child">
                <img src={Kamera} alt="kamera2" />
              </div>
              <div className="price">IDR 50.000</div>
              <Button onClick="Exhibition-btn">Book Now</Button>
            </div>
            <div className="Kamera-2">
              <div className="Kamera-2-child">
                <img src={Kamera} alt="kamera2" />
              </div>
              <div className="price">IDR 50.000</div>
              <Button onClick="Exhibition-btn">Book Now</Button>
            </div>
            <div className="Kamera-2">
              <div className="Kamera-2-child">
                <img src={Kamera} alt="kamera2" />
              </div>
              <div className="price">IDR 50.000</div>
              <Button onClick="Exhibition-btn">Book Now</Button>
            </div>
            <div className="Kamera-2">
              <div className="Kamera-2-child">
                <img src={Kamera} alt="kamera2" />
              </div>
              <div className="price">IDR 50.000</div>
              <Button onClick="Exhibition-btn">Book Now</Button>
            </div>
          </div>
        </div>
        <div className="equipment-accecories">
          <h3>Equipment & Accecories</h3>
          <div className="promotion-child">
            <div className="Kamera-2">
              <div className="Kamera-2-child">
                <img src={Kamera} alt="kamera2" />
              </div>
              <div className="price">IDR 50.000</div>
              <Button onClick="Exhibition-btn">Book Now</Button>
            </div>
            <div className="Kamera-2">
              <div className="Kamera-2-child">
                <img src={Kamera} alt="kamera2" />
              </div>
              <div className="price">IDR 50.000</div>
              <Button onClick="Exhibition-btn">Book Now</Button>
            </div>
            <div className="Kamera-2">
              <div className="Kamera-2-child">
                <img src={Kamera} alt="kamera2" />
              </div>
              <div className="price">IDR 50.000</div>
              <Button onClick="Exhibition-btn">Book Now</Button>
            </div>
            <div className="Kamera-2">
              <div className="Kamera-2-child">
                <img src={Kamera} alt="kamera2" />
              </div>
              <div className="price">IDR 50.000</div>
              <Button onClick="Exhibition-btn">Book Now</Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Rent;
