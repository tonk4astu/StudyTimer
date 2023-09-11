import React, { useState, useEffect } from 'react';
const Timer = () => {
    const [initialTime] = useState(Date.now());
    const [count, setCount] = useState(0);
    const [paused, setPaused] = useState(false);
  
    useEffect(() => {
      if (paused) {
        return;
      }
      const now = Date.now();
      let nextTime = now + 1000 - ((now - initialTime) % 1000);
      const loop = () => {
        setCount((c) => c + 1);
        const now = Date.now();
        nextTime = now + 1000 - ((nextTime - now) % 1000);
        const diff = nextTime - now;
  
        timerId = setTimeout(loop, diff);
      };
      const diff = nextTime - now;
      let timerId = setTimeout(loop, diff);
      return () => {
        clearTimeout(timerId);
      };
    }, [paused, initialTime]);
  
    return TimeFormat(count);
  };
export default Timer;

const TimeFormat = (time: number) => {

    const  hour = Math.floor(time / 3600).toString().padStart(2, '0');
    const  minute = Math.floor((time % 3600) / 60).toString().padStart(2, '0');
    const  second = (time % 60).toString().padStart(2, '0');
    return `${hour}:${minute}:${second}`;
}