'use client'
import { useState } from "react";
import EmailAuth from "../Components/emailAuth";

//ログイン機能
export default async function Login() {
    return (
        <main
            className=" flex flex-col items-center justify-center">
            <EmailAuth />
        </main>
    )
}

