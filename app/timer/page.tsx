'use client'
import { Roboto } from 'next/font/google';
import React, { Suspense } from 'react';
import { useTimeStore } from '@/app/Store/timeStore';
import Time from '../Components/Timer';
import Nav from '../Components/View/nav';
import {Button} from '../Components/Ui/button';

const roboto = Roboto({
    display: 'swap',
    weight: '700',
    preload: false,
});
export default function Timer() {
    const pause = useTimeStore(state=>state.pause);
    const timerColor = ()=>{
        if(pause){
            return 'text-slate-400';
        }else{
            return 'text-slate-800';
        }
    }
        
    const setPause = useTimeStore(state=>state.togglePause);
    return (
        <div className={`h-screen w-screen `}>
            <Nav />
            <Suspense  fallback={<>loading...</>}>
                <div className='flex justify-center items-center flex-col'>
                    <div className={roboto.className+
                        ' text-7xl ' +timerColor()}>
                        <p>{Time()}</p>
                    </div>
                    <Button onClick={()=>{setPause()}} Text='ストップ'/>
                </div>
            </Suspense>
        </div>
    )
}