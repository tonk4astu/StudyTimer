import {create} from 'zustand'

type LoginUser ={
    MailAddress: string | undefined,
    password: string | undefined
}

type State = {
    loginUser: LoginUser 
    updateLoginUser: (loginUser: LoginUser) => void
    resetLoginUser: () => void
}

const useStore = create<State>(set => ({
    loginUser: {
        MailAddress: '',
        password: ''
    },
    updateLoginUser: (loginUser: LoginUser) => set(state => ({ loginUser })),
    resetLoginUser: () => set(state => ({ loginUser: { MailAddress: '', password: '' } }))
}));

export default useStore;