'use client'
import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className='flex flex-row items-center justify-center'>
      <p className='text-[100px]'>{currentTime.toLocaleTimeString('JST')}</p>
      <button className='text-[100px]' onClick={()=>{start(currentTime)}}>Start</button>
    </div>
  );
};

function start(currentTime:Date) {
  sessionStorage.setItem('start', currentTime.toString());
}

export default Clock;