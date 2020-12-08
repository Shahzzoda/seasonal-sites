import React from "react";
import { Zoom } from "react-awesome-reveal";

const LetterMessage = ({ greeting, body }) => {
  return (
    <>
      <div className="letter-text">
        <Zoom triggerOnce>
          <p>{greeting}</p>
          <p>{body}</p>
        </Zoom>
      </div>
    </>
  );
};

export default LetterMessage;
