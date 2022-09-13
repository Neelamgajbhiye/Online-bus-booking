import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function BusDetails({bus,index}) {
const navigate=useNavigate();
const[booktext,setBooktext] =useState('Book');
//console.log(props);
    let renderSeats=(key)=>{
        navigate('/BookSeats',{state:{index:index,seatArray:bus.seatArray}});
    }
    const pickup=bus.pickupPoints;
  return (
    <tbody>
    <tr>
       <td>{bus.companyName}</td>
        <td>{bus.busType}</td>
       <td>{bus.busNumber}</td>
      <td>{bus.pickupPoints}</td>
        <td>7:00</td>
        <td  >12:30</td>
        <td data-bs-toggle="tooltip" data-bs-placement="left" title={bus.droppingPoints}>{bus.droppingPoints}</td>
        <td>{bus.pricePerSeat}</td>
        <td><button onClick={()=>renderSeats(index)} className="btn-sm btn-block btn-all"
        onMouseEnter={() => setBooktext("  "+bus.availableSeats+"  ")}
        onMouseLeave={() => setBooktext('Book')}
        >{booktext}</button></td>
    </tr>
    </tbody>
  )
}

export default BusDetails