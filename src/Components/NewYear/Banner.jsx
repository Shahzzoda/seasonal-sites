import React from "react";
import { Bounce } from "react-awesome-reveal";

const Banner = ({ banner_text, txt }) => {
  return (
    <Bounce triggerOnce>
      <div className="jumbotron jumbotron-fluid" tabIndex="0" role="region" aria-label="Welcome Text Container">
        <h1 className="h1">{banner_text}</h1>
        <p>{txt}</p>
      </div>
    </Bounce>
  );
};

export default Banner;
