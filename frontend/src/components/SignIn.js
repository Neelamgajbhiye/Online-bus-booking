import axios from '../core/config/axios'
import React, { useEffect, useState } from 'react'
import { API_LINKS } from '../core/constants/API_URLS';
import { useValidateForm } from '../hooks/Validation';
import Input from './Input';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FORM_ERROR_MESSAGES, FORM_LABELS } from '../core/constants/form-elements';
import useForm from '../hooks/useForm';
import { Login } from '../actions/loginAction';
import { useDispatch, useSelector } from 'react-redux';

function SignIn() {
  const navigate = useNavigate()
  const asd=()=>navigate('/SearchBuses');
  const dispatch = useDispatch();
  const LogInData = useSelector((state) => state.LoginReducer);
  const formLogin = () => {

    console.log("Callback function when form is submitted!");
    //console.log("Form Values ", values);

let action=Login(values)
    dispatch(action);
    console.log(LogInData);
    setResults("You Have Successfully Registered");
    navigate('SearchBuses')

  }
  const {handleChange, values,errors,handleSubmit} = useForm(formLogin);
  const [result,setResults] =useState('');
  
  return (
    <div className="container">
    <div className='card App'>
        <div className='card-header bg-dark text-light'>
        SignIn
        </div>
        <div className='card-body'>
            <form onSubmit={handleSubmit}>
            <Input type='email' name='email' label='Email ID' placeholder='Enter your email address' required={true} onAction={(e)=>handleChange(e)}/>
            {
        errors.email && <span className='danger'>{errors.email}</span>
      }
            {/* <span className="danger danger-alert">{validEmail?FORM_ERROR_MESSAGES.EMAIL_REQUIRED :" "}</span> */}
            <Input type='password' name='password' label='Password' placeholder='Enter password' required={true} onAction={(e)=>handleChange(e)}/>
            {
        errors.password && <span className="danger">{errors.password}</span>

      }
            {/* <input type='text' placeholder='Email ID' style={{margin:'5px'}}/> */}
            {/* <input type='password' placeholder='password' style={{margin:'5px'}}/> */}
            <div>
              
           
            </div>
           <hr/>
            <button type='submit' className='btn-all' >Log In</button>
            
            
            </form>
           
        </div>
        <div className='card-footer bg-dark text-light'>
                        {FORM_LABELS.NEED_AN_ACCOUNT}
                        <span className="App-link">
                            <Link to="/SignUp" className="App-link">{FORM_LABELS.SIGN_UP}</Link>
                            
                        </span>
                        <span >
                {result?result:""}</span>
                    </div>
              
        </div></div>
  )
}

export default SignIn