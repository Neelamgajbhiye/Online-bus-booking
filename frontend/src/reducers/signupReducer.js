import { SIGN_UP_ERROR, SIGN_UP_SUCCESS } from "../core/constants/action-types"

const initialState={
    user:{
        name:'guest',
        email:'guest@email.com', 
        password:"Guest@1234",
        number:'1234567889',
       gender:'female',
       date:'01-01-1990'},
       result:'result',
}



export const signupReducer=(state=initialState,action)=>{

    switch(action.type){
        case SIGN_UP_SUCCESS:
            state= {
                ...state,
                user: action.payload,
                                result: action.result
            }
             break;
             case SIGN_UP_ERROR:
                state= {
                    ...state,
                    user: action.payload,
                    error:action.error
                }
                 break;
    }
    
    return state 

}