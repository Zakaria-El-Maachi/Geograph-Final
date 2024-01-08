import { useState, useEffect, useRef } from 'react';
import Globe from 'react-globe.gl';
import { CountryLabel } from './countryLabel';
import { useResizeElement } from './../../hooks/useResizeElement';

import './style.scss';

import globeImg from './../../assets/earth-day.jpg';
import bgImg from './../../assets/night-sky.png';


const COUNTRIES_FILE = 'data/Countries.json';

const MAP_CENTER = { lat: 6.0, lng: -70.0, altitude: 1.5 };


export function World({country, setCountry, scrollDown=f=>f}){
    const [countries, setCountries] = useState({ features: []});
    const [hoverD, setHoverD] = useState();

    const square = useResizeElement();
    const globeRef = useRef(null);


    useEffect(() => {
        fetch(COUNTRIES_FILE).then(res => res.json()).then(setCountries);
        globeRef.current.pointOfView(MAP_CENTER, 750);
    }, []);

    
    const handleClick=(polygon, e, { lat, lng })=>{
        setCountry({properties: polygon.properties, __id:polygon.__id})
        globeRef.current.pointOfView({ lat, lng }, 750);
        scrollDown(square.size.height);
    }

    const isSelected=(d)=>{
        return d.__id===country.__id || d===hoverD;
    }

    const setColor=(d)=>{
        if(d.__id===country.__id){
            return 'rgba(34, 164, 241, 1)';
        }else if(d===hoverD){
            return 'rgba(34, 164, 241, 0.5)';
        }
        return 'rgba(34, 164, 241, 0)';
    }

    const handlePoint=({ lat, lng }, event)=>{
        globeRef.current.pointOfView({ lat, lng }, 750);
    }

    const handleScrollDown = ()=>{
        scrollDown(square.size.height);
    }

    return <div className='globe' ref={square.ref}>

        <div className='header'>
            <h3>🔽 Select a Country 🔽</h3>
        </div>

        <Globe
            ref={globeRef}
            globeImageUrl={globeImg}
            backgroundImageUrl={bgImg}

            onGlobeClick={handlePoint}

            polygonsData={countries.features.filter(d => d.properties.ISO_A2 !== 'AQ')}
            polygonLabel={CountryLabel}

            polygonAltitude={d => isSelected(d) ? 0.02 : 0.01}
            polygonCapColor={d => setColor(d)}
            polygonCapMaterial={'./../../assets/earth-day.jpg'}
            polygonSideColor={() => 'rgb(0,0,0)'}
            polygonStrokeColor={() => 'rgb(0,0,0)'}
            onPolygonHover={setHoverD}
            onPolygonClick={handleClick}
            polygonsTransitionDuration={500}
            width={square.size.width}
            height={square.size.height}
            animateIn={false}
            atmosphereAltitude={0.25}
        />

        <button className='scroll-btn btn' onClick={handleScrollDown}>
            Down
        </button>
    </div>
};