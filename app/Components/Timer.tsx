import React, { useState, useEffect } from 'react';

const Clock = () => {
    // 現在の時刻を管理するステート
    const [currentTime, setCurrentTime] = useState(new Date());

    // 学習時間を管理するステート
    const [studyTimer, setStudyTimer] = useState(0);

    // ボタンのテキストを管理するステート
    const [btnText, setbtnText] = useState('start');

    // コンポーネントがマウントされた時とアンマウントされた時に実行される副作用
    useEffect(() => {
        // 一秒ごとに現在時刻を更新するタイマーをセットアップ
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        // コンポーネントがアンマウントされた時にタイマーをクリーンアップ
        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div className='flex flex-col items-center'>
            {/* 学習時間を表示 */}
            <p className='text-[100px]'>{studyTimer}</p>
            <div>
                {/* ボタンを表示し、クリック時にClockBtn_Click関数を呼び出す */}
                <button className='w-40 bg-blue-500 hover:bg-blue-700 text-slate-100 text-5xl rounded'
                    onClick={() => { ClockBtn_Click(currentTime, setbtnText); }}>
                    {btnText}
                </button>
            </div>
        </div>
    );
};

// ボタンがクリックされた時の処理
function ClockBtn_Click(currentTime: Date, setbtnText: React.Dispatch<React.SetStateAction<string>>) {
    const ClockState = sessionStorage.getItem('start');
    if (ClockState) {
        // 学習タイマーが開始されている場合は、タイマーを停止し、ボタンのテキストを 'start' に設定
        setbtnText('start');

        // 開始時刻と現在時刻から経過時間を計算して出力（ここでconsole.log()が空なので何も表示されない）
        const StartDate = new Date(ClockState);
        const EndDate = new Date(currentTime);
        console.log();
    } else {
        // 学習タイマーが開始されていない場合は、開始時刻をセッションストレージに設定
        sessionStorage.setItem('start', currentTime.toLocaleTimeString('ja-JP', { timeZone: 'Asia/Tokyo' }));
    }
}

// 経過時間を計算する関数
function addTime(currentTime: Date) {
    const StartDate = new Date(sessionStorage.getItem('start') as string);
    return currentTime.getTime() - StartDate.getTime();
}

export default Clock;
