import axios from 'axios'

const getClima = async(latitud,longitud) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&appid=63463dd99482390e20a08349e36493e7&lang=sp`
    const req = await axios.get(url)
    return req
}

export default getClima