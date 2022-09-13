import { GET_CITIES_ERROR, GET_CITIES_SUCCESS, LOG_IN_ERROR, LOG_IN_SUCCESS } from "../core/constants/action-types";

const initialState={
    cities:
[]
    ,
    error:null
}



export const getcitiesReducer=(state=initialState,action)=>{

    switch(action.type){
        case GET_CITIES_SUCCESS:{
            state= {
                ...state,
                cities: action.payload,
                 //result: action.result
            }}
            break;
            case GET_CITIES_ERROR:{
                state= {
                    ...state,
                    error: action.error
                }
            }
            
   
    }
    return state ;

}