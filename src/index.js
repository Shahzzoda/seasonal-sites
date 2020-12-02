import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Confetti from 'react-confetti'

ReactDOM.render(
  <React.StrictMode>
    <Confetti
      recycle={false}
      friction={1}
      gravity={0.25}
      numberOfPieces={500}
      wind={0}
      tweenDuration={100}
      colors={['#87eafa', '#9987fa', '#ffffff', '#002798']}
    />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
