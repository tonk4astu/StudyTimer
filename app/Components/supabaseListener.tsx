'use client'
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from './supabaseClient';
import useStore from '../Store/loginStore';


export default function SupabaseListner({
    accessToken,
}: {
    accessToken?: string
}) {
    const router = useRouter();
    const { updateLoginUser } = useStore();

    useEffect(() => {
        // ユーザー情報を取得する関数
        const getUserInfo = async () => {
            const { data } = await supabase.auth.getSession();
            if (data.session) {
                // ログインユーザーの情報を更新
                updateLoginUser({
                    id: data.session?.user.id,
                    MailAddress: data.session?.user.email!,
                })
            } else {
                router.push("/Login");
            }
        }

        // ユーザー情報を取得
        getUserInfo();

        // サインイン状態の変更を監視
        supabase.auth.onAuthStateChange((_, session) => {
            // ログインユーザーの情報を更新
            updateLoginUser({ id: session?.user.id, MailAddress: session?.user.email! })

            // アクセストークンが変更された場合はページをリロード
            if (session?.access_token !== accessToken) {
                sessionStorage.removeItem('isLogin');
                router.refresh();
            }
        })
    }, [accessToken]);


    return null;
}
