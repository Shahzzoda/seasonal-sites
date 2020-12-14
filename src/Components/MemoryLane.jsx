import React from "react";

const MemoryLane = ({ img, text, isReversed, data_key, alt }) => {
  if (!isReversed) {
    return (
      <div className="row gallery-memory-lane" tabIndex="0" role="region" aria-label={`Image and text row number ${data_key + 1}`}>
        <div className="col-md-4">
          <img className="left-slide" src={img} alt={alt} />
        </div>
        <div className="col-md-8" role="document">
          <p>{text}</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="row gallery-memory-lane reverse" tabIndex="0" role="region" aria-label={`Image and text row number ${data_key + 1}`}>
        <div className="col-md-8" role="document">
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
