import React from "react";

const FarewellMessage = ({ body }) => {
  return (
    <div className="jumbotron jumbotron-fluid" tabIndex="0" role='region' aria-label="Goodbye Banner">
      <h1 className="h1">Thank you!</h1>
      <p>{body}</p>
    </div>
  );
};

export default FarewellMessage;
