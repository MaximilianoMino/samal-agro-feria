import React from "react";
import "./batchBtn.css";
const BatchBtn = ({ text }) => {
  return (
    <div>
      <button className="batch-btn"> {text} </button>{" "}
    </div>
  );
};

export default BatchBtn;
