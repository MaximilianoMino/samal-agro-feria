import React from "react";
import { Link } from "react-router-dom";
import BatchBtn from "../batchBtn/BatchBtn";
import "./batchlist.css";

const BatchList = ({ batch }) => {
  const { name, photo, kg, quality, size, is_available } = batch;
  return (
    <div className="batch-list">
      <img alt="samal agro batch" className="batch-list-img" src={`${photo}`} />
      <div className="batch-list-description">
        <ul>
          <li>
            <span className="batch-list-field"> LOT: </span>
            <span className="batch-list-value"> {name} </span>
          </li>
          <li>
            <span className="batch-list-field"> Kg: </span>
            <span className="batch-list-value"> {kg} </span>
          </li>
          <li>
            <span className="batch-list-field"> Quality: </span>
            <span className="batch-list-value"> {quality} </span>
          </li>
          <li>
            <span className="batch-list-field">
              <span className="batch-list-field"> Size: </span>
            </span>
            <span className="batch-list-value"> {size} </span>
          </li>
        </ul>
        <div className="batch-btn-container">
          <a href="https://wa.me/+5493533686279">
            <BatchBtn
              text={`${is_available ? "Buy Now" : "Check Availability"} `}
            />
          </a>
          <Link to={`/batchs/detail/${batch.idFirebase}`}>
            <BatchBtn text="Details" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BatchList;
