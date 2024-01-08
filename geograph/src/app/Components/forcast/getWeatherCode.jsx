// knowing the weather code returns a description or an descriptive image .

const Weather0 =()=>{return <p>Clear sky</p>}
const Weather1 =()=>{return <p>Mainly clear, partly cloudy, and overcast</p>}
const Weather2 =()=>{return <p>Fog and depositing rime fog</p>}
const Weather3 =()=>{return <p>Drizzle: Light, moderate, and dense intensity</p>}
const Weather4 =()=>{return <p>Freezing Drizzle: Light and dense intensity</p>}
const Weather5 =()=>{return <p>Rain: Slight, moderate and heavy intensity</p>}
const Weather6 =()=>{return <p>Freezing Rain: Light and heavy intensity</p>}
const Weather7 =()=>{return <p>Snow fall: Slight, moderate, and heavy intensity</p>}
const Weather8 =()=>{return <p>Snow grains</p>}
const Weather9 =()=>{return <p>Rain showers: Slight, moderate, and violent</p>}
const Weather10 =()=>{return <p>Snow showers slight and heavy</p>}
const Weather11 =()=>{return <p>Thunderstorm: Slight or moderate</p>}
const Weather12 =()=>{return <p>Thunderstorm with slight and heavy hail</p>}

// Check API's Documentry, Api sen a code and returns a component...
//https://open-meteo.com/en/docs#latitude=52.52&longitude=13.41&hourly=relativehumidity_2m&current_weather=true&timezone=auto:~:text=Weather%20variable%20documentation
//or 
// https://open-meteo.com
const WeatherCodes = {
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

export const getWeatherCodeDescription = (weatherCode=null)=>{
    return WeatherCodes[weatherCode];
}