import React from "react";

const MemoryLane = ({ img, text, isReversed, alt = "memories" }) => {
  if (!isReversed) {
    return (
      <div className="row gallery-memory-lane" tabindex="0">
        <div className="col-md-4" >
          <img className="left-slide" src={img} alt={alt} />
        </div>
        <div className="col-md-8">
          <p>{text}</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="row gallery-memory-lane reverse" tabindex="0">
        <div className="col-md-8" >
          <p>{text}</p>
        </div>
        <div className="col-md-4">
          <img className="left-slide" src={img} alt={alt} />
        </div>
      </div>
    );
  }
};

export default MemoryLane;
