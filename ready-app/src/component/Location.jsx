import React from 'react'
import { Link } from 'react-router-dom'
import Navbarlogoutbuy from './Navbarlogoutbuy'

function Location() {
  const button = document.querySelector("button");
  
  if(button){
    button.addEventListener("click", () => {
      if (navigator.geolocation) {
        button.innerText = "Allow to detect location";
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
      } else {
        button.innerText = "Your browser not support";
      }
    });

    function onSuccess(position) {
      button.innerText = "Detecting your location...";
      let { latitude, longitude } = position.coords;
      fetch(
        `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=aed00097d7ec4c1e80d3503f38731ad3`
      )
        .then((response) => response.json())
        .then((response) => {
          let allDetails = response.results[0].components;
          console.table(allDetails);
          let { city, postcode, country } = allDetails;
          button.innerText = `${city} ${postcode}, ${country}`;
        })
        .catch(() => {
          button.innerText = "Something went wrong";
        });
    }

    function onError(error) {
      if (error.code === 1) {
        button.innerText = "You denied the request";
      } else if (error.code === 2) {
        button.innerText = "Location is unavailable";
      } else {
        button.innerText = "Something went wrong";
      }
      button.setAttribute("disabled", "true");
    }
  }

  return (
    <>
    <Navbarlogoutbuy/>
    <div className='min-h-screen items-center mx-auto md:flex md:flex-col md:mx-20 mt-14 mb-14'>
        <div className='drop-shadow-2xl flex flex-col bg-white items-center justify-center rounded-xl mx-10 px-18 pb-8 mt-14 md:w-7/12'>
            {/* <h1 className='text-black pt-5 pb-4 mt-5 text-xl font-medium'>Detect your city/town</h1> */}
            <button className="text-[#8f0fff] pt-8 pb-4 mt-5 text-xl font-medium">Detect your location</button>
            <Link to="/home" className="button text-white rounded-full px-12 py-2 mx-auto my-5 drop-shadow bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 font-semibold hover:bg-gradient-to-br ease-in-out transition duration-200">Start Shopping</Link>
        </div>
    </div>
    </>
  )
}

export default Location