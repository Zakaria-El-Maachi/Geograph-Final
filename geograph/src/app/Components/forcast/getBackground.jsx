import clearSky from './../../assets/backgrounds/clear_sky.jpg';
import clearSkyNight from './../../assets/backgrounds/clear_sky_night.jpg';
import cloudySky from './../../assets/backgrounds/cloudy_sky.jpg';
import cloudySkyNight from './../../assets/backgrounds/cloudy_sky_night.jpg';

import fogSky from './../../assets/backgrounds/fog_sky.jpg';
import drizzleSky from './../../assets/backgrounds/drizzle_sky.png';
import frozendrizzleSky from './../../assets/backgrounds/freezing_drizzle_sky.jpg';
import rainSky from './../../assets/backgrounds/rain_sky.jpg';

import snowGrains from './../../assets/backgrounds/snow_grains.jpg';
import rainShowers from './../../assets/backgrounds/rain_showers.jpg';
import snowShowers from './../../assets/backgrounds/snow_showers.jpg';
import freezingRain from './../../assets/backgrounds/freezing_rain.jpg';
import snowFall from './../../assets/backgrounds/snow_fall.jpg';
import thunderstorm from './../../assets/backgrounds/thunderstorm.png';
import thunderstormHail from './../../assets/backgrounds/thunderstorm_hail.jpg';


// knowing the weather code returns a description or an descriptive image .

const Weather0 =()=>{
    return <img className='info-background' src={clearSky} alt="background image of a clear sky" />
}
const Weather1 =()=>{
    return <img className='info-background' src={cloudySky} alt="background image of a cloudy sky" />
}
const Weather2 =()=>{
    return <img className='info-background' src={fogSky} alt="background image of a foggy sky" />
}
const Weather3 =()=>{
    return <img className='info-background' src={drizzleSky} alt="background image of a drizzle sky" />
}
const Weather4 =()=>{
    return <img className='info-background' src={frozendrizzleSky} alt="background image of a frozen drizzle Sky " />
}
const Weather5 =()=>{
    return <img className='info-background' src={rainSky} alt="background image of a rainny saky " />
}
const Weather6 =()=>{
    return <img className='info-background' src={freezingRain} alt="background image of a frezing rain in the sky" />
}
const Weather7 =()=>{
    return <img className='info-background' src={snowFall} alt="background image of a sky with snow" />
}
const Weather8 =()=>{
    return <img className='info-background' src={snowGrains} alt="background image of a sky with snow graining" />
}
const Weather9 =()=>{
    return <img className='info-background' src={rainShowers} alt="background image of a ranning sky"/>
}
const Weather10 =()=>{
    return <img className='info-background' src={snowShowers} alt="background image of a sky snowing"/>
}
const Weather11 =()=>{
    return <img className='info-background' src={thunderstorm} alt="background image of a thunderstorm" />
}
const Weather12 =()=>{
    return <img className='info-background' src={thunderstormHail} alt="background image of a thunderstorm with hail" />
}

const Weather13 =()=>{
    return <img className='info-background' src={clearSkyNight} alt="background image of a clear sky at night" />
}
const Weather14 =()=>{
    return <img className='info-background' src={cloudySkyNight} alt="background image of a cloudy sky at night " />
}

// Check API's Documentry, Api sen a code and returns a component...
//https://open-meteo.com/en/docs#latitude=52.52&longitude=13.41&hourly=relativehumidity_2m&current_weather=true&timezone=auto:~:text=Weather%20variable%20documentation
//or 
// https://open-meteo.com
const WeatherCodes = {
    //day
    0: <Weather0/> ,
    1: <Weather1/> , 2: <Weather1/> , 3:<Weather1/>,
    45:<Weather2/> , 48:<Weather2/> ,
    51:<Weather3/> , 53:<Weather3/> , 55:<Weather3/>,
    56:<Weather4/> , 57:<Weather4/> ,
    61:<Weather5/> , 63:<Weather5/> , 65:<Weather5/>,
    66:<Weather6/> , 67:<Weather6/> ,
    71:<Weather7/> , 73:<Weather7/> , 75:<Weather7/>,
    77:<Weather8/> ,
    80:<Weather9/> , 81:<Weather9/> , 82:<Weather9/>,
    85:<Weather10/>, 86:<Weather10/>,
    95:<Weather11/>,
    96:<Weather12/>, 99:<Weather12/>,
    //night
    "night1":<Weather13 />,
    "night2":<Weather14 />,
}

export const BackgroundImg = ({weatherCode=null, time=true})=>{
    if(time){
        return WeatherCodes[weatherCode];

    }else if(weatherCode===0){
        return WeatherCodes['night1'];

    }else if([1,2,3].includes(weatherCode)){
        return WeatherCodes['night2'];
    }
    return WeatherCodes[weatherCode];
}