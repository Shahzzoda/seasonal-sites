// Animations, css and asset imports
import "./App.scss";
import React from "react";
import { Slide } from "react-awesome-reveal";
import confettiSound from "./sounds/party-horn.wav";
// Componenet imports
import MemoryLane from "./Components/MemoryLane";
import Banner from "./Components/Banner";
import LetterMessage from "./Components/LetterMessage";
import FarewellMessage from "./Components/FarewellMessage";
// Data imports
import { imgTxt, bannerData, letterMsg, farewellMsg } from "./Data/imgTxtData";


const App = () => {
  // initialize Sound object
  const sound = new Audio(confettiSound);
  let img_on_right = false;

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
              img={e.image}
              text={e.text}
              img_on_right={img_on_right}
            />
          );
        })}
      </Slide>

      <FarewellMessage
        img={farewellMsg.image}
        body={farewellMsg.body}
        alt={"goodbye"}
      />
    </div>
  );
};

export default App;
