import React from "react"
const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const day = ['Sun','Mon','Tue','Wed','Thur','Fri','Sat'];

const WeatherIcons = {
    "01d": "images/day.png",
    "01n": "images/night.png",
    "02d": "images/cloud.png",
    "02n": "images/cloud.png",
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
}

const WeatherBackground={
    "01d": "images/sunnyback.png",
    "01n": "images/nightback.jpg",
    "02d": "images/overcastback.jpg",
    "02n": "images/overcastback.jpg",
    "03d": "images/overcastback.jpg",
    "03n": "images/overcastback.jpg",
    "04d": "images/overcastback.jpg",
    "04n": "images/overcastback.jpg",
    "09d": "images/rainback.jpg",
    "09n": "images/rainback.jpg",
    "10d": "images/rainback.jpg",
    "10n": "images/rainback.jpg",
    "11d": "images/rainback.jpg",
    "11n": "images/rainback.jpg",
    "13d": "images/snowback.jpg",
    "13n": "images/snowback.jpg",
    "50d": "images/snowback.jpg",
    "50n": "images/snowback.jpg"
}

function Weeklyweather({daily}){
    var weathercards = []
    let date = new Date();
    
    for(let i=0;i<7;i++){
        const time=React.createElement('p',{className:'p-card__content'},months[date.getMonth()]+' '+date.getDate()+', '+day[date.getDay()])
        const temp=React.createElement('h1',{className:'p-card__content'},daily[i].temp.day+'°C')
        const img=React.createElement('img',{src:WeatherIcons[daily[i].weather[0].icon]})
        const stat=React.createElement('p',{className:'p-card__content capitalize'},daily[i].weather[0].description)
        const minTemp=React.createElement('p',{style:{display:'inline-block',width:'50%',color:'blue'}},daily[i].temp.min)
        const maxTemp=React.createElement('p',{style:{display:'inline-block',width:'50%',color:'orangered'}},daily[i].temp.max)
        const body=React.createElement('div',{className:'u-no-padding'},[time,temp,img,stat,minTemp,maxTemp])
        const card=React.createElement('div',{className:'card', style:{backgroundImage:'url('+WeatherBackground[daily[i].weather[0].icon]+')'}},body)
        date.setDate(date.getDate()+1)
        weathercards.push(card)
    }
    return(
        <div className='weeklyweather'>
            <div className="slot">
                <div className='ws hide-scroll'>
                    {weathercards}
                </div>
            </div>
        </div>
    )
}

export default Weeklyweather;