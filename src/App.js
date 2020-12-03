import './App.scss';
import { Zoom, Bounce, Slide } from 'react-awesome-reveal'
import useSound from 'use-sound';
import confettiSound from './sounds/party-horn.wav'
import React from 'react'

function App() {
  const [play] = useSound(confettiSound);
  return (
    <div className='container' onClick={play}>
      <Bounce triggerOnce>
        <div className='jumbotron jumbotron-fluid'>
          {/* <h1 className='h1'>Happy Holidays, <br /> Friend!</h1> */}
          <span>
            <div className='banner'>
              <img src='banner.png' />
            </div>
            <p>Hey you! Hope you have a great holiday season this year.</p>
          </span>
        </div>
      </Bounce>
      <div class='letter-text'>
        <Zoom triggerOnce>
          <p>Dear Friend,</p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus PageMaker
            including versions of Lorem Ipsum.
          </p>
        </Zoom>
      </div>
      <Slide cascade triggerOnce>
        <div className='row gallery-memory-lane'>
          <div className='col-6'>
            <img className=' left-slide' src='https://image.kpopmap.com/2019/10/Kim-Soohyun-cover-DPC.jpg' />
          </div>
          <div className='col-6'>
            <p>It has survived not only five centuries, but also the leap into electronic typesetting...</p>
          </div>
        </div>
        <div className='row gallery-memory-lane'>
          <div className='col-6'>
            <p>It has survived not only five centuries, but also the leap into electronic typesetting...</p>
          </div>
          <div className='col-6'>
            <img className=' left-slide' src='https://6.vikiplatform.com/image/f8c6d1cc43b34859a6239da0c771d5d3.jpg?x=b&a=0x0&s=460x268&e=t&f=t&cb=1' />
          </div>
        </div>
        <div className='row gallery-memory-lane'>
          <div className='col-6'>
            <img className=' left-slide' src='https://www.sbs.com.au/popasia/sites/sbs.com.au.popasia/files/styles/full/public/kimsoohyun.png?itok=tiUXbSom&mtime=1581034913' />
          </div>
          <div className='col-6'>
            <p>It has survived not only five centuries, but also the leap into electronic typesetting...</p>
          </div>
        </div>
        <div className='row gallery-memory-lane'>
          <div className='col-6'>
            <p>It has survived not only five centuries, but also the leap into electronic typesetting...</p>
          </div>
          <div className='col-6'>
            <img className=' left-slide' src='https://lh3.googleusercontent.com/9vvN5l6Ckbpgk_kEGNs46uFw6EzKXsbNoTqkcHATdxTBu0hYbH02YJX4hBdmZT1L6tV7Ryr8WvdCHkFbXwTK4FlkCEn13tU2=w1200-h630-rj-pp-e365' />
          </div>
        </div>
      </Slide>
      <div className='jumbotron jumbotron-fluid'>
        {/* <h1 className='h1'>Thank you!</h1> */}
        <span>
          <div className='banner'>
            <img src='goodbye.png' />
          </div>
          <p>For your presence this year! Wishing your love, health, and happiness.</p>
        </span>
      </div>
    </div>
  );
}

export default App;
