//import * as actionTypes from "./actionTypes";
import axios from "../core/config/axios";
import { SIGN_UP_ERROR, SIGN_UP_SUCCESS } from "../core/constants/action-types";
import { API_LINKS } from "../core/constants/API_URLS";
import { Login } from "./loginAction";


export const addUser = (values) => {
  console.log("heloooo");
  const result='Sign in Successfull'

//dispatch(Login(values))


  return (dispatch) => {
    axios.post(API_LINKS.REGISTER_URL,{ name:values.name,
        email:values.email, 
        password:values.password,
        number:values.number,
       gender:values.gender,
       date:values.dateofbirth
       })
     .then((response) => {
        dispatch({
            type:SIGN_UP_SUCCESS,
            payload:values,
            result:result
        })
         console.log(">> User Added successfully");
         console.log(values);
         //setRes(true)
 
     })
     .catch((error) => {
      dispatch({
        type:SIGN_UP_ERROR,
        //payload:values,
        error:error
    })
     })
   
}
};


