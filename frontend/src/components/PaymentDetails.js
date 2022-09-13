import React, { useEffect,useState} from 'react';
import Cleave from 'cleave.js/react';

//import 'animate.css';

import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom'
//import Card from 'react-credit-cards'
import './payment.css'

import { getbookingdetails } from '../actions/getBookingDetails';
import Input from './Input';
//import { Document } from '@react-pdf/renderer';
//import MyDocument from './MyDocument';
//import { PDFViewer } from '@react-pdf/renderer';

function PaymentDetails() {
    const {state}=useLocation();
const dispatch=useDispatch();
useEffect(() => {
  dispatch(getbookingdetails());

//   return () => {
//     second
//   }
}, [])

const booking_details=useSelector(state=>state.getbookingdetailsReducer)
    console.log(booking_details);


    const [creditCardNum, setCreditCardNum] = useState('#### #### #### ####');
    const [cardType, setCardType] = useState('')
    const [cardHolder, setCardHolder] = useState('Your Full Name');
    const [expireMonth, setExpireMonth] = useState('MM');
    const [expireYear, setExpireYear] = useState('YYYY');
    const [pdfdata, setPDFData] = useState([]);
   // const [cardTypeUrl, setCardTypeUrl] = useState('https://logos-world.net/wp-content/uploads/2020/04/Visa-Logo.png');
    // const [flip, setFlip] = useState(null);
    
    const handleNum = (e) => {
      setCreditCardNum(e.target.rawValue);
      // console.log(e.target.value);
    }
  
    // const handleType = (type) => {
    //   setCardType(type);
    //   console.log(type);
  
    //   if(type === "visa") {
    //     setCardTypeUrl(imageUrls[0]);
    //     console.log("Visa")
    //   } else if(type === "mastercard") {
    //     setCardTypeUrl(imageUrls[1]);
    //     console.log("Mastercard")
    //   } else if(type === "discover") {
    //     setCardTypeUrl(imageUrls[2]);
    //     console.log("Discover")
    //   } else if(type === "amex") {
    //     setCardTypeUrl(imageUrls[3]);
    //     console.log("Amex")
    //   } else if(type === "diners") {
    //     console.log("Diners")
    //     setCardTypeUrl(imageUrls[4])
    //   } else if(type === "jcb") {
    //     console.log("JCB");
    //     setCardTypeUrl(imageUrls[5]);
    //   }
    // }
    
    const handleCardHolder = (e) => {
      setCardHolder(e.target.value);
    }
  
    const handleExpMonth = (e) => {
      setExpireMonth(e.target.value);
    }
  
    const handleExpYear = (e) => {
      setExpireYear(e.target.value);
    }
  









   const renderNamesOfPassenger = () => {

        let passArray = localStorage.getItem('nameData')
        let nameArray = JSON.parse(passArray)
        let seatArray = localStorage.getItem('reservedSeats')
        let seaArr = JSON.parse(seatArray)
        let passarray=[];
// nameArray.map((name,idx) =>{
//     setPDFData([...pdfdata],{name:name,seatNumber:seaArr[idx]});
// })

//console.log(passarray);
        if (passArray) {
            let nameArray = JSON.parse(passArray)
            return nameArray.map((name, idx) => {
                return <p key = { idx } > { name } </p>
            })
        }
    }

   const renderSeatNumbers = () => {
        let seatArray = localStorage.getItem('reservedSeats')

        if (seatArray) {
            let seaArr = JSON.parse(seatArray)
            return seaArr.map((seat, idx) => {
                return <p key = { idx } > { seat } </p>
            })
        }
    }

  const getSumTotal = () => {
        let count = 0
        let tax = 150
        let seatArray = localStorage.getItem('reservedSeats')
        if (seatArray) {
            let seaArr = JSON.parse(seatArray)
            for (let i = 0; i < seaArr.length; i++) {
                count++
            }
            return(<div>
                <hr className = 'hr3' />
                <p > { 1000 * count } </p> <p> +{tax} </p > <p> { 1000 * count + tax } </p>{' '} 
                </div>
          )
        }
    }

const handleSubmit=(e)=>
{
    e.preventDefault();

    alert('Submitted successfully')
}



  return (
    <div className='container' style={{marginTop:'50px'}}>
        <div className='row'>
            
<div className='col-6 cabin fuselage'> 
<div className='card sm bg-dark text-light'>
<h4 style={{margin:'2px'}}>Credit Card Details</h4> 
</div>

       {/* <div className="container"> */}
        <form id="form" onSubmit={handleSubmit}>
            {/* <div id="card" >
                <div className="header">
                    <div className="sticker"></div>
                    <div >
                      <img className="logo" src={cardTypeUrl} alt="Card logo"/>
                    </div>
                </div>
                <div className="body">
                    <h4 id="creditCardNumber">{creditCardNum}</h4>
                </div>
                <div className="footer">
                    <div>
                        <h6>Card Holder</h6>
                        <h4>{cardHolder}</h4>
                    </div>
                    <div>
                        <h6>Expires</h6>
                        <h6>{expireMonth} / {expireYear}</h6>
                    </div>
                </div>
            </div> */}

            <div className="input-container mt">
                <h6>Enter card number</h6>
                <Cleave
                  delimiter="-"
                  options={{
                    creditCard: true,
                    //onCreditCardTypeChanged: handleType
                  }}
                  onChange={handleNum}
                  placeholder="Please enter your credit card number"
                />
            </div>

            <div className="input-container">
                <h6>Card Holder</h6>
                <input onChange={handleCardHolder} type="text" placeholder="Please enter your full name" required/>
            </div>

            <div className="input-grp">
                <div className="input-container">
                    <h6>Expiration Year</h6>
                    <select value={expireYear} onChange={handleExpYear}>
                      <option value="January">January</option>
                      <option value="February">February</option>
                      <option value="March">March</option>
                      <option value="April">April</option>
                      <option value="May">May</option>
                      <option value="June">June</option>
                      <option value="July">July</option>
                      <option value="August">August</option>
                      <option value="September">September</option>
                      <option value="October">October</option>
                      <option value="November">November</option>
                      <option value="December">December</option>
                    </select>
                </div>
                <div className="input-container">
                <h6>Month</h6>
                <select value={expireMonth} onChange={handleExpMonth}>
                      
                      <option value="2022">2022</option>
                      <option value="2023">2023</option>
                      <option value="2024">2024</option>
                      <option value="2025">2025</option>
                      <option value="2026">2026</option>
                      <option value="2027">2027</option>
                      <option value="2028">2028</option>
                      <option value="2029">2029</option>
                    </select>
                </div>
                <div className="input-container">
                    <h6>CVV</h6>
                    <input type="password" placeholder="CVV" required maxLength={3}/>
                </div>
            </div>
<div>
<button type="submit">{`Submit payment`}</button>
</div>
           
        </form>
    </div>
  

{/* </div> */}
<div className='col-6 cabin fuselage'>
<div className = 'columnTwo' >
  <div className = 'card sm bg-dark text-light'>
    <div className = 'card-header'>
    <h3 > NG Travels </h3>{' '} <div >
            <p > BOOKING DETAILS </p>{' '} 
    </div>
            
            <div className = 'row' >
            <div className = 'col-6 pt' >
            <p className = 'hdng' > Username </p> <hr className='hr3' />
            <p className = 'hdng' > Date </p> 
            <p className='hdng'> From </p >
            <p className = 'hdng' > To </p> <hr className='hr3' />
            <p className = 'hdng' > Passengers </p>{' '} {renderNamesOfPassenger() } < hr className = 'hr3' />
            <p className = 'hdng' > Ticket price </p>{' '} 
            <p className = 'hdng' > Tax </p>{' '} <p className = 'hdng' > Toal Sum </p>{' '} </div>{' '} 
            <div className = 'col-6' >
            <p className = 'usrName' > { ' ' } { localStorage.getItem('dateofjourney') } { ' ' } </p>{' '} 
            <hr className = 'hr3' />
            <p className = 'usrName' > { ' ' } { localStorage.getItem('dateofjourney') } { ' ' } </p>{' '} 
            <p className = 'usrName' > { localStorage.getItem('fromCity') } </p>{' '} 
            <p className = 'usrName' > { ' ' } { localStorage.getItem('toCity') } { ' ' } 
            </p>{' '} <hr className = 'hr3' />
            <p className = 'hdng'>
            Seat No { ' ' } </p> {renderSeatNumbers()} <p> {getSumTotal()} </p>
            </div>{' '} 
            </div>{' '} </div>{' '} </div>{' '}
   
</div>
        </div>
    </div></div>
  )
}

export default PaymentDetails