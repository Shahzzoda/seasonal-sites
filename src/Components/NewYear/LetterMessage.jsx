import React from "react";
import { Zoom } from "react-awesome-reveal";

const LetterMessage = ({ greeting, body }) => {
  return (
    <>
      <div className="letter-text" tabIndex="0" role="region" aria-label="letter-text">
        <Zoom triggerOnce>
          <p aria-label="letter greeting">{greeting}</p>
          <p aria-label="letter body">{body}</p>
        </Zoom>
      </div>
    </>
  );
};

export default LetterMessage;
