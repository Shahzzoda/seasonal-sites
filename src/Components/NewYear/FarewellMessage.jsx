import React from "react";

const FarewellMessage = ({ img, alt = "Goodbye", body }) => {
  return (
    <>
      <div className="jumbotron jumbotron-fluid" tabIndex="0">
        <h1 className="h1">Thank you!</h1>
        <p>{body}</p>
      </div>
    </>
  );
};

export default FarewellMessage;
