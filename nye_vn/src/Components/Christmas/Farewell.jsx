import React from "react";

const FareWell = ({ msg, from }) => {
  return (
    <div className="banner-words">
      <h1>{msg}</h1>
      <p>{from}. </p>
    </div>
  );
};

export default FareWell;
