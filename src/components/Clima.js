import {useEffect,useState} from 'react'
import getClima from '../services/getClima'
import '../Styles/Clima.css'



const Clima = () => {
  



    const [lati, setLati] = useState(0)
    const [longi, setLongi] = useState(0)
    let [temp, setTemp] = useState('')
    const [city, setCity] = useState('')
    const [country, setCountry] = useState('')
    const [imgclima, setImgclima] = useState()
    const [weather, setWeather] = useState('')
    const [far , setFar] = useState('°F')
    

    //opteninedo position geografica
    navigator.geolocation.getCurrentPosition( (info) => {
        
        setLati(info.coords.latitude)
        setLongi(info.coords.longitude)

    })

    

   


    useEffect(() =>{
        getClima(lati,longi)
            .then(res =>{
                console.log(res.data)
                setTemp(Math.floor(res.data.main.temp))
                setImgclima(res.data.weather[0].icon)
                setCity(res.data.name)
                setCountry(res.data.sys.country)
                setWeather(res.data.weather[0].description)
                
            })
            .catch(error => {
                console.log(error)
            })
    },[lati,longi])
    

    const temperatureChange = () =>{
        
        if (temp > 57 ){
            return setTemp(Math.floor(temp - 273) ), setFar('°C')
            setFar('°F')
        }else{
            return setTemp(Math.floor(temp + 273) ), setFar('°F')
            
        }
        
    }

  


    return (
        <div className='container'>
            <h1>{city}, {country}</h1>
            <img src={`http://openweathermap.org/img/wn/${imgclima}@4x.png`} alt=''/>
            <h2>Temperatura:  {temp}  {far}</h2>
            <h2>Clima: {weather}  </h2>
            <button className='btn-centi' onClick={() => temperatureChange()} >Centigrados</button>

        </div>
    )
}

export default Clima