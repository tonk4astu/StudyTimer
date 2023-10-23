type tag = {
  tagName: string
  tagColor: string
  studyHour: number
}

const Tag = (props: tag) => {
  return (
    <div
      className={`${props.tagColor} flex border border-slate-900 rounded-lg`}
    >
      {props.tagName}
      <div className={"border m-w-[2rem] border-slate-900 rounded-full"}>
        {props.studyHour}
      </div>
    </div>
  )
}

export default Tag
