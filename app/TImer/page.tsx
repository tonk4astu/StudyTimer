'use client'
import React, { Suspense } from 'react';
import Time from '../Components/Timer';
import Nav from '../Components/nav';

export default function Timer() {
    return (
        <>
            <Nav />
            <Suspense fallback={<>loading...</>}>
                {Time()}
            </Suspense>
        </>
    )
}