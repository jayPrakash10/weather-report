import './App.css';
import Header from './nav/header'
import { ThemeContext, themes } from './nav/theme';
import { useState,useEffect } from 'react';
import Weather from './weather/weather.js'

function App() {
  const [state,setState]=useState(themes.dark);
  function set(){
    setState(state===themes.dark ? themes.light : themes.dark)
  }

  const [weather,setWeather]=useState(null);
  const [latlon, setLatlon] = useState({lat : 0, lon : 0})
  const [city, setCity] = useState('Your Location')
  
  function getLatlon(pos){
      setLatlon({lat:parseFloat(pos.coords.latitude.toFixed(4)),
                  lon:parseFloat(pos.coords.longitude.toFixed(4))})
      setCity('Your Location')
  }

  if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(getLatlon)
  }
  else{
      alert('Allow Browser to Share your location')
  }

  useEffect(()=>{
      fetchweather()
  }, [latlon.lat,latlon.lon])

  async function fetchweather(){  
      console.log(latlon.lat, latlon.lon);
      fetch('https://api.openweathermap.org/data/2.5/onecall?units=metric&lat='+latlon.lat+'&lon='+latlon.lon+'&exclude=minutely,alerts&appid=93bec7555be2f703f21085443e2ef08e')
          .then(response => response.json())
              .then(data => { 
                  setWeather(data)
      })
  }

  function searchCity(){
      var searchCity = document.getElementById('city').value;
      if(searchCity==''){
          alert('City name is not selected')
      }                        
      else{
      fetch('https://api.opencagedata.com/geocode/v1/json?q='+searchCity+'&key=e706d5eb05fe4ccc9bc3645ecbcecbc2')
          .then(res=>res.json())
              .then(data =>{
                  setLatlon({lat:data.results[0].geometry.lat,
                              lon:data.results[0].geometry.lng})
                  setCity(searchCity)
              })
      }
      document.getElementById('city').value = ''
  }
  function addonEnter(event){
    if(event.keyCode==13)
        searchCity()
  }
  return (
    <ThemeContext.Provider value={state}>
      <div className="App">
        <Header changeTheme={set}/>
        <div className='container'>
            <h1>Weather Report</h1>
            <div className="p-search-box">
                <input type="search" id='city' className="p-search-box__input" name="search" placeholder="Search City" onKeyDownCapture={(event)=> addonEnter(event)} autoComplete="on"/>
                <button type="submit" className="p-search-box__button" onClick={()=>{searchCity()}}><i className="p-icon--search"></i></button>
            </div>
            
            <Weather city={city} weather={weather}/>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
