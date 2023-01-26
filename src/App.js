import React, { useEffect, useState } from 'react'
import './App.css';

const App = () => {
  const [time, setTime] = useState(0);
  const [start, setStart] = useState(false);

 useEffect(() => {
   let interval = null;

   start ? interval = setInterval(() => { setTime(prevTime => prevTime + 10) }, 10) : clearInterval(interval);

   return () => clearInterval(interval);
 }, [start]);

  return (

    <div>
      <h1 id='stpWatch'>STOPWATCH</h1>
      <div id='times'>
      <span id='time1'>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
      <span id='time2'>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
      <span id='time3'>{("0" + Math.floor((time / 10) % 1000)).slice(-2)}</span>
      </div>

      <div id='buttons'>
      <button onClick={() => setStart(true)} id='btnstart'>Start</button>
      <button onClick={() => setStart(false)} id='btnstop'>Stop</button>
      <button onClick={() => {setStart(false); setTime(0); }} id='btnreset'>Reset</button>
      </div>

    </div>
  )
}

export default App
