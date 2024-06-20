import React from 'react'
import { useState } from 'react'
import axios from "axios";
import { useRef } from 'react';
import { useEffect } from 'react';
function Current() {
  const [city,setCity]=useState("Delhi")
  const [weatherData,setWeatherData]=useState({})
  const [searchCity, setSearchCity] = useState("Delhi");
  const [loading, setLoading] = useState(false); // Add loading state
  let cityRef=useRef("")
  const handleCityChange = (e) => {
    setCity(e.target.value);
  };
  let fetchWeatherData = async (searchCity)=>{
    setLoading(true);
    try{
      const res=await axios.get(`http://api.weatherapi.com/v1/current.json?key=ed5eb1c6b9f147ba9b8134249240802&q=${searchCity}&aqi=yes`)
      setWeatherData(res.data);
    }catch (err){
      console.error(err)
    }
    setLoading(false);
  }
  let handleSearch=()=>{
    setSearchCity(cityRef.current.value)
    setSearchCity(city);
  }
  useEffect(()=>{
    fetchWeatherData(searchCity)
    cityRef.current.focus()
  },[searchCity])

  const getIconUrl = (iconUrl) => {
    if (!iconUrl){
      return "";
    }else{
      return iconUrl.replace("64x64", "128x128");
    }
  };
  useEffect(() => {
    fetchWeatherData("Delhi");
  }, []);
  return (
    <>
    

    <div className='card mt-3'>
      <div className="card-title">
        <h3 className='text-center mt-2'>
        <div className='city-box'>
          <input type="text" value={city} onChange={handleCityChange} ref={cityRef} placeholder='Enter City Name' className='form-control shadow-none' />
          <button onClick={handleSearch} className='btn'><i className='bx bx-search'></i></button>
        </div>
        </h3>
      </div>
      <div className="image">
        <img src={loading? (<span>---</span>):getIconUrl(weatherData.current?.condition?.icon)} alt="" className='img-fluid'/>
      </div>
      <div className="card-body p-0 text-light text-center">
        <h5>{loading? (<span>---</span>):weatherData.current?.condition?.text}</h5>
        <h1>{loading? (<span>---</span>):weatherData.current?.temp_c}°C</h1>
      </div>
      <div className="sub px-4 py-3">
        <div className="row py-3">
          <div className="col-4 text-light d-flex flex-column align-items-center">
            <img src="https://cdn-icons-png.flaticon.com/128/1163/1163774.png" alt="" className='mb-2'/>
            <span className='text-nowrap fw-bold'>{loading? (<span>---</span>):weatherData.current?.wind_kph} km/h</span>
            <span className='opacity-50'>Wind</span>
          </div>
          <div className="col-4 text-light d-flex flex-column align-items-center">
            <img src="https://cdn-icons-png.flaticon.com/128/1163/1163736.png" alt="" className='mb-2'/>
            <span className='text-nowrap fw-bold'>{loading? (<span>---</span>):weatherData.current?.cloud}%</span>
            <span className='opacity-50'>Cloud</span>
          </div>
          <div className="col-4 text-light d-flex flex-column align-items-center">
            <img src="https://cdn-icons-png.flaticon.com/128/1163/1163750.png" alt="" className='mb-2'/>
            <span className='text-nowrap fw-bold'>{loading? (<span>---</span>):weatherData.current?.humidity}%</span>
            <span className='opacity-50'>Humidity</span>
          </div>
          <div className="col-4 mt-4 text-light d-flex flex-column align-items-center">
            <img src="https://cdn-icons-png.flaticon.com/128/4151/4151030.png" alt="" className='mb-2'/>
            <span className='text-nowrap fw-bold'>{loading? (<span>---</span>):weatherData.current?.pressure_in} in</span>
            <span className='opacity-50'>Pressure</span>
          </div>
          <div className="col-4 mt-4 text-light d-flex flex-column align-items-center">
            <img src="https://cdn-icons-png.flaticon.com/128/1862/1862674.png" alt="" className='mb-2'/>
            <span className='text-nowrap fw-bold'>{loading? (<span>---</span>):weatherData.current?.vis_km} km</span>
            <span className='opacity-50'>Visibility</span>
          </div>
          <div className="col-4 mt-4 text-light d-flex flex-column align-items-center">
            <img src="https://cdn-icons-png.flaticon.com/128/2100/2100016.png" alt="" className='mb-2'/>
            <span className='text-nowrap fw-bold'>{loading? (<span>---</span>):weatherData.current?.uv}</span>
            <span className='opacity-50'>UV</span>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Current
