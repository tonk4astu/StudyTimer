import { supabase } from "@/app/Components/supabaseClient";
type Calender={
    days:number
    children:string
}

const getUserData = (month:string)=>{
    supabase.auth.getUser();
    //TODO:supabaseからユーザーの今月の実績データを取得する
}

const Calender =(props:Calender)=>{
    const layout = CalenderLayout(props);

}

export default function CalenderLayout (props:Calender) {
    const defaultProps = {
        days: 30,
        children: "test"
    }
    return (
        <div >
            {props.children}
        </div>
    )
}
