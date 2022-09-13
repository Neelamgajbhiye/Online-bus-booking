import axios from "../core/config/axios"
import { GET_BOOKING_DETAILS_ERROR, GET_BOOKING_DETAILS_SUCCESS } from "../core/constants/action-types"
import { API_LINKS } from "../core/constants/API_URLS"

export const getbookingdetails=()=>{
    return(dispatch) => {
    axios.get(API_LINKS.GET_BOOKING_DETAILS_URL).then((response)=>{
        console.log(response.data);
        
        dispatch({
            type:GET_BOOKING_DETAILS_SUCCESS,
            payload:response.data
        })
    }) .catch((error) => 
    {
        dispatch({
            type:GET_BOOKING_DETAILS_ERROR,
            error: error
        })
    })
}}