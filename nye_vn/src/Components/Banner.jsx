import React from "react";
import { Bounce } from "react-awesome-reveal";

const Banner = ({img, txt, alt="Default Alt"}) => {
  return (
    <>
      <Bounce triggerOnce>
        <div className="jumbotron jumbotron-fluid">
          {/* <h1 className='h1'>Happy Holidays, <br /> Friend!</h1> */}
          <span>
            <div className="banner">
              <img src={img}alt={alt} />
            </div>
            <p>{txt}</p>
          </span>
        </div>
      </Bounce>
    </>
  );
};

export default Banner;
