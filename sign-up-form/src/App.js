import "./App.css";
import React from "react";
import { useInput } from "./input-hook";
import { intro_words, letter_content, farewell } from "./Data/ChristmasPageData";



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
        <label htmlFor="fname">Banner Opening Text:</label>
        <input type="text" name="welcomeText" value={openingText} {...bindOpeningText} />
        <label htmlFor="lname">From:</label>
        <input type="text" id="lname" name="lname" value={from} {...bindFrom} />
        <label htmlFor="fname">To:</label>
        <input type="text" value={to} {...bindTo} />
        <label htmlFor="lname">Greeting:</label>
        <input type="text" id="lname" name="lname" value={letterGreeting} {...bindLetterGreeting} />
        <label htmlFor="fname">Letter Text:</label>
        <input type="text" value={letterText} {...bindLetterText} />
        <label htmlFor="lname">Banner Closing Text:</label>
        <input type="text" id="lname" name="lname" value={closingText} {...bindClosingText} />
        <label htmlFor="fname">Sign off:</label>
        <input type="text" value={signOff} {...bindSignOff} />
        <button value="Submit" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );

}

export default App;
