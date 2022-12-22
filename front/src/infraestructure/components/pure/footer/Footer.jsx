import React from "react";
import Button from "../button/Button";
import footer_logo from "../../../../assets/landing/samalfooter.png";
import "./footer.css";

const Footer = () => {
  const btnStyle = {
    width: "170px",
    height: "39px",
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontSize: "24px",
    textAlign: "center",
    color: "#FFFFFF",
  };
  return (
    <footer className="footer-container">
      <span className="cross-line-footer"> </span>{" "}
      <div className="work-together-container">
        <p> Let's Work Together</p>{" "}
      </div>{" "}
      <a href="https://wa.me/+5493533686279" className="btn-footer-container">
        <Button text="Contact Us" btnStyle={btnStyle} />{" "}
      </a>{" "}
      <div className="social-media-container">
        <a href="https://www.samalagro.com/">
          <img src={footer_logo} alt="samal agro logo" />
        </a>
        <p> ©2022 SamalAgro. All rights reserved </p>{" "}
        <div className="social-media-icons">
          <a href="https://www.facebook.com/samalagro">
            <img
              alt="samal agro icon"
              className="icon"
              src="https://cdn-icons-png.flaticon.com/512/59/59439.png"
            />
          </a>
          <a href="https://www.instagram.com/samalagro/?hl=es-la">
            <img
              alt="samal agro icon"
              className="icon"
              src="https://cdn-icons-png.flaticon.com/512/87/87390.png"
            />
          </a>
        </div>{" "}
      </div>{" "}
    </footer>
  );
};

export default Footer;
