# What's the Weather Like?

### There are 3 main goals for this project. 
* The user should be able to have an input in wchich they can put their respective zip code. 
* This app will display real-time weather data:
-City Name
-Current weather conditions
-Current temperature
-a unique image due to weather conditions
* The app will return **Invalid Zipcode** if the user puts in a zipcode that doesn't work. 



#### Zipcode Input
* Simply at the top of the page will be the title of the page.
* Under the title, there will be: 
    * an input field where the user can enter the zipcode.
    * A button that submits the data givine in the input field. 
    * This will change the state.

### Order of operations 
1. url ~/weather
2. onLoad (init)
    * set state variable
    * binding of events 
    * give intput focus.
    * getWeather button calls an api 

3. state
    * let weather = {}- a vars state that is stored
    * .currentZip = the zipcode to be accesed through user input
    * .previousZip = []- the zipcode that is stored 
    * .error = show- a user puts in a wrong zipcode and recieves an erro message
    * .isBusy = false (show loading)- what to do when the process is loading
4. submit




### States


`start`

`validate data`

`call API`

`parse API Data` 

`on state change`

`update view`

`end`