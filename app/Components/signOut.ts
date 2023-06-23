'use client'
import { supabase } from "./supabaseClient";
    // サインアウト処理
    export function SignOut() {
        supabase.auth.signOut();
    }