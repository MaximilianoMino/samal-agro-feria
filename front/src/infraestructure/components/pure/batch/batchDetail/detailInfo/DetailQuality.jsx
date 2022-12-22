import React from "react";
import "./detailInfo.css";

const DetailQuality = ({ batchs }) => {
  const { quality_details } = batchs;
  console.log(quality_details);
  const {
    damage,
    sighly_stained,
    stained,
    sortex_quality,
    purity,
    split,
    wrinkled,
    blanched,
    discolour,
  } = quality_details;
  return (
    <>
      {blanched && (
        <div className="detail-info">
          <div className="dt-descr-container">
            <span>BANCHED </span> <p>{blanched}</p>
          </div>
        </div>
      )}
      {split && (
        <div className="detail-info">
          <div className="dt-descr-container">
            <span>SPLIT</span> <p>{split}</p>
          </div>
        </div>
      )}
      {damage && (
        <div className="detail-info">
          <div className="dt-descr-container">
            <span>DAMAGE</span> <p>{damage}</p>
          </div>
        </div>
      )}{" "}
      {purity && (
        <div className="detail-info">
          <div className="dt-descr-container">
            <span>PURITY</span> <p>{purity}</p>
          </div>
        </div>
      )}{" "}
      {stained && (
        <div className="detail-info">
          <div className="dt-descr-container">
            <span>STAINED</span> <p>{stained}</p>
          </div>
        </div>
      )}{" "}
      {sighly_stained && (
        <div className="detail-info">
          <div className="dt-descr-container">
            <span>SLIGHTLY STAINED</span> <p>{sighly_stained}</p>
          </div>
        </div>
      )}
      {discolour && (
        <div className="detail-info">
          <div className="dt-descr-container">
            <span>DISCOLOUR</span> <p>{discolour}</p>
          </div>
        </div>
      )}
      {wrinkled && (
        <div className="detail-info">
          <div className="dt-descr-container">
            <span>WRINKLED</span> <p>{wrinkled}</p>
          </div>
        </div>
      )}
      {sortex_quality && (
        <div className="detail-info">
          <div className="dt-descr-container">
            <p>{sortex_quality}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default DetailQuality;
