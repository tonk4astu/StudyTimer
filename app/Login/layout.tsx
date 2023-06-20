import { cookies } from "next/headers";
import SupabaseListener from "../Components/supabaseListener";
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { Database } from "../Types/schema";

export default async function AuthLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const supabase = createServerComponentClient(
        { cookies })
    const {
        data: { session },
    } = await supabase.auth.getSession()
    return (
        <>
            <SupabaseListener accessToken={session?.access_token} />
            {children}
        </>
    )
}