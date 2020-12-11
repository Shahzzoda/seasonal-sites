import React from "react";

const Banner = ({ msg, from, to }) => {
  return (
    <div className="banner-words">
      <h1>{msg}</h1>
      <p>From:{from}</p>
      <p>To: {to} </p>
    </div>
  );
};

export default Banner;