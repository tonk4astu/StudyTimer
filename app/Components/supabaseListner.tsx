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
    const royter = useRouter();
    const { updateLoginUser } = useStore();
    useEffect(() => {
        const getUserInfo = async () => {
            const { data } = await supabase.auth.getSession();
            if (data.session) {
                updateLoginUser({
                    MailAddress: data.session?.user.email,
                    Password: data.session?.user.,
                })
            }, [accessToken])
    return null;
}