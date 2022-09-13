import { GET_BOOKING_DETAILS_ERROR, GET_BOOKING_DETAILS_SUCCESS, LOG_IN_ERROR, LOG_IN_SUCCESS } from "../core/constants/action-types";

const initialState={
   booking:
[]
    ,
    error:null
}



export const getbookingdetailsReducer=(state=initialState,action)=>{

    switch(action.type){
        case GET_BOOKING_DETAILS_SUCCESS:{
            state= {
                ...state,
                booking: action.payload,
                 //result: action.result
            }}
            break;
            case GET_BOOKING_DETAILS_ERROR:{
                state= {
                    ...state,
                    error: action.error
                }
            }
            
   
    }
    return state ;

}