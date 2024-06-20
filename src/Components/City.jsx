import React from 'react'
import { useState } from 'react'

function City() {
  const [searchCity, setSearchCity] = useState("Rajkot");
  let getCity=()=>{
    setCity
  }
  return (
    <div className='city-box'>
      <input type="text" placeholder='Enter City Name' className='form-control shadow-none' />
      <button className='btn'><i class='bx bx-search'></i></button>
    </div>
  )
}

export default City
