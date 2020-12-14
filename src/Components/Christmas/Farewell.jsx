import React from "react";

const FareWell = ({ msg, from }) => {
  return (
    <div className="banner-words" tabIndex="0" role="region" aria-label="Goodbye text container">
      <h1>{msg}</h1>
      <p>{from}. </p>
    </div>
  );
};

export default FareWell;
