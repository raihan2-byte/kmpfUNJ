import React from "react";
import "./Rent.scss";
import Button from "../../components/button/Button";
import Kamera from "../../components/assets/kamera.JPG";
import Lightning from "../../components/assets/lightning.JPG";
import RadioTrigger from "../../components/assets/radio-trigger.JPG";
import TasBulet from "../../components/assets/tas-bulet.JPG";
import Tripod from "../../components/assets/tripod.JPG";
import Kamera2 from "../../components/assets/kamera-2.JPG";

const Rent = () => {
  return (
    <div className="rent-parent">
      <div className="how-to-rent">
        <h3>How To Rent</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ea
          officiis optio iusto voluptates quia expedita repellendus culpa
          explicabo dolorum debitis incidunt, aliquam, accusantium quis quos vel
          ab dignissimos eveniet?
        </p>
      </div>
      <div className="category">
        <h3>Category</h3>
        <div className="category-child">
          <div className="camera">
            <div className="camera-child">
              <img src={Kamera} alt="kamera" />
            </div>
            <div className="price">IDR 50.000</div>
            <Button onClick="camera-btn">Book Now</Button>
          </div>
          <div className="lensa">
            <div className="lensa-child">
              <img src={Lightning} alt="kamera" />
            </div>
            <div className="price">IDR 50.000</div>
            <Button onClick="lensa-btn">Book Now</Button>
          </div>
          <div className="lighting">
            <div className="lighting-child">
              <img src={Tripod} alt="kamera" />
            </div>
            <div className="price">IDR 50.000</div>
            <Button onClick="lighting-btn">Book Now</Button>
          </div>
          <div className="tripod-supports">
            <div className="tripod-supports-child">
              <img src={RadioTrigger} alt="kamera" />
            </div>
            <div className="price">IDR 50.000</div>
            <Button onClick="tripod-btn">Book Now</Button>
          </div>
          <div className="Exhibition-Tools">
            <div className="Exhibition-Tools-child">
              <img src={TasBulet} alt="kamera" />
            </div>
            <div className="price">IDR 50.000</div>
            <Button onClick="Exhibition-btn">Book Now</Button>
          </div>
          <div className="Kamera-2">
            <div className="Kamera-2-child">
              <img src={Kamera2} alt="kamera2" />
            </div>
            <div className="price">IDR 50.000</div>
            <Button onClick="Exhibition-btn">Book Now</Button>
          </div>
        </div>
      </div>
      <div className="Pricelist"></div>
      <div className="Contact"></div>
    </div>
  );
};

export default Rent;
