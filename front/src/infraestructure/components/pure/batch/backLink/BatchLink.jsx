import React from "react";
import { Link } from "react-router-dom";
import rightArrow from "../../../../../assets/icons/right-arrow.png";
import "./batchlink.css";
const BatchLink = ({ text }) => {
  return (
    <div className="batch-link-container">
      <Link to="/">
        <img
          alt="Samal agro go right arrow icon"
          className="batch-list-ra-icon"
          srcSet={rightArrow}
        />
        <p className="batch-link-text">{text}</p>
      </Link>
    </div>
  );
};

export default BatchLink;
