import "./App.css";
import React from "react";
import { useInput } from "./input-hook";
import { intro_words, letter_content, farewell } from "./DefaultData/ChristmasPageData";

function App() {
  const { value: openingText, bind: bindOpeningText } = useInput(intro_words.msg)
  const { value: from, bind: bindFrom } = useInput(intro_words.from)
  const { value: to, bind: bindTo } = useInput(intro_words.to)
  const { value: letterGreeting, bind: bindLetterGreeting } = useInput(letter_content.greeting)
  const { value: letterText, bind: bindLetterText } = useInput(letter_content.msg)
  const { value: closingText, bind: bindClosingText } = useInput(farewell.msg)
  const { value: signOff, bind: bindSignOff } = useInput(farewell.from)

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("testing data save: ", openingText);
  }

  return (
    <div className="container" >
      <h1>Fill out the following information</h1>
      <form>
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
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );

}

export default App;
