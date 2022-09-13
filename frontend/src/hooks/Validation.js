import moment from "moment";
import { FORM_ERROR_MESSAGES, REGULAR_EXPRESSIONS } from "../core/constants/form-elements";

export const useValidateForm=(user)=>{
    let {name,email,password,dateofbirth,number}=user;


    let validateName=()=>{
        if(name===''|| name===" "|| name===null){
            return false;
        }
        return true;
    }

    let validateEmail=()=>{
        if(email===''|| email===" "){
            return false;
        }
        return true;
    }

    let validatePassword=()=>{
        if(password===''|| password===" "){
            return false;
        }
        return true;
        // if(password===''|| password===" "){
        //     return FORM_ERROR_MESSAGES.PASSWORD_REQUIRED;
        // }
        // else if(password.length<4)
        // {
        //     return FORM_ERROR_MESSAGES.PASSWORD_REQUIRED_LENGTH;
        // }
        // return true;
    }

    let validateMobileNumber=()=>{
        if(!REGULAR_EXPRESSIONS.PHONE_REGEX.test(number)){
            return false;
        }
    
        return true;
        
    }

    let validateDOB=()=>{
        const age = moment().diff(moment(dateofbirth),'years', true);

        if (age < 18){
           return false;
        } else {
            return true;
        }
    }

   return{
       validateName,validateEmail,validateMobileNumber,validatePassword,validateDOB
   }
}