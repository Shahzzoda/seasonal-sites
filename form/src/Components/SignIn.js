import React, { useState } from "react";
import errorDesc from "../Data/ErrorCodes";

const SignIn = ({ firebase, auth }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formDisplay, setFormDisplay] = useState("none")
  const [formError, setFormError] = useState("");

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
      .catch((error) => {
        const errorMessage = errorDesc[error.code];
        setFormError(errorMessage);
      });
  };

  const signInWithEmail = (event) => {
    event.preventDefault();
    firebase.auth().signInWithEmailAndPassword(email, password)
      .catch((error) => {
        const errorMessage = errorDesc[error.code];
        setFormError(errorMessage);
      });
  }

  const signUpWithEmail = (event) => {
    event.preventDefault();
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch((error) => {
        const errorMessage = errorDesc[error.code];
        setFormError(errorMessage);
      });
  };

  const handleDisplay = (display) => {
    setPassword("");
    setEmail("");
    setFormDisplay(display)
  };

  const signInForm = (
    <form>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        type="submit"
        className="btn btn-signin"
        onClick={(e) => signInWithEmail(e)}
      >
        Sign in with Email
      </button>
    </form>
  );

  const signInButton = (
    <button
      className="btn btn-signin"
      onClick={() => handleDisplay('sign-in')}
    >
      Sign in with Email
    </button>
  );

  const signUpForm = (
    <form>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)} />
      <button
        type="submit"
        className="btn btn-signin"
        onClick={(e) => signUpWithEmail(e)}
      >
        Sign up with Email
      </button>
    </form>
  );

  const signUpButton = (
    <button className="btn btn-signin" onClick={() => handleDisplay('sign-up')}>
      Sign up with Email
    </button>
  );

  return (
    <div className="center sign-in">
      {formError && <div className="error"><p>{formError}</p></div>}
      <button className="btn btn-signin" onClick={signInWithGoogle}>
        Sign in or sign up with Google
      </button>
      {formDisplay === 'sign-in' ? signInForm : signInButton}
      {formDisplay === 'sign-up' ? signUpForm : signUpButton}
    </div>
  );
};

export default SignIn;
