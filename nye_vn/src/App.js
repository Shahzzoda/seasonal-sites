import React from "react";
import NewYear from "./Themes/NewYear";
import Christmas from "./Themes/Christmas";
import { theme } from "./Data/themeConfig";


// Render pages conditially based on the param
const App = () => {
  if (theme === "Christmas") {
    document.body.style = " background-color: green;";
    return <Christmas />;
  } else if (theme === "New Year") {
    document.body.style = " background-color: black ;";
    return <NewYear />;
  }
};

export default App;
