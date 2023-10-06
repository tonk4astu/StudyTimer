'use client'
import { Roboto } from 'next/font/google';
import { useTimeStore } from '@/Store/timeStore';
import Time from '@/Components/Timer';
import {Button} from '@/Components/Ui/button';
import { cookies  } from 'next/headers';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'

const roboto = Roboto({
    display: 'swap',
    weight: '700',
    preload: false,
});

const getUserData = async()=>{
    const cookieStore = cookies();
    const supabase = createServerComponentClient({cookies:()=>cookieStore});
    const {data} = await supabase.from('users').select('*');
    console.log(data);
}

const timer = () => {
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
        <div className='flex justify-center items-center flex-col'>
            <div className={roboto.className+
                ' text-7xl ' +timerColor()}>
                <p>{Time()}</p>
            </div>
            <Button onClick={()=>{setPause()}} Text={pause?'スタート' : 'ストップ'}/>
        </div>
    );
}

export default timer;