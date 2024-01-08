import sun_flames from './../../assets/sun/flames.png';
import sun_core from './../../assets/sun/core.png';
import small_cloud from './../../assets/weatherCode/small_cloud.png';
import small_snowflake from './../../assets/weatherCode/small_snowflake.png';
import medium_snowflake from './../../assets/weatherCode/medium_snowflake.png';
import small_rain from './../../assets/weatherCode/small_rain.png';
import rain from './../../assets/weatherCode/rain.png';
import frozen_rain from './../../assets/weatherCode/frozen_drizzle.png';

import cloud_rain from './../../assets/weatherCode/cloud_rain.png';
import cloud_drizzle from './../../assets/weatherCode/cloud_drizzle.png';
import cloud_snow from './../../assets/weatherCode/cloud_snow.png';

import snow_balls from './../../assets/weatherCode/snow_balls.png';
import snow_grains from './../../assets/weatherCode/snow_grains.png';
import thumders from './../../assets/weatherCode/thumders.png';

import nightImg from './../../assets/weatherCode/night.png';

// knowing the weather code returns a description or an descriptive image .

const Weather0 =()=>{
    return <>
        <img src={sun_flames} className="rotate-flames" alt="image of weather sun, rain, snow" draggable={false} />
        <img src={sun_core} alt="image of weather sun, rain, snow" draggable={false}/>
    </>
}
const Weather1 =()=>{
    return <>
        <img src={sun_flames} className="rotate-flames" alt="image of weather sun, rain, snow" draggable={false} />
        <img src={sun_core} alt="image of weather sun, rain, snow" draggable={false}/>
        <img src={small_cloud} className='bounce-item' alt="cloud" draggable={false}/>
    </>
}
const Weather2 =()=>{
    return <>
        <img src={small_snowflake} className='opaciting-item' alt="snowflake" draggable={false}/>
        <img src={medium_snowflake} className='bounce-item' alt="medium snowflake" draggable={false}/>
    </>
}
const Weather3 =()=>{
    return <>
        <img src={cloud_rain} className='bounce-item' alt="cloud rainning" draggable={false}/>
        <img src={small_rain} className='falling-item' alt="Drizzle rain" draggable={false}/>
    </>
}
const Weather4 =()=>{
    return <>
        <img src={cloud_rain} className='bounce-item' alt="cloud rainning" draggable={false}/>
        <img src={frozen_rain} className='falling-item' alt="Frozen drizzle" draggable={false}/>
    </>
}
const Weather5 =()=>{
    return <>
        <img src={cloud_drizzle} className='bounce-item' alt="cloud drizzling" draggable={false}/>
        <img src={small_rain} className='falling-item' alt="Drizzle rain" draggable={false}/>
    </>
}
const Weather6 =()=>{
    return <>
        <img src={cloud_drizzle} className='bounce-item' alt="cloud raining" draggable={false}/>
        <img src={frozen_rain} className='falling-item' alt="Frozen drizzle" draggable={false}/>
    </>
}
const Weather7 =()=>{
    return <>
        <img src={cloud_snow} className='bounce-item' alt="cloud snowing" draggable={false}/>
        <img src={snow_balls} className='falling-item' alt="snow balls" draggable={false}/>
    </>
}
const Weather8 =()=>{
    return <>
        <img src={cloud_snow} className='bounce-item' alt="cloud snowing" draggable={false}/>
        <img src={snow_grains} className='falling-item' alt="snow balls" draggable={false}/>
    </>
}
const Weather9 =()=>{
    return <>
        <img src={cloud_rain} className='bounce-item' alt="cloud rainning" draggable={false}/>
        <img src={rain} className='falling-item' alt="snow balls" draggable={false}/>
    </>
}
const Weather10 =()=>{
    return <>
        <img src={cloud_snow} className='bounce-item' alt="cloud snowing" draggable={false}/>
        <img src={small_snowflake} className='falling-item' alt="cloud snowing" draggable={false}/>
    </>
}
const Weather11 =()=>{
    return <>
        <img src={cloud_rain} className='bounce-item' alt="cloud rainning" draggable={false}/>
        <img src={thumders} className='bounce-item' alt="thumders" draggable={false}/>
    </>
}
const Weather12 =()=>{
    return <>
        <img src={cloud_rain} className='bounce-item' alt="cloud rainning" draggable={false}/>
        <img src={small_snowflake} className='falling-item' alt="cloud snowing" draggable={false}/>
        <img src={thumders} className='bounce-item' alt="cloud snowing" draggable={false}/>
    </>
}

const Weather13 =()=>{
    return <>
        <img src={nightImg} alt="the night" draggable={false}/>
    </>
}
const Weather14 =()=>{
    return <>
        <img src={nightImg} alt="the night" draggable={false}/>
        <img src={small_cloud} className='bounce-item' alt="cloud" draggable={false}/>
    </>
}

// Check API's Documentry, Api sen a code and returns a component...
//https://open-meteo.com/en/docs#latitude=52.52&longitude=13.41&hourly=relativehumidity_2m&current_weather=true&timezone=auto:~:text=Weather%20variable%20documentation
//or 
// https://open-meteo.com
const WeatherCodes = {
    //night
    "night1":<Weather13 />,
    "night2":<Weather14 />,
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
}

export const getWeatherImg = (weatherCode=null, time=true)=>{
    if(time){
        return WeatherCodes[weatherCode];

    }else if(weatherCode===0){
        return WeatherCodes['night1'];

    }else if([1,2,3].includes(weatherCode)){
        return WeatherCodes['night2'];
    }
    return WeatherCodes[weatherCode];
}