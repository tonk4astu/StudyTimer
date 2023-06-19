'use client'
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "./supabaseClient";
import { useState } from "react";
import EmailAuth from "./emailAuth";
import useStore from '../Store';


export default function SupabaseListner({
    accessToken,
}: {
    accessToken?: string
}) {
    const router = useRouter();
    const { updateLoginUser } = useStore();
    useEffect(() => {
        const getUserInfo = async () => {
            const { data } = await supabase.auth.getSession();
            if (data.session) {
                updateLoginUser({
                    id: data.session?.user.id,
                    MailAddress: data.session?.user.email!,
                })
            }
        }
        getUserInfo();
        supabase.auth.onAuthStateChange((_, session) => {
                updateLoginUser({ id: session?.user.id, MailAddress: session?.user.email! })
                if(session?.access_token != accessToken){
                    router.refresh();
                }
            })
        }, [accessToken])
    return null;
    }