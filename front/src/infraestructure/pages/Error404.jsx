import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/pure/button/Button";

import "./error404.css";
const Error404 = () => {
  const btnStyle = {
    margin: "auto",
  };
  return (
    <div className="not-found-container">
      <h1>UH OH! You're lost.</h1>
      <p>Sorry, but the page you were trying to view does not exist.</p>
      <i className="not-found-icon">404</i>
      <Link to="/">
        <Button text="Home" btnStyle={btnStyle} />
      </Link>
    </div>
  );
};

export default Error404;
