import React from "react";
import { Zoom } from "react-awesome-reveal";

const LetterMessage = ({ greeting, body }) => {
  return (
    <>
      <div className="letter-text" tabIndex="0">
        <Zoom triggerOnce>
          <p>{greeting}</p>
          <p>{body}</p>
        </Zoom>
      </div>
    </>
  );
};

export default LetterMessage;
