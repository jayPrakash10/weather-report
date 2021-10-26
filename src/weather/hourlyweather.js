import React from "react";

const WeatherIcons = {
    "01d": "images/day.png",
    "01n": "images/night.png",
    "02d": "images/fewclouds.png",
    "02n": "images/fewclouds.png",
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
    "50n": "images/mist.png"
};

const WeatherBackground={
    "01d": "images/sunnyback.png",
    "01n": "images/nightback.jpg",
    "02d": "images/overcastback.jpg",
    "02n": "images/overcastback.jpg",
    "03d": "images/overcastback.jpg",
    "03n": "images/overcastback.jpg",
    "04d": "images/overcastback.jpg",
    "04n": "images/overcastback.jpg",
    "09d": "images/drizzle.jpg",
    "09n": "images/drizzle.jpg",
    "10d": "images/rainback.jpg",
    "10n": "images/rainback.jpg",
    "11d": "images/rainback.jpg",
    "11n": "images/rainback.jpg",
    "13d": "images/snowback.jpg",
    "13n": "images/snowback.jpg",
    "50d": "images/snowback.jpg",
    "50n": "images/snowback.jpg"
}

function Hoursweather({hourly}){
    var weathercards = []
    const date = new Date()

    function ampm(time){
        if(time>=12)
            return 'PM'
        else
            return 'AM'
    }
    function gettime(time){
        if(ampm(time)=='PM' && time==12)
            return time
        else
            return time%12
    }
    
    for(let i=0;i<48;i++){
        const time=React.createElement('p',{className:'p-card__content'},gettime(date.getHours())+':00 '+ampm(date.getHours()))
        const temp=React.createElement('h4',{className:'p-card__content'},hourly[i].temp+'° C')
        const img=React.createElement('img',{src:WeatherIcons[hourly[i].weather[0].icon]})
        const stat=React.createElement('p',{className:'p-card__content capitalize'},hourly[i].weather[0].description)
        const body=React.createElement('div',{className:'u-no-padding'},[time,temp,img,stat])
        const card=React.createElement('div',{className:'card', style:{backgroundImage:'url('+WeatherBackground[hourly[i].weather[0].icon]+')'}},body)
        date.setHours(date.getHours()+1)
        weathercards.push(card)
    }

    return( 
        <div className='hoursweather'>
            <div class="slot">
                <div className='hs hide-scroll'>
                    {weathercards}
                </div>
            </div>
        </div>
        )
}

export default Hoursweather;