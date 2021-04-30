import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import firebaseConfig from "./firebaseConfig.json";

// Initialize Cloud Firestore through Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const firestore = firebase.firestore();
const storage = firebase.storage().ref("Images");

ReactDOM.render(
  <React.StrictMode>
    <App
      auth={auth}
      firestore={firestore}
      storage={storage}
      firebase={firebase}
    />
  </React.StrictMode>,
  document.getElementById("root")
);
