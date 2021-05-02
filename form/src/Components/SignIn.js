import React from "react";

const SignIn = ({ firebase, auth }) => {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    <>
      <button className="btn btn-signin" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
    </>
  );
};

export default SignIn;
