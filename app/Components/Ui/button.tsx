'use client'
type Props = {
    className?: string | undefined;
    Text:string ;
    onClick: () => void | undefined;
    //TODO:ボタンパターンを決める
}

export const Button = (props:Props) => {
    const buttonStyle = ()=>{
        if(props.className !== undefined){
            return props.className;
        }else{
            return "bg-yellow-400 hover:bg-yellow-500 shadow-yellow-900 shadow-sm hover:shadow-inner w-fit border-2 rounded border-yellow-400 px-2";
        }
    }
    return (
        <button className={buttonStyle()} onClick={props.onClick}>
            {props.Text}
        </button>
    )
}