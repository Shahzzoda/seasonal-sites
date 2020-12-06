import "./App.scss";
import { Zoom, Bounce, Slide } from "react-awesome-reveal";
import confettiSound from "./sounds/party-horn.wav";
import MemoryLane from "./Components/MemoryLane";
import Banner from "./Components/Banner";
import LetterMessage from "./Components/LetterMessage";
import { imgTxt, bannerData, letterMsg } from "./Data/imgTxtData";
import React from "react";

const App = () => {
  // initialize Sound object
  const sound = new Audio(confettiSound);
  let img_on_right = true;

  return (
    <div className="container" onClick={() => sound.play()}>
      <Banner img={bannerData.image} txt={bannerData.text} />
      <LetterMessage greeting={letterMsg.greeting} body={letterMsg.body} />

      {/* Render Pictures and text in alternating manner */}
      <Slide cascade triggerOnce>
        {imgTxt.map((e) => {
          // Flip boolean value so the compnent knows what orientation it should be
          img_on_right = !img_on_right;
          return (
            <MemoryLane
              key={e.image}
              image={e.image}
              text={e.text}
              img_on_right={img_on_right}
            />
          );
        })}
      </Slide>

      <div className="jumbotron jumbotron-fluid">
        {/* <h1 className='h1'>Thank you!</h1> */}
        <span>
          <div className="banner">
            <img src="goodbye.png" alt={"Goodbye"} />
          </div>
          <p>
            For your presence this year! Wishing your love, health, and
            happiness.
          </p>
        </span>
      </div>
    </div>
  );
};

export default App;
