import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Confetti from 'react-confetti'

ReactDOM.render(
  <React.StrictMode>
    <Confetti
        recycle={false}
        friction={1}
        gravity={0.25}
        numberOfPieces={500}
        wind={0}
        tweenDuration={200}
        colors={["#87eafa", "#9987fa", "#ffffff", "#002798"]}
      />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

