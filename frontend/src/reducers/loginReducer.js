import { LOG_IN_ERROR, LOG_IN_SUCCESS } from "../core/constants/action-types";

const initialState={
    user:{
        name:'guest',
        email:'guest@email.com', 
    },
       result:'result',
       error:null
}



export const LoginReducer=(state=initialState,action)=>{

    switch(action.type){
        case LOG_IN_SUCCESS:{
            state= {
                ...state,
                user: action.payload,
                 result: action.result
            }}
            break;
            case LOG_IN_ERROR:{
                state= {
                    ...state,
                    error: action.error
                }
            }
            
   
    }
    return state ;

}