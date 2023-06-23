'use client'
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/solid'
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
                router.push("/");
            }
        } else {
            // アカウント作成処理
            const { error } = await supabase.auth.signUp({ email, password });
            setEmail('');
            setPassword('');
            if (error) {
                alert(error.message);
            } else {
                router.push("/");
            }
        }
    }

    // サインアウト処理
    function SignOut() {
        supabase.auth.signOut();
    }

    return (
        <div className="">
            <p></p>
            <ArrowRightOnRectangleIcon
                className="h-5 w-5 text-gray-500"
                onClick={SignOut}
            />
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
                    {isLogin ? "Create new account?" : "Back to login"}
                </span>
                </div>
            </form>
        </div>
    );
}
