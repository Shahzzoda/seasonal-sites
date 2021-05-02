import React from "react";

const SignOut = ({ auth }) => {
  return (
    auth.currentUser && (
      <button className="btn btn-signout" onClick={() => auth.signOut()}>
        Sign Out
      </button>
    )
  );
};

export default SignOut;
