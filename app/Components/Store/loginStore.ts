import { create } from 'zustand';

// ログインユーザーの型を定義
type LoginUser = {
  id: string | undefined;
  MailAddress: string | undefined;
};

// 状態の型を定義
type State = {
  loginUser: LoginUser;
  updateLoginUser: (loginUser: LoginUser) => void;
  resetLoginUser: () => void;
};

// Zustandフックを作成
const useStore = create<State>(set => ({
  // 初期状態
  loginUser: {
    MailAddress: '',
    id: ''
  },

  // loginUserを更新する関数
  updateLoginUser: (loginUser: LoginUser) =>
    set(state => ({ loginUser })),

  // loginUserを初期状態にリセットする関数
  resetLoginUser: () => 
    set(state => ({ loginUser: { MailAddress: '', id: '' } }))
}));

export default useStore;