import React from "react";
import header from "../../../../assets/landing/Producto Final Mung.JPG";
import logo from "../../../../assets/landing/IMG_3697.png";
import "./header.css";
const Header = () => {
  return (
    <header className="header-container">
      <img className="logo" alt="samal agro logo" src={logo} />{" "}
      <img className="header-img" alt="samal agro header" src={header} />{" "}
    </header>
  );
};

export default Header;
