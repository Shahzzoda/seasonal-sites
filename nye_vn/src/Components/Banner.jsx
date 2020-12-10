import React from "react";
import { Bounce } from "react-awesome-reveal";

const Banner = ({ img, txt, alt = "Default Alt" }) => {
  return (
    <>
      <Bounce triggerOnce>
        <div className="jumbotron jumbotron-fluid">
          <h1 className='h1'>Happy <br /> Holidays!</h1>
          <p>{txt}</p>
        </div>
      </Bounce>
    </>
  );
};

export default Banner;
