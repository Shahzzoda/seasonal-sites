import React from "react";

const IntroWords = ({ msg, from, to }) => {
  return (
    <div className="intro-words">
      <h1>{msg}</h1>
      <p>From:{from}</p>
      <p>To: {to} </p>
    </div>
  );
};

export default IntroWords;
