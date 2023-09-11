'use client'
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "./supabaseClient";
import useStore from "../Store/loginStore";

export default function EmailAuth() {
    const { loginUser } = useStore();
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    // フォームの送信時に実行される関数
    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (isLogin) {
            // ログイン処理
            if(typeof email === 'undefined' || typeof password === 'undefined'){
                return;
            }
            const { error } = await supabase.auth.signInWithPassword({ email, password });
            useStore.setState({ loginUser: { MailAddress: '', id: '' } });
            if (error) {
                alert(error.message);
            } else {
                sessionStorage.setItem('isLogin', isLogin.toString());
                router.push("/Timer");
            }
        } else {
            // アカウント作成処理
            if(typeof email === 'undefined' || typeof password === 'undefined'){
                return;
            }
            const { error } = await supabase.auth.signUp({ email, password });
            setEmail('');
            setPassword('');
            if (error) {
                alert(error.message);
            } else {
                router.push("/Login");
            }
        }
    }

    return (
        <div className="">
            <p>{loginUser.MailAddress}</p>

            <form onSubmit={handleSubmit}>
                <div className="flex flex-col p-8">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        className="p-1"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        className="p-1"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className=" flex items-center flex-col">
                    <button type="submit" className=" bg-yellow-400 hover:bg-yellow-500
                     shadow-yellow-900 shadow-sm hover:shadow-inner
                     w-fit border-2 rounded border-yellow-400 px-2">
                        {isLogin ? "Login" : "Create Account"}</button>
                    <span className="text-slate-800 hover:text-slate-500" onClick={() => setIsLogin(!isLogin)}>
                        {isLogin ? "Create new account?" : "Login"}
                    </span>
                </div>
            </form>
        </div>
    );
}
