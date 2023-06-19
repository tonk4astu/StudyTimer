import {create} from 'zustand'

type LoginUser ={
    id: string | undefined
    MailAddress: string | undefined
}

type State = {
    loginUser: LoginUser 
    updateLoginUser: (loginUser: LoginUser) => void
    resetLoginUser: () => void
}

const useStore = create<State>(set => ({
    loginUser: {
        MailAddress: '',
        id: ''
    },
    updateLoginUser: (loginUser: LoginUser) => set(state => ({ loginUser })),
    resetLoginUser: () => set(state => ({ loginUser: { MailAddress: '', id: '' } }))
}));

export default useStore;