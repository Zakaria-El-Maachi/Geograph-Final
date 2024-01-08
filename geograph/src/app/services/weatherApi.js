
const timeZone ='&timezone=auto';

export async function getWeather(Latitude=null, Longitude=null, id=null){
    if(Latitude===null) throw Error('Latitude required!')
    if(Longitude===null) throw Error('Longitude required!')

    try{
        let request = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${Latitude}&longitude=${Longitude}&hourly=relativehumidity_2m&current_weather=true${addTimeZone(id)}`);
        let data = await request.json()
        return data;
    }catch{

        console.log("error")
        console.log("hola?")
    }
}

const addTimeZone = (id)=>{ // greenland and Ukraine does not accep timezone
    if([139, 163].includes(id)){
        return ''
    }
    return timeZone;
}