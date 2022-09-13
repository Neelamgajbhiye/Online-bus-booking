import React, { useState } from 'react'
import {omit} from 'lodash'
import moment from "moment";
import{ FORM_ERROR_MESSAGES, REGULAR_EXPRESSIONS} from '../core/constants/form-elements'
const useForm = (callback) => {
    
    //Form values
    const [values, setValues] = useState({});
    //Errors
    const [errors, setErrors] = useState({});



    const validate = (event, name, value) => {
        //A function to validate each input values

        switch (name) {
            case 'name':
                if(value.length <= 3){
                    // we will set the error state

                    setErrors({
                        ...errors,
                        username:FORM_ERROR_MESSAGES.NAME_ERROR
                        
                    })
                }else{
                    // set the error state empty or remove the error for username input

                    //omit function removes/omits the value from given object and returns a new object
                    let newObj = omit(errors, "name");
                    setErrors(newObj);
                    
                }
                break;
        
            case 'email':
                if(
                    !REGULAR_EXPRESSIONS.EMAIL_REGEX.test(value)
                ){
                    setErrors({
                        ...errors,
                        email:FORM_ERROR_MESSAGES.EMAIL_ERROR
                    })
                }else{

                    let newObj = omit(errors, "email");
                    setErrors(newObj);
                    
                }
            break;
            
            case 'password':
               
                if(
                    !REGULAR_EXPRESSIONS.PASSWORD_REGEX.test(value)
                ){
                    setErrors({
                        ...errors,
                        password:FORM_ERROR_MESSAGES.PASSWORD_ERROR
                    })
                }else{

                    let newObj = omit(errors, "password");
                    setErrors(newObj);
                    
                }
            break;

            case 'number':
                if(value.length<10)
                {
                    setErrors({
                        ...errors,
                        number:FORM_ERROR_MESSAGES.MOBILE_NO
                    })
                }else{
                    // set the error state empty or remove the error for username input

                    //omit function removes/omits the value from given object and returns a new object
                    let newObj = omit(errors, "number");
                    setErrors(newObj);
                    
                }
                break;

            case 'dateofbirth':
                const age = moment().diff(moment(value),'years', true);

                if (age < 18){
                    setErrors(
                     {...errors,
                        dateofbirth:FORM_ERROR_MESSAGES.DATE_OF_BIRTH
                    }
                    )
                    } else{
                    // set the error state empty or remove the error for username input

                    //omit function removes/omits the value from given object and returns a new object
                    let newObj = omit(errors, "dateofbirth");
                    setErrors(newObj);
                    
                }
                break;

            case "dateofjourney":
                console.log(moment())
                //const day = moment(value).diff(moment(),'years',true);
                console.log(value);
                if (!value){
                    setErrors(
                     {...errors,
                        dateofbirth:'select new date'
                    }
                    )
                    } else{
                    // set the error state empty or remove the error for username input

                    //omit function removes/omits the value from given object and returns a new object
                    let newObj = omit(errors, "dateofjourney");
                    setErrors(newObj);
                    
                }
                break;

            case 'from_city_selected':
                if (!value){
                    setErrors(
                     {...errors,
                        from_city_selected:'select city'
                    }
                    )
                    } else{
                    // set the error state empty or remove the error for username input

                    //omit function removes/omits the value from given object and returns a new object
                    let newObj = omit(errors, "from_city_selected");
                    setErrors(newObj);
                    
                }
                break;

                case 'to_city_selected':
                    if (!value){
                        setErrors(
                         {...errors,
                            to_city_selected:'select city'
                        }
                        )
                        } else{
                        // set the error state empty or remove the error for username input
    
                        //omit function removes/omits the value from given object and returns a new object
                        let newObj = omit(errors, "to_city_selected");
                        setErrors(newObj);
                        
                    }
                    break; 
            
            default:
                break;
        }
    }

  //A method to handle form inputs
    const handleChange = (event) => {
        //To stop default events    
        event.persist();

        let name = event.target.name;
        let val = event.target.value;

        validate(event,name,val);
        //Let's set these values in state

        setValues({
            ...values,
            [name]:val,
        })

    }


    const handleSubmit = (event) => {
        if(event) event.preventDefault();

        if(Object.keys(errors).length === 0 && Object.keys(values).length !==0 ){
            callback();

        }else{
            console.log( Object.keys(values));
            alert("There is an Error!");
        }
    }


    return {
        values,
        errors,
        handleChange,
        handleSubmit,
        
    }
}

export default useForm
