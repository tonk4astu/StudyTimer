import { supabase } from "@/Components/supabaseClient"
import { UserResponse } from "@supabase/supabase-js"
import Nav from "@/Components/Layout/nav"
type Calender = {
  days: number
  children: string
}

const getUserData = async (month: string) => {
  const { data } = await supabase.auth.getUser()
  console.dir(await data)
  //TODO:supabaseからユーザーの今月の実績データを取得する
}

const Calender = (props: Calender) => {
  const layout = CalenderLayout(props)
}

const calenderPages = async () => {
  await getUserData("4")
  return (
    <div>
      <Nav />
      {CalenderLayout({ days: 30, children: "test" })}
    </div>
  )
}

export default calenderPages

function CalenderLayout(props: Calender) {
  const defaultProps = {
    days: 30,
    children: "test",
  }
  const dayBox = (index: number) => {
    return <div key={index} className={"border border-slate-900"}></div>
  }

  const layout = () => {
    const dayBoxes = []
    for (let i = 0; i < props.days; i++) {
      dayBoxes.push(dayBox(i))
    }
    return dayBoxes
  }
  return (
    <div className={"grid grid-rows-6 grid-cols-7"}>
      {layout().map((day) => {
        return day
      })}
    </div>
  )
}
