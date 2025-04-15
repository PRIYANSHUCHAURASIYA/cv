import React, { useState, useRef } from 'react';
import './App.css';

function formatTime(seconds) {
  const h = String(Math.floor(seconds / 3600)).padStart(2, '0');
  const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
  const s = String(seconds % 60).padStart(2, '0');
  return `${h}:${m}:${s}`;
}

function Stopwatch() {
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);

  const startTimer = () => {
    if (intervalRef.current !== null) return;
    intervalRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const resetTimer = () => {
    stopTimer();
    setTime(0);
  };

  return (
    <div className="stopwatch-container">
      <h1 className="stopwatch-title">⏱️ Stopwatch</h1>
      <div className="stopwatch-time">{formatTime(time)}</div>
      <div className="stopwatch-buttons">
        <button className="btn start" onClick={startTimer}>Start</button>
        <button className="btn stop" onClick={stopTimer}>Stop</button>
        <button className="btn reset" onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}

export default Stopwatch;
