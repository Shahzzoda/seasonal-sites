import React from "react";

const FarewellMessage = ({ img, alt = "Goodbye", body }) => {
  return (
    <>
      <div className="jumbotron jumbotron-fluid">
        {/* <h1 className='h1'>Thank you!</h1> */}
        <span>
          <div className="banner">
            <img src={img} alt={alt} />
          </div>
          <p>{body}</p>
        </span>
      </div>
    </>
  );
};

export default FarewellMessage;
