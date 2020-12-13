import React from "react";
import { Bounce } from "react-awesome-reveal";

const Banner = ({ banner_text1, banner_text2, txt }) => {
  return (
    <>
      <Bounce triggerOnce>
        <div className="jumbotron jumbotron-fluid" tabIndex="0" role="region" aria-label="intro text container">
          <h1 className="h1" role="heading" aria-level="1" aria-label="intro text">
            {banner_text1}
            <br />
            {banner_text2}
          </h1>
          <p role="region" aria-label="intro text complementary">{txt}</p>
        </div>
      </Bounce>
    </>
  );
};

export default Banner;
