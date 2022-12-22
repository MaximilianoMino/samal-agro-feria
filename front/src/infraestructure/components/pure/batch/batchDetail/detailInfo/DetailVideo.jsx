import React from "react";
import "../detailInfo/DetailDescription";
const DetailVideo = ({ batchs }) => {
  const { video } = batchs;
  return (
    <div className="detail-video-container">
      <iframe
        width="340"
        height="600"
        src={video}
        title="Adzuki Pignani"
        frameBorder="0"
        autoPlay="1"
        rel="0"
        start="1"
        controls="0"
        allow="accelerometer; loop;  clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default DetailVideo;
