import './App.css';

function App() {
  return (
    <div className="container">
      <div className="intro-words">
        <h1>Merry Christmas, Ya Filthy Animal!</h1>
        <p>From: Shahzoda</p>
        <p>To: Siam </p>
      </div>
      <div className="letter-content">
        <p>Dear Siam,</p>
        <p>
          Quis exercitation ad ad elit dolor. Commodo duis minim deserunt incididunt mollit dolore velit aliqua excepteur nisi. Irure ipsum commodo pariatur reprehenderit fugiat nulla dolore nulla quis. Ex adipisicing Lorem incididunt labore ea laborum aute anim in proident culpa duis velit veniam. Anim minim aute sunt eiusmod et eiusmod. Ut mollit minim aliqua duis exercitation labore. Dolor nulla labore id aliqua fugiat id magna occaecat nulla voluptate nulla duis.
        </p>
        <div className="santa-holder">
          <img src="santa-pepe.gif" alt="pepe santa" />
        </div>
      </div>

      <div className="hat-rack">
        <img src="hat.png" className="hat hat-1" alt="christmas hat falling" />
        <img src="hat.png" className="hat hat-2" alt="christmas hat falling" />
        <img src="hat.png" className="hat hat-3" alt="christmas hat falling" />
        <img src="hat.png" className="hat hat-4" alt="christmas hat falling" />
        <img src="hat.png" className="hat hat-5" alt="christmas hat falling" />
        <img src="hat.png" className="hat hat-6" alt="christmas hat falling" />
        <img src="hat.png" className="hat hat-7" alt="christmas hat falling" />
        <img src="hat.png" className="hat hat-8" alt="christmas hat falling" />
        <img src="hat.png" className="hat hat-9" alt="christmas hat falling" />
        <img src="hat.png" className="hat hat-10" alt="christmas hat falling" />
      </div>

      {/* NOTE: these are temp! and will be replaced by one or two pngs when site is done */}
      <img src="lights.png" className="lights left lights-1" alt="christmas lights" />
      <img src="lights.png" className="lights right lights-1" alt="christmas lights" />
    </div>
  );
}

export default App;
