import "../App.css";
import React, { useState } from "react";
import {
  intro_words,
  letter_content,
  farewell,
} from "../Data/ChristmasPageData";

const Form = ({ storage, firestore, user }) => {
  const [urls, setUrls] = useState([]);
  const [openingText, setOpeningText] = useState(intro_words.msg);
  const [from, setFrom] = useState(user.displayName);
  const [to, setTo] = useState(intro_words.to);
  const [letterGreeting, setLetterGreeting] = useState(letter_content.greeting);
  const [letterText, setLetterText] = useState(letter_content.msg);
  const [laneObjs, setLaneObjs] = useState([{}])
  const [closingText, setClosingText] = useState(farewell.msg);
  const [signOff, setSignOff] = useState(farewell.from);

  const handleSubmit = async (event) => {
    event.preventDefault();
    handleFireStoreWrite();
  };

  const handleFireStoreWrite = () => {
    console.log("Writing to firestore");
    firestore
      .collection("SiteData")
      .add({
        createdBy: user.email,
        openingText,
        from,
        to,
        letterGreeting,
        letterText,
        closingText,
        signOff,
        images: urls,
        memoryLaneImgs: laneObjs
      })
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };

  const handleUpload = async (files) => {
    console.log("Uploading Files to storage bucket...");
    const urlsPromise = [...files].map(async (file) => {
      await storage
        .ref(user.displayName)
        .child(file.name)
        .put(file)
        .then((e) => {
          console.log("upload state:", e.state, "| bytes:", e.bytesTransferred)
        })
      return await storage
        .ref(user.displayName)
        .child(file.name)
        .getDownloadURL()
    })
    return await Promise.all(urlsPromise);
  };

  const handleFileUploads = (event) => {
    console.log("number of images:", event.target.files.length);
    handleUpload(event.target.files)
      .then((imgUrls) => {
        setUrls(urls.concat(imgUrls));
      })
  }

  const handleMemoryLane = (i, link, text) => {
    const memoryObj = { text: text, link: link }
    if (i + 1 > laneObjs.length) {
      setLaneObjs(laneObjs.concat(memoryObj))
    } else {
      const newLaneObjs = laneObjs.map((obj, index) => {
        if (i == index) {
          return memoryObj
        }
        return obj
      })
      setLaneObjs(newLaneObjs)
    }
  }

  return (
    <div className="container">
      <h1>Fill out the following information {user.displayName}</h1>
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
        {urls.map((url, i) =>
          <div className="memory-lane-images row" key={i}>
            <img className="col-4" src={url} />
            <input className="col-8"
              type="text"
              value={laneObjs[i] ? laneObjs[i].text : "some text"}
              onChange={(e) => handleMemoryLane(i, url, e.target.value)}
            />
          </div>
        )
        }
        <label className="file-upload">
          + Add Images
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleFileUploads(e)}
            multiple
          ></input>
        </label>
        <button className="btn btn-submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
