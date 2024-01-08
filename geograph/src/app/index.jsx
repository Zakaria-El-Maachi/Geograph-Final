import { useState, useEffect, useRef } from 'react';
import './style.scss';

import { World } from './../Components/world';
import { ForeCast } from './../Components/forcast';

import { useResizeElement } from './../hooks/useResizeElement';

const InitCountry = './data/VenezuelaCountry.json';

export default function App(){
    const [country, setCountry] = useState(null);
    const boxRef = useResizeElement();

    useEffect(()=>{
        fetch(InitCountry).then(res => res.json()).then(setCountry);
    },[])

    const scrollDown=(heightPx=100)=>{
        if(boxRef.size.width <=560){
            window.scroll({
                top: heightPx,
                left: 0,
                behavior: 'smooth'
            });
        }
    }

    return (
        <main className='layout' ref={boxRef.ref}>
        
            <World country={country} setCountry={setCountry} scrollDown={scrollDown}/>
            
            <ForeCast country={country}/>
            
        </main>
    )
}