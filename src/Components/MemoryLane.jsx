import React from "react";

// Component renders image and text alternating left and right
const MemoryLane = ({ img, text, img_on_right }) => {
  if (img_on_right) {
    return (
      <div className="row gallery-memory-lane">
        <div className="col-6">
          <p>{text}</p>
        </div>
        <div className="col-6">
          <img className=" left-slide" src={img} alt={"placeholder"} />
        </div>
      </div>
    );
  } else {
    return (
      <div className="row gallery-memory-lane">
        <div className="col-6">
          <img className=" left-slide" src={img} alt={"placeholder"} />
        </div>
        <div className="col-6">
          <p>{text}</p>
        </div>
      </div>
    );
  }
};

export default MemoryLane;
