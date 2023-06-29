'use client'
import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [studyTimer, setStudyTimer] = useState(0);
  const [btnText,setbtnText] = useState('start');
  useEffect(() => {
    //一秒ごとに現在時刻を更新
    const timer = setInterval(() => {
      setCurrentTime(new Date());
      if(sessionStorage.getItem('start') !== null ){
        setStudyTimer(addTime(currentTime)as number);
      }
    }, 1000);

    return () => { 
      clearInterval(timer);
    };
  }, []);

  return (
    <div className=' flex flex-col items-center'>
      <p className='text-[100px]'>{studyTimer}</p>
      <div>
      <button className=' w-40 bg-blue-500 hover:bg-blue-700
       text-slate-100 text-5xl rounded'
       onClick={()=>{ClockBtn_Click(currentTime,setbtnText);}}>
        {btnText}</button>
      </div>
    </div>
  );
};

function ClockBtn_Click(currentTime:Date,setbtnText:React.Dispatch<React.SetStateAction<string>>) {
  const ClockState = sessionStorage.getItem('start');
  if(ClockState){
    setbtnText('start');
    const StartDate = new Date(ClockState);
    const EndDate = new Date(currentTime);
    console.log();
    
  }else{
    sessionStorage.setItem('start', currentTime.toLocaleTimeString('JST'));
  }
}

function addTime(currentTime:Date){
  const StartDate = new Date(sessionStorage.getItem('start') as string);
  return (currentTime.getTime() - StartDate.getTime());
}

export default Clock;