import "./App.scss";
import { Zoom, Bounce, Slide } from "react-awesome-reveal";
import confettiSound from "./sounds/party-horn.wav";
import MemoryLane from "./Components/MemoryLane";
import Banner from "./Components/Banner";
import { imgTxt, bannerData } from "./Data/imgTxtData";
import React from "react";

const App = () => {
  // initialize Sound object
  const sound = new Audio(confettiSound);
  let img_on_right = true;

  return (
    <div className="container" onClick={() => sound.play()}>
      <Banner img={bannerData.image} txt={bannerData.text} />
      <div className="letter-text">
        <Zoom triggerOnce>
          <p>Dear Friend,</p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </Zoom>
      </div>

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
