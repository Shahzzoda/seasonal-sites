import React from "react";

const LetterContent = ({ greeting, msg }) => {
  return (
    <div className="letter-content" tabIndex="0" role="region" aria-label="Letter container">
      <p>
        {greeting}
        {msg}
      </p>
      <div className="santa-holder" role="region" aria-label="pepe santa walking by container">
        <img src="santa-pepe.gif" alt="pepe santa" />
      </div>
    </div>
  );
};

export default LetterContent;
