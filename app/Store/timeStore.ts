import { create } from 'zustand';

type time ={
    pause: boolean;
    togglePause: () => void;
    resetPause: () => void;
}



export const useTimeStore = create<time>(set => ({
    pause: false,
    togglePause: () => set(state => ({ pause: !state.pause })),
    resetPause: () => set(state => ({ pause: false }))
}));