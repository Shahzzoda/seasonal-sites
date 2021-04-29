import "./App.css";
import React, { useState } from "react";
import { useInput } from "./input-hook";
import {
  intro_words,
  letter_content,
  farewell,
} from "./DefaultData/ChristmasPageData";
import firebase from "firebase/app";

function App() {
  var db = firebase.firestore();
  const storage = firebase.storage().ref("Images");

  const [files, setFiles] = useState(null);
  const urls = [];

  const { value: openingText, bind: bindOpeningText } = useInput(
    intro_words.msg
  );
  const { value: from, bind: bindFrom } = useInput(intro_words.from);
  const { value: to, bind: bindTo } = useInput(intro_words.to);
  const { value: letterGreeting, bind: bindLetterGreeting } = useInput(
    letter_content.greeting
  );
  const { value: letterText, bind: bindLetterText } = useInput(
    letter_content.msg
  );
  const { value: closingText, bind: bindClosingText } = useInput(farewell.msg);
  const { value: signOff, bind: bindSignOff } = useInput(farewell.from);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Uploading Files to storage bucket...");
    await handleUpload();
    console.log("testing data save: ", openingText);
    db.collection("users")
      .add({
        first: "Ada",
        last: "Lovelace",
        born: 1815,
      })
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };

  const handleUpload = async () => {
    for (let i = 0; i < files.length; i++) {
      storage
        .child(`${files[i].name}`)
        .put(files[i])
        .then((snapshot) => {
          console.log(
            `Uploade Successful!!! \nBytes Transferred:${snapshot.bytesTransferred} `
          );
        })
        .then((res) => {
          storage
            .child(files[i].name)
            .getDownloadURL()
            .then((res) => urls.push(res));
        });
    }
  };
  return (
    <div className="container">
      <h1>Fill out the following information</h1>
      <form>
        {/* TODO: create seperate component to adhere to DRY principles v.v */}
        <label>Banner Opening Text:</label>
        <input type="text" value={openingText} {...bindOpeningText} />
        <label>From:</label>
        <input value={from} {...bindFrom} />
        <label>To:</label>
        <input type="text" value={to} {...bindTo} />
        <label>Greeting:</label>
        <input value={letterGreeting} {...bindLetterGreeting} />
        <label>Letter Text:</label>
        <input type="text" value={letterText} {...bindLetterText} />
        <label>Banner Closing Text:</label>
        <input value={closingText} {...bindClosingText} />
        <label>Sign off:</label>
        <input type="text" value={signOff} {...bindSignOff} />
        <input type="file" onChange={(e) => setFiles(e.target.files)}></input>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default App;
