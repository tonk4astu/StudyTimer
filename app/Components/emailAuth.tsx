'use client'
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "./supabaseClient";
import useStore from "../Store";

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
            const { error } = await supabase.auth.signInWithPassword({ email, password });
            setEmail('');
            setPassword('');
            if (error) {
                alert(error.message);
            } else {
                router.push("/Timer");
            }
        } else {
            // アカウント作成処理
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
                <div className="flex flex-col">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className=" flex items-center flex-col">
                    <button type="submit" className=" bg-slate-900">
                        {isLogin ? "Login" : "Create Account"}</button>
                    <span onClick={() => setIsLogin(!isLogin)}>
                        {isLogin ? "Create new account?" : "Login"}
                    </span>
                </div>
            </form>
        </div>
    );
}
