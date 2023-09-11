'use client'
import { Roboto } from 'next/font/google';
import React, { Suspense } from 'react';
import Time from '../Components/Timer';
import Nav from '../Components/nav';

const roboto = Roboto({
    display: 'swap',
    weight: '700',
    preload: false,
});
export default function Timer() {
    return (
        <>
            <Nav />
            <Suspense fallback={<>loading...</>}>
                <div className={roboto.className+
                    ' h-screen w-screen flex text-7xl justify-center items-center'}>
                    <p>{Time()}</p>
                    </div>
            </Suspense>
        </>
    )
}