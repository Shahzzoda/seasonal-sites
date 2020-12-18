import './App.css';

function App() {
  return (
    <div className="container">
      <h1>Fill out the following information</h1>
      <form action="/action_page.php">
        <label for="fname">Banner Welcome Text:</label>
        <input type="text" id="fname" name="fname" value="Merry Christmas, Ya Filthy Animal" />
        <label for="lname">From:</label>
        <input type="text" id="lname" name="lname" value="Shahzoda" />
        <label for="fname">To:</label>
        <input type="text" id="fname" name="fname" value="Siam" />
        <label for="lname">Greeting:</label>
        <input type="text" id="lname" name="lname" value="Dear Siam," />
        <label for="fname">Letter Text:</label>
        <input type="text" id="fname" name="fname" value="Lorem Ipsum..." />
        <label for="lname">Banner Goodbye Text:</label>
        <input type="text" id="lname" name="lname" value="And a Happy New Year!" />
        <label for="fname">Sign off:</label>
        <input type="text" id="fname" name="fname" value="Love, zoda..." />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;
