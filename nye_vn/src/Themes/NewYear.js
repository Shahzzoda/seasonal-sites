// Animations, css and asset imports
import "../Scss/NewYear.scss";
import React from "react";
import { Slide } from "react-awesome-reveal";
import Confetti from "react-confetti";
import confettiSound from "../sounds/party-horn.wav";
// Componenet imports
import MemoryLane from "../Components/NewYear/MemoryLane";
import Banner from "../Components/NewYear/Banner";
import LetterMessage from "../Components/NewYear/LetterMessage";
import FarewellMessage from "../Components/NewYear/FarewellMessage";
import Cursor from "../Components/NewYear/Cursor";
// Data imports
import {
  imgTxt,
  bannerData,
  letterMsg,
  farewellMsg,
} from "../Data/NewYearPageData";

const NewYear = () => {
  // initialize Sound object
  const sound = new Audio(confettiSound);
  let img_on_right = false;
// cursor className numbers
  const cursor_classes = [1, 2, 3, 4, 5, 6];

  let handleMouseMovements = (e) => {
    const cursors = document.querySelectorAll(".cursor");
    for (let i in [...cursors]) {
      let width = cursors[i].clientWidth;
      cursors[i].setAttribute(
        "style",
        "top: " +
          (e.pageY - width / 2) +
          "px; left: " +
          (e.pageX - width / 2) +
          "px;"
      );
    }
  };

  return (
    <div
      className="container"
      onClick={() => sound.play()}
      onMouseMove={handleMouseMovements}
    >
      <Confetti
        recycle={false}
        friction={1}
        gravity={0.25}
        numberOfPieces={500}
        wind={0}
        tweenDuration={200}
        colors={["#87eafa", "#9987fa", "#ffffff", "#002798"]}
      />

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

      {/* cursor content */}
      {cursor_classes.map((cursor) => {
        return (
          <Cursor
            key={cursor}
            img={`light.png`}
            alt={`light for cursor trail`}
            class_name={`cursor cursor${cursor}`}
          />
        );
      })}
    </div>
  );
};

export default NewYear;
