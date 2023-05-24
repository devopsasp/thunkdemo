import axios from 'axios'
export function sendMessage()
{
    return {
        type :"SEND_MESSAGE"
    }
}
export function getData(data)
{
    return{
        type:"GET_DATA",
        payload:data
    }
}

export function incrementAsync()
{
    console.log("message ")
    return dispatch=>{
        setTimeout(()=>{
            dispatch(sendMessage())
        },2000)
    }
}
export function getdataasync()
{
    return dispatch=>{
        axios.get("https://jsonplaceholder.typicode.com/posts").then((e)=>{
          console.log(e.data)
          dispatch(getData(e.data))
        })
    }
}