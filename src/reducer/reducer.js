const initialState=[]

 const reducer=(state=initialState,action)=>{
    switch(action.type){
        case "SEND_MESSAGE":
            var data={title:"message",body:"Hi There"}
            state=[...state,data]
            return state
         case "GET_DATA":
            state=action.payload
            return state  
            default:
                return state
    }


 }
 export default reducer