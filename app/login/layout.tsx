import '@/globals.css'
import { cookies } from "next/headers";
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { Database } from "../Types/schema";

export default async function AuthLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="bg-yellow-400 h-[100vh] w-[100vw]">
            {children}
        </div>
    )
}