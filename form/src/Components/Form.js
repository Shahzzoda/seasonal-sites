import "../App.css";
import React, { useState, useEffect } from "react";
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
  const [laneObjs, setLaneObjs] = useState([])
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
        const memoryObjs = imgUrls.map((url) => {
          return { url: url, text: "some text" }
        })
        setLaneObjs(laneObjs.concat(memoryObjs))
        console.log("upload finish, laneObjs:", laneObjs);
        console.log("upload finish, urls:", urls)
      })
  }

  const handleMemoryLane = (i, url, text) => {
    console.log("in handleMemoryLane laneObjs:", i, laneObjs)
    console.log("in handleMemoryLane urls:", i, urls)
    const memoryObj = { text: text, url: url }
    if (i > laneObjs.length) {
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

  // useEffect(() => {
  //   console.log("rerendering:", urls, laneObjs)
  // }, [urls, laneObjs])

  const handleDelete = (i) => {
    storage.refFromURL(urls[i]).delete()
      .then(() =>
        console.log("deletion successful")
      )
      .catch((e) =>
        console.log("error while deleting:", e)
      )
    laneObjs.splice(i, 1)
    urls.splice(i, 1)
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
        {
          laneObjs.map((obj, i) =>
            <div className="memory-lane-images row" key={obj.url}>
              <img className="col-4" src={obj.url} />
              <input className="col-7"
                type="text"
                value={obj.text}
                onChange={(e) => handleMemoryLane(i, obj.url, e.target.value)}
              />
              <div className="col-1" onClick={() => handleDelete(i)}>
                <span>x</span>
              </div>
            </div>)
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
