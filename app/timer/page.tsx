'use client'
import Timer from '@/Components/Layout/timer';
import Nav from '@/Components/Layout/nav';
import React, { Suspense } from 'react';

export default function timerPage() {
    return (
        <div className={`h-screen w-screen `}>
            <Nav />
            <Suspense  fallback={<>loading...</>}>
                <Timer />
            </Suspense>
        </div>
    )
}