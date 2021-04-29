import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import firebaseConfig from "./firebaseConfig.json";
import firebase from "firebase/app";
require("firebase/firestore");
require("firebase/storage");

// Initialize Cloud Firestore through Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
