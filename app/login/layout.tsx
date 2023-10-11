import { cookies } from "next/headers";
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { Database } from "../Types/schema";

export default async function AuthLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const supabase = createServerComponentClient<Database>({ cookies })

    const {
        data: { session },
    } = await supabase.auth.getSession()
    return (
        <div className="bg-yellow-400 h-[100vh] w-[100vw]">
            {children}
        </div>
    )
}