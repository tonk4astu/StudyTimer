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
                    ' absolute top-1/2 left-1/2 translate-x--1/2 translate-y--1/2'}>
                    {Time()}
                    </div>
            </Suspense>
        </>
    )
}