import React, { useState } from "react";

const SignIn = ({ firebase, auth }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formDisplay, setFormDisplay] = useState("none")

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  const signInWithEmail = (event) => {
    event.preventDefault();
    firebase.auth().signInWithEmailAndPassword(email, password)
  }

  const signUpWithEmail = (event) => {
    event.preventDefault();
    firebase.auth().createUserWithEmailAndPassword(email, password)
  }

  const handleDisplay = (display) => {
    setPassword("");
    setEmail("");
    setFormDisplay(display)
  }

  return (
    <div class="center sign-in">
      <button className="btn btn-signin" onClick={signInWithGoogle}>
        Sign in or sign up with Google
      </button>
      {
        formDisplay === 'sign-in' ? (
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
            <button className="btn btn-signin" onClick={(e) => signInWithEmail(e)}>
              Sign in with Email
            </button>
          </form>
        ) : (
          <button className="btn btn-signin" onClick={() => handleDisplay('sign-in')}>
            Sign in with Email
          </button>
        )
      }
      {
        formDisplay === 'sign-up' ? (
          <form>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button className="btn btn-signin" onClick={(e) => signUpWithEmail(e)}>
              Sign up with Email
            </button>
          </form>
        ) : (
          <button className="btn btn-signin" onClick={() => handleDisplay('sign-up')}>
            Sign up with Email
          </button>
        )
      }
    </div>
  );
};

export default SignIn;
