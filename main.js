const { default: axios } = require("axios");

//  declare the html variables
 var weather = document.getElementById('fetchData');
 var currentCity = document.getElementById('currentCity');
 var results = document.getElementById('results'); 
 var tempK = document.getElementById('tempK');
 var tempF = document.getElementById('tempF');
 var tempC = document.getElementById('tempC');
 var condition = document.getElementById('condition');
 var imgRel = document.getElementById('imgRel'); 

// Make a request for a user with a given ID
axios.get('https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=158d826e33ea4161dcd80cab8aa55710')
  .then(function (response) {
    // logs correctly in the console on succes 
    console.log(response);
  })
  .catch(function (error) {
    // logs an error message if it fails
    console.log(error);
  })
  .then(function () {
    // call function 
  });
