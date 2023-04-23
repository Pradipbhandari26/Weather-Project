import "./Weather.css"
import axios from 'axios';
import { useState } from "react";


const Weather = () => {

    const GEO_API_KEY = 'dbeecc00aee2d683daaea893a9242b83';

    const GEO_API = "http://api.openweathermap.org/geo/1.0/direct?q={kathmandu}&limit={1000}&appid="
    const Location_API="https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid="

     
     const [geo,setGeo] = useState([]);
     const [location,setLocation] = useState({});

    
     const searchCity=()=>{

        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${GEO_API_KEY}`).then((response) => {
        setGeo(response.data)
        console.log(response.data)
        }) 
//commit test
        
     }

    return(

        <>

            <div className="search-bar">

                <input placeholder="Enter City" onChange={(event)=>setLocation(event.target.value)}/>

            

            <button className="button-17"onClick={searchCity}>Search</button>

            
               
            </div>


            <div className="container">


                <div className="top">

                {geo.main ? <h2>{geo.name}, {geo.sys.country}</h2>:null}
                   {geo.main ? <h2>{ Math.round(geo.main.temp-272.15)}°C</h2>:null}

                   <div className="weather-des">
                    
                   {geo.weather?   <p>{geo.weather[0].main}</p> : null}
                  
                   {geo.weather? <img src={`http://openweathermap.org/img/wn/${geo.weather[0].icon}@2x.png`}></img>: null} 
                   </div>
                </div>

                <div className="bottom">
                    
                {geo.main ? <p>Feels Like:{ Math.round(geo.main.feels_like-272.15)}°C</p>:null}
                

                  
                  {geo.main?<p>Wind: {Math.round(geo.wind.speed * 1.609344)} km/hour</p>: null }
                  {geo.main?<p>Humidity: {geo.main.humidity}%</p>: null }  
                </div>




            </div>


        </>






    )
}


export default Weather;