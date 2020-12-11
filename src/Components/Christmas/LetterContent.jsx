import React from "react";

const LetterContent = ({ greeting, msg }) => {
  return (
    <div className="letter-content">
      <p>{greeting},</p>
      <p>
        {msg}
      </p>
      <div className="santa-holder">
        <img src="santa-pepe.gif" alt="pepe santa" />
      </div>
    </div>
  );
};

export default LetterContent;
