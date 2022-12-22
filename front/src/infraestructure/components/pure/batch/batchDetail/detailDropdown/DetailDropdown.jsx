import React, { useState } from "react";
import "./detailDropdown.css";
import downArrow from "../../../../../../assets/icons/down-arrow.png";
import DetailDescription from "../detailInfo/DetailDescription";
import DetailQuality from "../detailInfo/DetailQuality";
import DetailVideo from "../detailInfo/DetailVideo";
const DetailDropdown = ({ batchs }) => {
  const [dropdownDescr, setDropdownDescr] = useState(false);
  const [dropdownQuality, setDropdownQuality] = useState(false);
  const [dropdownVideo, setDropdownVideo] = useState(false);
  const { video } = batchs;
  console.log(video);
  return (
    <div className="dropdown-container">
      <div
        className="dropdown-title"
        onClick={() => {
          setDropdownDescr(!dropdownDescr);
        }}
      >
        <p> Description </p>{" "}
        <img
          className={`arrow-dropdown ${dropdownDescr ? "turn-arrow" : ""}`}
          alt="Samal agro right arrow icon"
          srcSet={downArrow}
        />{" "}
      </div>{" "}
      {dropdownDescr && <DetailDescription batchs={batchs} />}{" "}
      <div
        className="dropdown-title"
        onClick={() => {
          setDropdownQuality(!dropdownQuality);
        }}
      >
        <p> Quality </p>{" "}
        <img
          className={`arrow-dropdown ${dropdownQuality ? "turn-arrow" : ""}`}
          alt="Samal agro right arrow icon"
          srcSet={downArrow}
        />{" "}
      </div>{" "}
      {dropdownQuality && <DetailQuality batchs={batchs} />}{" "}
      {video && (
        <div
          className="dropdown-title"
          onClick={() => {
            setDropdownVideo(!dropdownVideo);
          }}
        >
          <p> Video </p>{" "}
          <img
            className={`arrow-dropdown ${dropdownVideo ? "turn-arrow" : ""}`}
            alt="Samal agro right arrow icon"
            srcSet={downArrow}
          />{" "}
        </div>
      )}{" "}
      {dropdownVideo && <DetailVideo batchs={batchs} />}{" "}
    </div>
  );
};

export default DetailDropdown;
