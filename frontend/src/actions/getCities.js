import axios from "../core/config/axios"
import { GET_CITIES_ERROR, GET_CITIES_SUCCESS } from "../core/constants/action-types"
import { API_LINKS } from "../core/constants/API_URLS"

export const getCities=()=>{
    return(dispatch) => {
    axios.get(API_LINKS.GET_CITIES_URL).then((response)=>{
        console.log(response.data);
        dispatch({
            type:GET_CITIES_SUCCESS,
            payload:response.data
        })
    }) .catch((error) => 
    {
        dispatch({
            type:GET_CITIES_ERROR,
            error: error
        })
    })
}}