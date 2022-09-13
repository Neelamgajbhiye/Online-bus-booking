import React from 'react'
import useForm from '../hooks/useForm';
import Input from './Input';

function PassengerDetails({seatNumber}) {
    const formPassengerDetails = () => {

        console.log("Callback function when form is submitted!");
        console.log("Form Values ", values);
        const passenger={
            name:values.name,email:values.email,number:values.number,gender:values.gender
        };
        console.log(passenger);

    }



    const {handleChange, values,errors,handleSubmit} = useForm(formPassengerDetails);
  return (
    <form onSubmit={handleSubmit}  style={{border: '1px solid'}}>
        <h6>SEAT NO:-{seatNumber}</h6>
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
              <Input type='radio' name='gender' label='Male' placeholder='choose gender' value='Male' required={true} onAction={(e)=>handleChange(e)}/>
              <Input type='radio' name='gender' label='Female' placeholder='choose gender' value='Female' required={true} onAction={(e)=>handleChange(e)}/>
              {
        errors.gender && <span className='danger'>{errors.gender}</span>
      }
              </div>
                
            </form>
  )
}

export default PassengerDetails