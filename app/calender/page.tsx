"use client"
import "@/globals.css"
import { supabase } from "@/Components/supabaseClient"
import { UserResponse } from "@supabase/supabase-js"
import Nav from "@/Components/Layout/nav"
type Calender = {
  days: number
  children: string
}

const getUserData = async (month: string) => {
  const { data } = await supabase.auth.getUser()
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

//カレンダーのレイアウトを作成する
function CalenderLayout(props: Calender) {
  const defaultProps = {
    days: 32,
    children: "test",
  }
  const dayBox = (index: number) => {
    return (
      <div
        key={index}
        className={
          "border border-slate-900 hover:bg-slate-400 container mx-auto"
        }
      >
        <button className={"w-full h-full"} onClick={(e) => StudyScoreView(e)}>
          {index}
        </button>
      </div>
    )
  }

  const layout = () => {
    const dayBoxes = []
    for (let i = 1; i < props.days; i++) {
      dayBoxes.push(dayBox(i))
    }
    return dayBoxes
  }
  return (
    <div className={"grid grid-rows-6 grid-cols-7 min-h-screen"}>
      {layout().map((day) => {
        return day
      })}
    </div>
  )
}

const StudyScoreView = (event: React.MouseEvent<HTMLButtonElement>) => {
  event.preventDefault()
  console.log("test")
  //TODO:supabaseからユーザーの当日の実績データを取得する
}
