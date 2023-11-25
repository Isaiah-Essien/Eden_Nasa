import React, { useState } from 'react'
import './Weather.css'
import search_icon from "../assets/search.png"
import clear_icon from "../assets/clear.png"
import cloud_icon from "../assets/cloud.png"
import rain_icon from "../assets/rain.png"
import snow_icon from "../assets/snow.png"
import wind_icon from "../assets/wind.png"
import drizzle_icon from "../assets/drizzle.png"
import humidity_icon from "../assets/humidity.png"
import ReactWeather, { useOpenWeather } from 'react-open-weather';
const Weather = () => {
  let api_key = 'ec8c5fef6734f9deca001a15432c3846';
  const[wicon,setWicon] = useState(cloud_icon);
  
  const search = async () => {
     const element = document.getElementsByClassName("city-input")
     if (element[0].value==="")
     {
      return 0;
     }
     let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`
     let response = await fetch (url);
     let data = await response.json();
     console.log("API Response:", data);
     const humidity = document.getElementsByClassName("humidity-percent");
     const wind = document.getElementsByClassName("wind-rate");
     const temprature = document.getElementsByClassName("Weather-temp");
     const location = document.getElementsByClassName("Weather-loc")
     humidity[0].innerHTML = data.main.humidity+ " %"
     wind[0].innerHTML = Math.floor(data.wind.speed)+ " km/h"
     temprature[0].innerHTML = Math.floor(data.main.temp)+ "°c"
     location[0].innerHTML = data.name
     if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
      setWicon(clear_icon);
    } 
    else if (data.weather[0].icon === "02d" || data.weather[0].icon === "02n") {
      setWicon(cloud_icon);
    } 
    else if (data.weather[0].icon === "03d" || data.weather[0].icon === "03n") {
      setWicon(drizzle_icon);
    } 
    else if (data.weather[0].icon === "04d" || data.weather[0].icon === "04n") {
      setWicon(drizzle_icon);
    } 
    else if (data.weather[0].icon === "09d" || data.weather[0].icon === "09n") {
      setWicon(rain_icon);
    } 
    else if (data.weather[0].icon === "10d" || data.weather[0].icon ==="10n") {
      setWicon(rain_icon);
    } 
    else if (data.weather[0].icon === "13d" || data.weather[0].icon === "13n") {
      setWicon(snow_icon);
    } 
    else {
      setWicon(clear_icon);
    }
  }
  return (
    <div className='container'>
    <div className='top-bar'>
        <input type='text' className='city-input' placeholder='Search...'/>
        <div className='search-icon' onClick={()=>{search()}}>
            <img src={search_icon} alt='search icon'/>
        </div>
    </div>
    <div className='temp'>
    <div className='Weather-img'>
        <img src={wicon} alt='cloud icon'/>
        <div className='Weather-temp'>24°C</div>
    </div>
      <div className='Weather-loc'>London</div>
      </div>
      <div className='Data-cont'>
        <div className='element'>
            <img src={humidity_icon} alt='' className='icon'/>
            <div className='data'>
                <div className='humidity-percent'>64%</div>
                <div className='text'>Humidity</div>
            </div>
        </div>
        <div className='element'>
            <img src={wind_icon} alt='' className='icon'/>
            <div className='data'>
                <div className='wind-rate'>18km/h</div>
                <div className='text'> Wind Speed</div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Weather
