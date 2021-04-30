import "./App.css";
import React, { useState } from "react";
import {
  intro_words,
  letter_content,
  farewell,
} from "./DefaultData/ChristmasPageData";
import firebase from "firebase/app";

const db = firebase.firestore();
const storage = firebase.storage().ref("Images");

function App() {
  const [files, setFiles] = useState([]);
  const [urls, setUrls] = useState([]);
  const [openingText, setOpeningText] = useState(intro_words.msg);
  const [from, setFrom] = useState(intro_words.from);
  const [to, setTo] = useState(intro_words.to);
  const [letterGreeting, setLetterGreeting] = useState(letter_content.greeting);
  const [letterText, setLetterText] = useState(letter_content.msg);
  const [closingText, setClosingText] = useState(farewell.msg);
  const [signOff, setSignOff] = useState(farewell.from);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const urlTemp = await handleUpload();
    setUrls([...urlTemp]);
    handleFireStoreWrite();
  };

  const handleFireStoreWrite = () => {
    console.log("Writing to firestore");
    db.collection("SiteData")
      .add({
        openingText,
        from,
        to,
        letterGreeting,
        letterText,
        closingText,
        signOff,
        images: urls,
      })
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };

  const handleUpload = async () => {
    console.log("Uploading Files to storage bucket...");
    const urltemp = await [...files].map(async (file) => {
      const snapshot = await storage.child(`${file.name}`).put(file);
      console.log(
        `Uploade Successful!!! 
        \nBytes Transferred:${snapshot.bytesTransferred}`
      );
      const url = await storage.child(file.name).getDownloadURL();
      return url;
    });
    return Promise.all(urltemp).then((values) => values);
  };

  return (
    <div className="container">
      <h1>Fill out the following information</h1>
      <form>
        {/* TODO: create seperate component to adhere to DRY principles v.v */}
        <label>Banner Opening Text:</label>
        <input
          type="text"
          value={openingText}
          onChange={(e) => setOpeningText(e.target.value)}
        />
        <label>From:</label>
        <input value={from} onChange={(e) => setFrom(e.target.value)} />
        <label>To:</label>
        <input type="text" value={to} onChange={(e) => setTo(e.target.value)} />
        <label>Greeting:</label>
        <input
          value={letterGreeting}
          onChange={(e) => setLetterGreeting(e.target.value)}
        />
        <label>Letter Text:</label>
        <input
          type="text"
          value={letterText}
          onChange={(e) => setLetterText(e.target.value)}
        />
        <label>Banner Closing Text:</label>
        <input
          value={closingText}
          onChange={(e) => setClosingText(e.target.value)}
        />
        <label>Sign off:</label>
        <input
          type="text"
          value={signOff}
          onChange={(e) => setSignOff(e.target.value)}
        />
        <input
          type="file"
          onChange={(e) => setFiles(e.target.files)}
          multiple
        ></input>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default App;
