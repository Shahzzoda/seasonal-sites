import React from "react";
import { Bounce } from "react-awesome-reveal";

const Banner = ({ banner_text1, banner_text2, txt }) => {
  return (
    <>
      <Bounce triggerOnce>
        <div className="jumbotron jumbotron-fluid" tabIndex="0" >
          <h1 className="h1">
            {banner_text1}
            <br />
            {banner_text2}
          </h1>
          <p>{txt}</p>
        </div>
      </Bounce>
    </>
  );
};

export default Banner;
