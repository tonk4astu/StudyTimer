'use client'
import { useState } from "react";
import EmailAuth from "../Components/EmailAuth";

export default async function Login() {
    const [mail,setMail] = useState("");
    const [password,setPassword] = useState("");
    return (
        <div>
                <input type="text" value={mail} onChange={(event)=>setMail(event.target.value)}></input>
                <input type="text" value={password} onChange={(event)=>setPassword(event.target.value)}></input>
        </div>
    )
}