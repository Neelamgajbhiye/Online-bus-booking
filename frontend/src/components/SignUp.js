import React, { useEffect, useState } from 'react'
import axios from '../core/config/axios'
import Input from './Input';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { API_LINKS } from '../core/constants/API_URLS';
import {useValidateForm} from '../hooks/Validation'
import { FORM_ERROR_MESSAGES, FORM_LABELS } from '../core/constants/form-elements';
import useForm from '../hooks/useForm';
import { addUser } from '../actions/addUser';
import { useDispatch, useSelector } from 'react-redux';
//import { ADDUSER_URL, BASE_URL } from '../core/constants/API_URLS';


function SignUp() {
  const navigate = useNavigate()

  const LogInData = useSelector(state => state.LoginReducer.payload,
    );
  
    const dispatch = useDispatch();
  const formSignUp = () => {

    console.log("Callback function when form is submitted!");
    console.log("Form Values ", values);
    let action= addUser(values);
        dispatch(action);
        navigate('/SignUp');
//console.log(SignUpData);
   
    // axios.post(API_LINKS.REGISTER_URL,{ name:values.name,
    //    email:values.email, 
    //    password:values.password,
    //    number:values.number,
    //   gender:values.gender,
    //   date:values.dateofbirth
    //   })
    // .then((response) => {
    //     console.log(">> User Added successfully");
    //     console.log(response);
    //     //setRes(true)

    // })
    // .catch((error) => {
    //     console.log(error);
    // })


 

  }
  const {handleChange, values,errors,handleSubmit} = useForm(formSignUp);
  
  
  return (
    <div style={{marginTop:'50px'}}>
    <div className='card App' >
        <div className='card-header bg-dark text-light'>SignUp</div>
        <div className='card-body'>
            <form onSubmit={handleSubmit}>
              <div>
              <Input type='text' name='name' label='FullName' placeholder='Enter your name' required={true} onAction={(e)=>handleChange(e)}/>
              {
        errors.name && <span className='danger'>{errors.name}</span>
      }
              </div>
              <div>

              </div>
                
                <div>
                <Input type='email' name='email' label='Email ID' placeholder='Enter your email address' required={true} onAction={(e)=>handleChange(e)}/>
                {
        errors.email && <span className='danger'>{errors.email}</span>
      }
                </div>
               <div>
               <Input type='number' name='number' label='Number' placeholder='Enter your mobile number' required={true} onAction={(e)=>handleChange(e)}/>
               {
        errors.number && <span className='danger'>{errors.number}</span>
      }
               </div>
               <div>
               <Input type='password' name='password' label='Password' placeholder='Enter password' required={true} onAction={(e)=>handleChange(e)}/>
               {
        errors.password && <span className='danger'>{errors.password}</span>
      }
               </div>
              <div>
              <Input type='date' name='dateofbirth' label='Date Of Birth' placeholder='enter date' required={true} onAction={(e)=>handleChange(e)}/>
              {
        errors.dateofbirth && <span className='danger'>{errors.dateofbirth}</span>
      }
              </div>
              <div>
              <Input type='radio' name='gender' label='Male' placeholder='choose gender' value='Male' required={true} onAction={(e)=>handleChange(e)}/>
              <Input type='radio' name='gender' label='Female' placeholder='choose gender' value='Female' required={true} onAction={(e)=>handleChange(e)}/>
              {
        errors.gender && <span className='danger'>{errors.gender}</span>
      }
              </div>
                
               
<hr/>
                <button type='submit' className='btn-all' >Create Account</button>


            </form>
        </div>
        <div className='card-footer bg-dark text-light'>
        
                {FORM_LABELS.AlREDY_REGISTER}
                    <span className="App-link">
                        <Link to="/" className="App-link"> {FORM_LABELS.SIGN_IN}</Link>
                    </span>
              
 </div> 
    </div></div>
  )
}

export default SignUp