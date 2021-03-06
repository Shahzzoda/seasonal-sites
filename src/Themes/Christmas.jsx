// import React library and styling
import React from "react";
import "../Scss/Christmas.scss";
// import components
import Hat from "../Components/Christmas/Hat";
import Light from "../Components/Christmas/Light";
import Banner from "../Components/Christmas/Banner";
import LetterContent from "../Components/Christmas/LetterContent";
import MemoryLane from "../Components/MemoryLane";
import Farewell from "../Components/Christmas/Farewell";
// import data
import jingleBell from "../Sounds/bells-trimmed.m4a";
import {
  intro_words,
  letter_content,
  memory_lane,
  farewell,
} from "../Data/ChristmasPageData";

const Christmas = () => {
  // for ease of coding, using an array of corresponding classname post-fix
  const class_names = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  // To render alternatively
  let isReversed = true;
  // initialize sound object
  const sound = new Audio(jingleBell);
  return (
    <div className="xmas container" onClick={() => sound.play()} role="main">
      <Banner
        msg={intro_words.msg}
        from={intro_words.from}
        to={intro_words.to}
      />

      <LetterContent
        greeting={letter_content.greeting}
        msg={letter_content.msg}
      />

      {memory_lane.map((memory, index) => {
        isReversed = !isReversed;
        return (
          <MemoryLane
            key={index}
            img={memory.img}
            text={memory.text}
            isReversed={isReversed}
            alt={memory.alt_img_text}
            data_key={index}
          />
        );
      })}

      <Farewell msg={farewell.msg} from={farewell.from} />

      {/* Rendering hats and lights */}
      <div className="hat-rack" aria-hidden="true">
        {class_names.map((cn, index) => {
          return (
            <Hat
              key={index}
              class_name={`hat hat-${cn}`}
              img="hat.png"
              alt="Christmas hat falling"
            />
          );
        })}
      </div>
      <Light
        key={0}
        img="lights.png"
        alt="light borders"
        class_name="lights right"
      />
      <Light
        key={1}
        img="lights.png"
        alt="light borders"
        class_name="lights left"
      />
    </div>
  );
};

export default Christmas;
