'use client'
import { useState } from "react";
import EmailAuth from "../Components/EmailAuth";

//ログイン機能
export default async function Login() {
    const [mail,setMail] = useState<string>("");
    const [password,setPassword] = useState("");
    return (
        <div>
                Mail:
            <input 
            className=" mr-5 text-black font-bold py-0 px-4 rounded border-2 border-black" 
            type="text"
            value={mail} 
            onChange={()=>setMail(mail)}
            />
                Password:
            <input 
            className=" mr-5 text-black font-bold py-0 px-4 rounded border-2 border-black" 
            type="text"
            value={password} 
            onChange={(e)=>setPassword(e.target.value)}
            />
        </div>
    )
}

