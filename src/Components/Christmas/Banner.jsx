import React from "react";

const Banner = ({ msg, from, to }) => {
  return (
    <div className="banner-words" tabIndex="0" role="region" aria-label="Welcome text container">
      <h1>{msg}</h1>
      <p>From: {from}</p>
      <p>To: {to} </p>
    </div>
  );
};

export default Banner;
