import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import BusDetails from './BusDetails'

function AvailableBuses() {
  const { state } = useLocation();
  console.log(state);
const [Busdetails,setBusDetails] =useState(state.buses);
//   useEffect(() => {
//     if (state) {
//         //setIsEdit(true)
//         setBusDetails(state.buses)
//     }
// }, [])

  let  renderBusDetails=()=>{
        return Busdetails.map((bus,i)=>{
          return <BusDetails bus={bus} key={i} index={i}/>
        })
        
        
       
    }
  return (
    <div className='container'>
      <div className='row'>
  <div className='col-4'><label>From:</label><h6>{localStorage.getItem('fromCity')}</h6> </div>
  <div className='col-4'><label>To:</label><h6>{localStorage.getItem('toCity')}</h6> </div>
  <div className='col-4'><label>Date Of Journey:</label><h6>{localStorage.getItem('dateofjourney')}</h6> </div>
</div>
<hr/>
        <div className='row'>
      <table className="table">
          <thead className="thead-dark">
              <tr className='bg-dark text-light'>
                <th>Bus Name</th>
                  <th>Bus Type</th>
              <th>Bus Number</th>
              <th>Pickup Points</th>
              <th>Departure</th>
              <th>Arrival</th>
                <th>Dropping Points</th>
              <th>Fare</th>
              <th>Book</th>
              
             
      
              
            
              </tr>
          </thead>
         
              {renderBusDetails()}
          
      </table>
       </div> 
    </div>
  )
}

export default AvailableBuses