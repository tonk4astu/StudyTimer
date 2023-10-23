"use client"
import "@/globals.css"
import { supabase } from "@/Components/supabaseClient"
import Tag from "@/Components/Ui/tag"
import { UserResponse } from "@supabase/supabase-js"
import Nav from "@/Components/Layout/nav"
import { AnchorHTMLAttributes } from "react"
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
      <div className="text-lg align-middle text-center">
        {1 /*データの取得月を表示*/}月
      </div>
      {CalenderLayout({ days: 32, children: "test" })}
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
    //TODO:indexと取得したデータの日付が一致したら、その日の実績を表示する
    const studyDay = () => {
      if (index === 1) {
        return (
          <Tag
            tagName="幾何学における消極的エンペラーペンギン"
            tagColor="bg-slate-400"
            studyHour={2}
          ></Tag>
        )
      }
    }

    return (
      <a
        onClick={(e) => StudyScoreView(e)}
        className={"border border-slate-900 hover:bg-slate-400 container"}
      >
        <div key={index}>
          <div className={"border-b border-slate-900"}>{index}</div>
          <div>{studyDay()}</div>
        </div>
      </a>
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

const StudyScoreView = (event: React.MouseEvent<HTMLAnchorElement>) => {
  event.preventDefault()
  console.log("test")
  //TODO:supabaseからユーザーの当日の実績データを取得する
}
