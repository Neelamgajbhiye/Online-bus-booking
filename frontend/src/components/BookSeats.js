import React, { useEffect, useState } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { FaAngleDoubleDown } from "react-icons/fa";
import axios from '../core/config/axios';
import useForm from '../hooks/useForm';
import Input from './Input';
import './Tab.css';
import PassengerDetails from './PassengerDetails';
import Seat from './Seat';

function BookSeats() {
    //let count=0;
    const {state}=useLocation();
const Navigate=useNavigate();

    const [name, setName] = useState([])
    const [arrowDown, setArrowDown] = useState(false)
    const [gender, setGender] = useState([])
    const [reservedSeat, setReservedSeat] = useState(["1A", "2A", "2B", "3B", "4A", "5C", "6A", "7B", "7C", '8B', "9B", "9C"])
    const [seatNumber, setSeatnumber] = useState([])
    
    //const[color,setColor]=useState('');
    let green = "#39D1B4";
    let yellow = "#FFD712";
  //   const formPassengerDetails = (e) => {

  //     console.log("Callback function when form is submitted!");
  //     console.log("Form Values ", values);
  //     console.log(e);
  //     const newpassenger={
  //         name:values.name,email:values.email,number:values.number,gender:values.gender
  //     };

  //     setPassengerList([...passengerList],newpassenger)
  //     console.log(passengerList);

  // }



    //const {handleChange, values,errors,handleSubmit} = useForm(formPassengerDetails);


   
    const [buttonColor, setButtonColor] = useState();
    let [count,setCount]= useState({count:0,id:''});
//const[seatNumber,setSeatNumber] = useState('');
const[disabled,setDisabled]=useState(false);
const [passDetails, setPassDetails] = React.useState({name:'',seatNumber:'',gender:''});
const[passengerList,setPassengerList] = useState([passDetails]);
const[seatArray,setSeatArray] = useState([
    {seatNumber:'1A',isBooked:"available"}, { seatNumber:'1B',isBooked:"unavailable"}, {seatNumber: '1C',isBooked:"available"},
    {seatNumber:'2A',isBooked:"unavailable"},{seatNumber: '2B',isBooked:"available"}, {seatNumber: '2C',isBooked:"available"},
    {seatNumber: '3A',isBooked:"available"},{seatNumber: '3B',isBooked:"available"}, {seatNumber: '3C',isBooked:"available"},
    {seatNumber:'4A',isBooked:"unavailable"}, { seatNumber:'4B',isBooked:"unavailable"}, {seatNumber: '4C',isBooked:"unavailable"},
    {seatNumber:'5A',isBooked:"available"},{seatNumber: '5B',isBooked:"available"}, {seatNumber: '5C',isBooked:"unavailable"},
    {seatNumber: '6A',isBooked:"unavailable"},{seatNumber: '6B',isBooked:"available"}, {seatNumber: '3C',isBooked:"available"},
    {seatNumber:'7A',isBooked:"available"}, { seatNumber:'7B',isBooked:"unavailable"}, {seatNumber: '7C',isBooked:"available"},
    {seatNumber:'8A',isBooked:"available"},{seatNumber: '8B',isBooked:"unavailable"}, {seatNumber: '8C',isBooked:"available"},
    {seatNumber: '9A',isBooked:"available"},{seatNumber: '9B',isBooked:"unavailable"}, {seatNumber: '9C',isBooked:"unavailable"},
    {seatNumber:'10A',isBooked:"unavailable"}, { seatNumber:'10B',isBooked:"available"}, {seatNumber: '10C',isBooked:"available"}
   
    
   
])

// var passengerArray = [];
// for (var ele = 0; ele < seatArray.length; ele++) {
//   passengerArray.push({
//     name: "",
//     email: "",
//     gender: "",
//   });

// const handlePassGender = (e, indexNo) => {
//     const newArr = [...passDetails];
//     newArr[indexNo]["gender"] = e.target.value;
//     setPassDetails(newArr);
//   };
//   const handlePassName = (e, indexNo) => {
//     const newArr = [...passDetails];
//     newArr[indexNo]["name"] = e.target.value;
//     setPassDetails(newArr);
//   };

//   const handlePassAge = (e, indexNo) => {
//     const newArr = [...passDetails];
//     newArr[indexNo]["age"] = e.target.value;
//     setPassDetails(newArr);
//   };

// useEffect(() => {
//   seatArray.map((seat, i) => {
//       if(seat.isBooked==='unavailable')
//       {
//           setDisabled(true);
//       }
      
//   })

// }, [seatArray])

// function handleDiasbleSeats(e){
//     console.log(e);
//     e.target.disabled=false;
//     return false;
// }



// function SeatAvailableArray(){
//     let amt = 0;
//     let count = 0;
//     let row = 0;

//     const arrayBlock = (seatArray, x) => {
//         const array = seatArray.slice();
//         const blocks = [];
//         while (array.length) blocks.push(array.splice(0, x));
//         return blocks;
//     };

//     if(seatArray.length >= 3){row = 3}else{row = seatArray.length}

//     const countAmount = () => {
//         count = amt++;
//     };
  

//     return (
     
//         arrayBlock([...Array(seatArray.length).keys()], row).map((row, i) => ( 
//             <div key={i} className="row cabin fuselage" 
//             style={{margin:'2px',textAlign:'center',marginTop:'10px'}} >
//                 {row.map((value, i) => (
//                        <form onChange={e => getSeatNumber(e)}>
//                        {/* <ol className="cabin fuselage"> */}
//                      <div key={i} className="row" style={{margin:'2px',textAlign:'center'}} >
//                     {countAmount()}
//                          <div className='col-3'> 
//                            <Seat
//                             value={seatArray[count].seatNumber}
//                             onClick={(e)=>handleColorChange(e)}
//                             ></Seat>   
                                               
//                         </div> 
                 
//                     </div>
                
//                     </form>
//                 ))}
           
//             </div>
//         ))
//     )



// }





const getSeatNumber = (e) => {  
  let newSeat = e.target.value
  if (reservedSeat.includes(newSeat)) {
      e.disabled = true
      if (seatNumber.includes(newSeat)) {
          setSeatnumber(seatNumber.filter(seat => seat !== newSeat))
      }
  } else {
      setSeatnumber([...seatNumber, newSeat])
      setReservedSeat([...reservedSeat, newSeat])
          console.log(seatNumber)
  }
  console.log(seatNumber)
}
const handleGender = (e, seatNo) => {
  const { value } = e.target
  setGender(gender.concat(value))
  // console.log(value)
  // setPassengers(prevState => ({ ...prevState, SeatNo: seatNo, Gender: value }))
}
const handlePassengerName = (e, seatNo) => {
  //e.preventDefault()
  let value = e.target.value
  // console.log(value)
  if (!value) {
      return (setName("name is required"))
  } else {
      setName(name.concat(value))
      // setPassengers(prevState => ({ ...prevState, SeatNo: seatNo, Name: value }))
  }
} 
const handleSubmitDetails = e => {
  e.preventDefault()
  //setArrowDown(true)

  localStorage.setItem("reservedSeats", JSON.stringify(seatNumber))
  localStorage.setItem("nameData", JSON.stringify(name))
  console.log(name)
  console.log(gender)
  //let newpass=[...passengerList,];
  //setPassengerList(newpass);
    if(seatNumber!='' && name!='' && gender!='' )
    {





      Navigate('/PaymentDetails', {state:{seatNumber:seatNumber,name:name,gender:gender}})
    }

    else{
      alert('please select a seat')
    }
 
}

// const handleChange = (event) => {
//   //To stop default events    
//   //event.persist();

//   let name = event.target.name;
//   let val = event.target.value;

//   let newpassenger=[...passDetails,{name:}]
//   let newpass=[...passengerList,{[name]:val}];
//   setPassengerList(newpass);
// //   //validate(event,name,val);
// //   //Let's set these values in state
// // setPassDetails({[name]:val})
// // console.log(passDetails);
// //   setPassengerList(
// //       [...passengerList],
// //       passDetails
//  // )

//   console.log(passengerList);

// }






const renderPassengerData = (seatArray) => {
  return seatArray.map((seat, idx) => {
      return (
        <form  key={idx} className='fuselage ' >
            <div className='card '>
                <div className='card-header bg-dark text-light'>
                <h6>SEAT NO:-{seat}</h6>
                    </div>
                    <div className="card-body">
                    <div>
                        <label>Name:</label>
            <input type='text' name={seat+" name"} label='FullName' placeholder='Enter your name' required onBlur={(e)=>handlePassengerName(e)}/>
            </div>
         
              
            
            <div>
                <label>Choose Gender:</label>
            <Input type='radio' name='gender' label='Male' placeholder='choose gender' value='Male' required={true} onAction={(e)=>handleGender(e)}/>
            <Input type='radio' name='gender' label='Female' placeholder='choose gender' value='Female' required={true} onAction={(e)=>handleGender(e)}/>
            {/* {
      errors.gender && <span className='danger'>{errors.gender}</span>
    } */}
            </div>
                    </div>
            </div>
      
          
              
          </form>
          )

  })


}
    
  return (
    
    <div className='container'>
<div className='row'>
  <div className='col-4'><label>From:</label><h6>{localStorage.getItem('fromCity')}</h6> </div>
  <div className='col-4'><label>To:</label><h6>{localStorage.getItem('toCity')}</h6> </div>
  <div className='col-4'><label>Date Of Journey:</label><h6>{localStorage.getItem('dateofjourney')}</h6> </div>
</div>
    <div className='row'>

    
    {/* <div className="column1" style={{alignItems:'center'}}>
        {<div className="row md-5" style={{marginLeft:"15px",textAlign:'center',marginTop:'15px',marginBottom:'0px'}}>
            <div className="col-1" style={{textAlign:'center'}}><h6 style={{textAlign:'center',padding:'2px'}}>U</h6></div>
            <div className="col-1" style={{textAlign:'center'}}><h6  style={{textAlign:'center',padding:'2px'}}>L</h6></div>
            <div className="col-1" style={{textAlign:'center',marginLeft:"5px"}}><h6  style={{textAlign:'center',padding:'2px'}}>U</h6></div>
            <div className="col-1" style={{textAlign:'center'}}><h6  style={{textAlign:'center',padding:'2px'}}>L</h6></div>
        </div> }
        <div >


          
          {SeatAvailableArray()}
          
       
        </div>
        
   
    </div> */}
    {/* <div className='col'> */}
    <div className="column1">
                    <div className="plane">
                        <form onChange={e => getSeatNumber(e)}>
                            <ol className="cabin fuselage">
                                <li className="row row--1">
                                    <ol className="seats" type="A">
                                        <li className="seat">
                                            <input type="checkbox" disabled value="1A" id="1A" />
                                            <label htmlFor="1A">1A</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" id="1B" value="1B" />
                                            <label htmlFor="1B">1B</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="1C" id="1C" />
                                            <label htmlFor="1C">1C</label>
                                        </li>
                                    </ol>
                                </li>
                                <li className="row row--2">
                                    <ol className="seats" type="A">
                                        <li className="seat">
                                            <input type="checkbox" disabled value="2A" id="2A" />
                                            <label htmlFor="2A">2A</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" disabled value="2B" id="2B" />
                                            <label htmlFor="2B">2B</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="2C" id="2C" />
                                            <label htmlFor="2C">2C</label>
                                        </li>

                                    </ol>
                                </li>
                                <li className="row row--3">
                                    <ol className="seats" type="A">
                                        <li className="seat">
                                            <input type="checkbox" value="3A" id="3A" />
                                            <label htmlFor="3A">3A</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" disabled value="3B" id="3B" />
                                            <label htmlFor="3B">3B</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="3C" id="3C" />
                                            <label htmlFor="3C">3C</label>
                                        </li>

                                    </ol>
                                </li>
                                <li className="row row--4">
                                    <ol className="seats" type="A">
                                        <li className="seat">
                                            <input type="checkbox" disabled value="4A" id="4A" />
                                            <label htmlFor="4A">4A</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="4B" id="4B" />
                                            <label htmlFor="4B">4B</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="4C" id="4C" />
                                            <label htmlFor="4C">4C</label>
                                        </li>

                                    </ol>
                                </li>
                                <li className="row row--5">
                                    <ol className="seats" type="A">
                                        <li className="seat">
                                            <input type="checkbox" value="5A" id="5A" />
                                            <label htmlFor="5A">5A</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="5B" id="5B" />
                                            <label htmlFor="5B">5B</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" disabled value="5C" id="5C" />
                                            <label htmlFor="5C">5C</label>
                                        </li>

                                    </ol>
                                </li>
                                <li className="row row--6">
                                    <ol className="seats" type="A">
                                        <li className="seat">
                                            <input type="checkbox" disabled value="6A" id="6A" />
                                            <label htmlFor="6A">6A</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="6B" id="6B" />
                                            <label htmlFor="6B">6B</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="6C" id="6C" />
                                            <label htmlFor="6C">6C</label>
                                        </li>

                                    </ol>
                                </li>
                                <li className="row row--7">
                                    <ol className="seats" type="A">
                                        <li className="seat">
                                            <input type="checkbox" value="7A" id="7A" />
                                            <label htmlFor="7A">7A</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" disabled value="7B" id="7B" />
                                            <label htmlFor="7B">7B</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" disabled value="7C" id="7C" />
                                            <label htmlFor="7C">7C</label>
                                        </li>

                                    </ol>
                                </li>
                                <li className="row row--8">
                                    <ol className="seats" type="A">
                                        <li className="seat">
                                            <input type="checkbox" value="8A" id="8A" />
                                            <label htmlFor="8A">8A</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" disabled value="8B" id="8B" />
                                            <label htmlFor="8B">8B</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="8C" id="8C" />
                                            <label htmlFor="8C">8C</label>
                                        </li>

                                    </ol>
                                </li>
                                <li className="row row--9">
                                    <ol className="seats" type="A">
                                        <li className="seat">
                                            <input type="checkbox" value="9A" id="9A" />
                                            <label htmlFor="9A">9A</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" disabled value="9B" id="9B" />
                                            <label htmlFor="9B">9B</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" disabled value="9C" id="9C" />
                                            <label htmlFor="9C">9C</label>
                                        </li>

                                    </ol>
                                </li>
                                <li className="row row--10">
                                    <ol className="seats" type="A">
                                        <li className="seat">
                                            <input type="checkbox" value="10A" id="10A" />
                                            <label htmlFor="10A">10A</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="10B" id="10B" />
                                            <label htmlFor="10B">10B</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="10C" id="10C" />
                                            <label htmlFor="10C">10C</label>
                                        </li>
                                    </ol>
                                </li>
                            </ol>
                        </form>
                    </div>
                </div>
    <div className="column2">
                    <div className="seatInfo">
                        <div className='scroll' >
                            {renderPassengerData(seatNumber)}
                            </div>
                        <div>
                          <form>
                          
              <button onClick={(e)=>handleSubmitDetails(e)} type='submit' className="btn-all seatBT">
                                Confirm Details
                            </button>
                          </form>
                            
                        </div>
                        
                    </div>
                </div>
    </div>
     </div>
  )
}

export default BookSeats