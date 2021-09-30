// const axios = require('axios').default;



//  handle the html elements
const getData = document.getElementById('getData');
const zipcode = document.getElementById('zipcode');
const city = document.getElementById('searchedCity');
const kelvin = document.getElementById('tempK');
const farenheit = document.getElementById('tempF');
const celsius = document.getElementById('tempC');
const condition = document.getElementById('condition');
const img = document.getElementById('img');
const results = document.getElementById('results');

var url = 'https://api.openweathermap.org/data/2.5/weather?zip=20755&appid=158d826e33ea4161dcd80cab8aa55710';

function getWeather() {
  axios.get(url)
    .then(function (response) {
      //on success
      console.log(response);
      city.innerHTML = response.data.name;
      kelvin.innerHTML = response.data.main.temp + " K"; 
      farenheit.innerHTML = Math.ceil((response.data.main.temp - 273.15) * (9/5) + 32) + " °F";
      celsius.innerHTML = Math.ceil(response.data.main.temp - 273.15) + " °C";
      condition.innerHTML = response.data.weather[0].description;  
    })
    .catch(function (error) {
      // on error
      console.log(error);
    })
    .then(function () {
      // this is so that the functions are always executed. 
    })
}
getData.addEventListener('click', getWeather);












