import { supabase } from "@/Components/supabaseClient";
import { UserResponse } from "@supabase/supabase-js";
import Nav from "@/Components/Layout/nav";
type Calender={
    days:number
    children:string
}

const getUserData =async (month:string)=>{
    const {data} = await supabase.auth.getUser();
    console.dir(await data);
    //TODO:supabaseからユーザーの今月の実績データを取得する
}

const Calender =(props:Calender)=>{
    // const layout = CalenderLayout(props);

}

const calenderPages=async()=>{
    await getUserData('4');
    return (
        <div>
        <Nav/>
        </div>
    )
}

export default calenderPages;

// function CalenderLayout (props:Calender) {
//     const defaultProps = {
//         days: 30,
//         children: "test"
//     }
//     return (
//         <div >
//         </div>
//     )
// }