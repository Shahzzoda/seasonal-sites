import './App.css';

function App() {
  const sound = new Audio('bells-trimmed.m4a');

  return (
    <div className="container" onClick={() => sound.play()}>
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

      <div className='row gallery-memory-lane'>
        <div className='col-md-4'>
          <img className='left-slide' src='1.png' />
        </div>
        <div className='col-md-8'>
          <p>It has survived not only five centuries, but also the leap into electronic typesetting...</p>
        </div>
      </div>
      <div className='row gallery-memory-lane reverse'>
        <div className='col-md-8'>
          <p>It has survived not only five centuries, but also the leap into electronic typesetting...</p>
        </div>
        <div className='col-md-4'>
          <img className='left-slide' src='2.png' />
        </div>
      </div>
      <div className='row gallery-memory-lane'>
        <div className='col-md-4'>
          <img className='left-slide' src='3.png' />
        </div>
        <div className='col-md-8'>
          <p>It has survived not only five centuries, but also the leap into electronic typesetting...</p>
        </div>
      </div>
      <div className='row gallery-memory-lane reverse'>
        <div className='col-md-8'>
          <p>It has survived not only five centuries, but also the leap into electronic typesetting...</p>
        </div>
        <div className='col-md-4'>
          <img className='left-slide' src='4.png' />
        </div>
      </div>

      <div className="intro-words">
        <h1>And A Happy New Year!</h1>
        <p>Love, zoda. </p>
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

      <img src="lights.png" className="lights left lights-1" alt="christmas lights" />
      <img src="lights.png" className="lights right lights-1" alt="christmas lights" />
    </div>
  );
}

export default App;
