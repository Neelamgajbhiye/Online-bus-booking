import React from 'react';

const Input = (props) => {
    let{name,label,placeholder,onAction,type,value,required}=props;
    return (
        <div className='row'>
            <div className='col'>
            <label>{label}</label>
            </div>
          <div className='col'>
          <input name={name} type={type} placeholder={placeholder} value={value} 
         required={required} style={{margin:'2px', padding:'2px'}}
            onChange={(e)=>{onAction(e)}}/>
          </div>
         
        </div>
    );
};

export default Input;