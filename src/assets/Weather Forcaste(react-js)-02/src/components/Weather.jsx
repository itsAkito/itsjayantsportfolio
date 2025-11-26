import React, { useEffect, useState } from "react";
import './Weather.css'

import search_icon from '../assets/search.png'
import cloud_icon from '../assets/cloud.png'
import clear_icon from '../assets/clear.png'
import drizzle_icon from '../assets/drizzle.png'
import rain_icon from '../assets/rain.png'
import snow_icon from '../assets/snow.png'
import wind_icon from '../assets/wind.png'
import humidity_icon from '../assets/humidity.png'
import { useRef } from "react";


const Weather = () =>{
    const inputRef= useRef()
    const [weatherData,setWeatherData]=useState(false)
    const allicons={
        "01d":clear_icon,
        "02d":cloud_icon,
        "03d":cloud_icon,
        "01n":clear_icon,
        "09d":rain_icon,
        "10n":rain_icon,
        "13d":snow_icon,
        "13n":snow_icon,
    }
    const search =async(city)=>{
        if(city===""){
            alert("Enter city name");
        }
        try{
            const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_WEATHER_API_KEY}`;
            const response=await fetch(url);
            const data=await response.json();
            console.log(data)
            const icon=allicons(data.weather[0].icon)||clear_icon;
            setWeatherData({
                humidity:data.main.humidity,
                windSpeed:data.main.speed,
                temparature:Math.floor(data.main.temp),
                location:data.name,
                icon:icon


            })
        }catch(error){

        }
    }
    useEffect(()=>{
        search("Dehli");
    },[])
    return (
        <div className="weather">
            <div className="search-bar">
            <input ref={inputRef} type="text" placeholder="Enter your city" />
                <img src={search_icon} alt="" onClick={()=>search(inputRef.current.value)

                }/>
            </div>
            <img src={clear_icon} alt="" className="weather_icon"/>
            <p className="tempatrature">{weatherData.temparature}</p>
            <p className="location">{weatherData.location}</p>
            <div className="weather-data">
                <div className="left">
                    <img src={humidity_icon} alt=""/>
                    <div>
                        <p>{weatherData.humidity}%</p>
                        <span>Humidity</span>
                    </div>
                </div>
                <div className="right">
                    <img src={wind_icon} alt=""/>
                    <div>
                        <p>{weatherData.windSpeed}km/h</p>
                        <span>Wind Speed</span> 
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Weather