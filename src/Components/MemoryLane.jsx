import React from "react";

const MemoryLane = ({ img, text, isReversed, data_key, alt = "memories" }) => {
  if (!isReversed) {
    return (
      <div className="row gallery-memory-lane" tabindex="0" role="region" aria-label={`image and text row number ${data_key}`}>
        <div className="col-md-4">
          <img className="left-slide" src={img} alt={alt} role="img" />
        </div>
        <div className="col-md-8" role="region">
          <p>{text}</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="row gallery-memory-lane reverse" tabindex="0" role="region" aria-label={`image and text row number ${data_key}`}>
        <div className="col-md-8" role="region">
          <p>{text}</p>
        </div>
        <div className="col-md-4">
          <img className="left-slide" src={img} alt={alt} role="img" />
        </div>
      </div>
    );
  }
};

export default MemoryLane;
