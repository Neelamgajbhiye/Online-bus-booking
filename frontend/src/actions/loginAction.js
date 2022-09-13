//import * as actionTypes from "./actionTypes";
import axios from "../core/config/axios";
import { LOG_IN_ERROR, LOG_IN_SUCCESS } from "../core/constants/action-types";
import { API_LINKS } from "../core/constants/API_URLS";


export const Login = (values) => {
  console.log("LogIN>>>>>>>>>>>>>>>>>");
  const result="";
  const newemail='';
  return(dispatch)=>{
    console.log("vvvgvghhhhh")
    axios.post(API_LINKS.LOGIN_URL, { email:values.email})
    .then((response) => {
      console.log(response.data);
      const email=response.data.email;
      const pwd=response.data.user.password;
      console.log(email+"email");
      localStorage.setItem("loggedInUser", JSON.stringify("email"));
      dispatch({
        type:LOG_IN_SUCCESS,
        payload:response.data,

    })
      if(JSON.stringify(email)===values.email ){
      if(JSON.stringify(pwd)===values.password){
        console.log(response.data);
       result="login successful";
       newemail=email;

  
    
      }
      else{
        result="login failed";
          dispatch({
      type:LOG_IN_ERROR,
      error:result
  })
      }
      }})
   
    
    
  
    .catch((error) => {
      console.log(error.response);
      dispatch({
        type: LOG_IN_ERROR,
        error:error
    })
    })
    
   
  }
};


