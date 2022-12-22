import React from "react";
import { Link } from "react-router-dom";

import Button from "../button/Button";
import "./productList.css";
const ProductList = ({ product }) => {
  const { name, thumbnail } = product;
  const btnStyle = {
    position: "relative",
  };

  return (
    <>
      <div className="card-container">
        <img
          className="product-list-img"
          alt="samal agro foto"
          src={`${thumbnail}`}
        />{" "}
        <div className="btn-pl-container">
          <Link to={`/batchs/${product.idFirebase}`}>
            <Button text="see more" btnStyle={btnStyle} />{" "}
          </Link>{" "}
        </div>{" "}
        <p className="product-list-text"> {name} </p>{" "}
      </div>{" "}
    </>
  );
};

export default ProductList;
