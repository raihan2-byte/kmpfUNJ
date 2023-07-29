import React from "react";
import Rent from "../../pages/Renting/Rent";
// import Product from "../../pages/product/product";
import Navbar from "../../components/navbar/Navbar";
import Products from "../../components/products/products";

const producservice = () => {
  return (
    <div className="product-service">
      <>
        <Navbar />
        <Products />
        <Rent />
      </>
    </div>
  );
};

export default producservice;
