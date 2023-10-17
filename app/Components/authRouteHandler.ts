import useStore from '@/Components/Store/loginStore'

type Props = {
    PostUrl:string
    RequestBody?:{email:string,password:string}
}

export const authRouteHandler = async(props:Props)=>{
    if(props.RequestBody){
        await fetch(props.PostUrl,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(props.RequestBody)
            
        }).then((res)=>{
            if(res.ok){
                useStore.setState({loginUser:{MailAddress:'',id:''}})
            }
        })
    }else{
        await fetch(props.PostUrl,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            }
            
        }).then((res)=>{
            if(res.ok){
                useStore.setState({loginUser:{MailAddress:'',id:''}});
            }
            console.dir(res)
        })
    }
}