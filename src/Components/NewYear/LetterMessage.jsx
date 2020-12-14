import React from "react";
import { Zoom } from "react-awesome-reveal";

const LetterMessage = ({ greeting, body }) => {
  return (
    <Zoom triggerOnce>
      <article className="letter-text" tabIndex="0" aria-label="Letter Text Container">
        <p aria-label="Letter Text">
          {greeting}
          {body}
        </p>
      </article>
    </Zoom>
  );
};

export default LetterMessage;
