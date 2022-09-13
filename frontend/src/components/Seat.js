import React from 'react'
import  './Tab.css'
function Seat({value,onClick}) {
  return (
    <div className='seat'>
         <input type='checkbox' value={value}
                        id={value}
                        className='btn btn-sucess btn-seat' 
                        style={{
                          // padding:'1px',
                        // margin:'2px',
                        textAlign:'center',
                        border:'1px solid',
                        
                    }}
                    
                        onClick={(e)=>onClick(e)}
                        >
                            {/* {value}*/}
                            </input> 
                            <label htmlFor={value}>{value}</label>
    </div>
  )
}

export default Seat