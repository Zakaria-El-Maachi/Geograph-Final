import { useEffect, useState } from 'react';

import './style.scss';

import { LoadingPanel } from '../loadPanel';

import { Item } from './item';
import dateImg from './../../assets/clock.png';
import temperatureImg from './../../assets/thermostat.png';
import dayImg from './../../assets/calendar.png';
import humidityImg from './../../assets/humidity.png';

import { getWeather } from '../../services/weatherApi.js';
import { getWeatherCodeDescription } from './getWeatherCode';
import { getWeatherImg } from './getWeatherImg';

import { BackgroundImg } from './getBackground';

const daysWeek =['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

export function ForeCast({country, panelRef}){

    const [weather, setWeather] = useState({error:null});
    const [request, setRequest] = useState(true);


    useEffect(()=>{
        requestWeatherData();
    },[country])

    const requestWeatherData = async()=>{
        setRequest(true);
        const latitude = country?.properties?.lat ?? null;
        const longitude = country?.properties?.lon ?? null;
        const country_id = country?.__id;

        if(latitude && longitude){

            getWeather(latitude, longitude, country_id).then(res=>{
                setWeather(res);
                setRequest(false);
            }).catch(err=>{
                setWeather({error:true});
                setRequest(true);
            })

        }
    }

    const getFlagImg = ()=>{
        const postalCountry = country?.properties?.postal;
        if(postalCountry){
            return `https://countryflagsapi.com/png/${postalCountry}`;
        }
        return '';
    }

    const getTime = ()=>{
        return new Date(weather?.current_weather?.time).toLocaleTimeString();
    }
    const getDate = ()=>{
        return new Date(weather?.current_weather?.time).toLocaleDateString();
    }
    const getDay = ()=>{
        const n = new Date(weather?.current_weather?.time);
        return daysWeek[n.getDay()]
    }

    const getErrorMsj = ()=>{
        if(weather.error){
            return 'We could not found its weather';
        }
        return null;
    }

    const isRefreshRequeired = ()=>{
        if(weather.error){
            return true;
        }
        return !request;
    }

    const isDay = ()=>{
        const p = new Date(weather?.current_weather?.time).getHours();
        if(p>6 && p<=19){
            return true;
        }
        return false;
    }

    return (
        <div className='info' ref={panelRef}>
            <div className='info-container' >

                <div className='info-bg'>
                    {request ?
                        <LoadingPanel Error={getErrorMsj()} />
                        :
                        <div className='info-panel'>
                            <header className='info-header'>

                                <img className='info-header-img' src={getFlagImg()} alt="country flag" />

                                <h1 className='info-country'>{country?.properties?.name}</h1>

                                <span className='info-weather-img'>
                                    {
                                        getWeatherImg(weather?.current_weather?.weathercode, isDay())
                                    }
                                </span>
                            </header>
                            
                            <div className='weather-description'>
                                {getWeatherCodeDescription(weather?.current_weather?.weathercode)}
                            </div>

                            <div className='info-weather'>

                                <Item title='Date' imgItem={dateImg} imgAlt="clock for date" >
                                    <p>{getDate()}</p>
                                    <p>{getTime()}</p>
                                </Item>

                                <Item title='Tempeture' imgItem={temperatureImg} imgAlt="thermostat for temperature" >
                                    <p className='info-sumary info-sumary-2'>
                                        {weather?.current_weather?.temperature}ºC
                                    </p>
                                </Item>


                                <Item title='Day' imgItem={dayImg} imgAlt="calendar for today's day" >
                                    <p className='info-sumary'>{getDay()}</p>
                                </Item>

                                <Item title='Humidity' imgItem={humidityImg} imgAlt="water for humidity" >
                                    <p className='info-sumary info-sumary-2'>
                                        {weather?.hourly?.relativehumidity_2m[0]}%
                                    </p>
                                </Item>

                            </div>
                        </div>
                    }
                </div>

                {isRefreshRequeired() &&
                    <button className='btn' onClick={requestWeatherData}>
                        🔄 REFRESH 🔄
                    </button>
                }

                <BackgroundImg weatherCode={weather?.current_weather?.weathercode} time={isDay()} />
            </div>

        </div>
    )
}