import React, { useEffect } from 'react'
import useForm from '../hooks/useForm';
import Input from './Input'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import axios from '../core/config/axios';
import { useDispatch, useSelector } from 'react-redux';
import { getCities } from '../actions/getCities';
import { API_LINKS } from '../core/constants/API_URLS';

function SearchBuses() {

    useEffect(() => {
        let actions = getCities();
        dispatch(actions)
        console.log(cities);
    
    //   return () => {
    //     populatemenu()
    //    }
    }, [ ])
    const navigate = useNavigate()

    const dispatch=useDispatch();
   
    const cities=useSelector(state=>state.getcitiesReducer)
    


//console.log(cities.cities);
    
   const coy=cities.cities;
  // console.log(coy);
    const formLogin = () => {

        console.log("Callback function when form is submitted!");
        console.log("Form Values ", values);
       // const navigate=useNavigate();
        //
       
        getBus(values);

    }

    const populatemenu = () => {
console.log(coy);
        return coy.map((city,i)=>{
            return(
                <option id={i} key={city.station_id} value={city.station_name}>
                    {city.station_name}
                </option>
            )
        })
        //console.log(coy+"\n"+cities+"\n");
         //coy.map(c =>{
        //     return(
                
        //             <option value={c.id}>{c.name}</option>)
                
            
        // })
    }



    function getBus(values){
        console.log(values);
        axios.post(API_LINKS.GET_BUSES,
            {destination:values.to_city_selected,startCity:values.from_city_selected}).then(
            response => {
                console.log(response.data);
                const buses=response.data;
                console.log(buses);
                localStorage.setItem("fromCity", values.from_city_selected)
  localStorage.setItem("toCity", values.to_city_selected)
  localStorage.setItem("dateofjourney",values.dateofjourney)
                navigate('AvailableBuses',{state:{buses}});

            }
        )
    }
    const {handleChange, values,errors,handleSubmit} = useForm(formLogin);
  return (
    <div>
        <div className='card text-center'>
            <div className='card-header bg-dark text-light'>SearchBuses</div>
           <div className='card-body'>
           
                <form className="form-inline" 
                 onSubmit={e => handleSubmit(e)}
                >
                    <div className='row'>
                        <div className='col'>
                        <h6 style={{paddingTop: '5px'}}>
                                From:
                            </h6>
                        </div>
                            <div className='col'>
                           
                            <select className="form-select " name="from_city_selected" 
                    onSelect={e => { handleChange(e) }}
                    data-style="btn-new" 
                     onChange={e => { handleChange(e) }}
                     
                    >
                        {
                             cities?populatemenu():''
                        }
                        
                    </select>
                          </div> 
                     </div><div className='row' style={{marginTop:'5px'}}>
                            <div className="col">
                            <h6 style={{paddingTop: '5px'}}>To:</h6>
                            </div>
                            
                                
                                 <div className="col">
                                 <select name="to_city_selected" data-style="btn-new"  className="form-select "
                     onChange={e => { handleChange(e) }}
                    >
                        {
                             cities?populatemenu():''
                        }
                    </select>
                                 
                             
                             </div>

                    </div>
                   
                   <div style={{marginTop:'3px'}}>
                   <Input type='date' name='dateofjourney' label='Date of journey'  placeholder='Date of journey' required={true} onAction={(e)=>handleChange(e)}/>
                   </div>
                    <div>

                    </div>
                    <hr/>
                    <input type="submit" className=" btn-all btn-md getRoute" value='Search Buses' />
                </form>

                <div>
                    </div>
                 
            </div>
            </div>
        </div>
          
       
  )
}

export default SearchBuses