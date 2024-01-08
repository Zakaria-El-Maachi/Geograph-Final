import { useEffect, useState, useRef } from "react";


export function useResizeElement(){
    const [size, setSite] = useState({width:0, height:0})
    const ref = useRef(null);

    useEffect(()=>{
        const handleClick = e => {
            const newWidth = ref.current.clientWidth;
            const newHeight = ref.current.clientHeight;
            setSite({width:newWidth, height:newHeight})
        };
        
        const newWidth = ref.current.clientWidth;
        const newHeight = ref.current.clientHeight;
        setSite({width:newWidth, height:newHeight})

        window.addEventListener('resize', handleClick);

        return () => {
            window.removeEventListener('resize', handleClick);
        };
    },[])

    return {size, ref};
}