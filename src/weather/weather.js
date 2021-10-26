import Hoursweather from "./hourlyweather";
import Weeklyweather from "./weekweather";
import Loader from "./loader"
import './css/weather.css'
import './css/horizontalscroller.css'
import './js/weather.js'

const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const WeatherIcons = {
    "01d": "images/day.png",
    "01n": "images/night.png",
    "02d": "images/fewcloud.png",
    "02n": "images/fewcloud.png",
    "03d": "images/cloud.png",
    "03n": "images/cloud.png",
    "04d": "images/overcast.png",
    "04n": "images/overcast.png",
    "09d": "images/lightrain.png",
    "09n": "images/lightrain.png",
    "10d": "images/rainyday.png",
    "10n": "images/rainyday.png",
    "11d": "images/storm.png",
    "11n": "images/storm.png",
    "13d": "images/snow.png",
    "13n": "images/snow.png",
    "50d": "images/mist.png",
    "50n": "images/mist.png",
  };

function Weather({city, weather}){
    let date = new Date();
    return(<>
        {
            weather!=null ?(<>
            <div className='currentweather'>
                <div className='background curlocation' style={{paddingTop:'30px'}}>
                    <h4 className='capitalize'>{city}</h4>
                    <div>{months[date.getMonth()]}, {date.getDate()}</div>
                </div>
                <div className='curtempinfo'>
                    <div className='' style={{width:'50%', paddingTop:'35px'}}>
                        <h1>{weather.current.temp}°C</h1>
                    </div>
                    <div className='' style={{width:'50%'}}>
                        <img src={WeatherIcons[weather.current.weather[0].icon]}/>
                        <h5 className='capitalize'>{weather.current.weather[0].description}</h5>
                    </div>
                </div>
            </div>
            <Hoursweather hourly={weather.hourly}/>
            <Weeklyweather daily={weather.daily}/>
            </>
            ) : <Loader />
        }
        </>
    )
}

export default Weather;