import { supabase } from "./supabaseClient";

type AuthProps = {
    email: string,
    password: string,
    types: 'signUp' | 'signIn'
}
export default async function EmailAuth(props:AuthProps) {
    const {email,password,types} = props;
    let error = null;
    if(types === 'signUp') {
        error = await signUp(email,password);
    } else {
        error = await signIn(email,password);
    }
    return error;
}

async function signUp(email:string,password:string) {
    const { error } = await supabase.auth.signUp({
        email: email,
        password: password,
      })
      return error;
}

async function signIn(email:string,password:string) {
    const { error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      })
      return error;
}

