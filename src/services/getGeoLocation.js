import axios from "axios";


const getGeoLocation = async () => {
    const url = `http://api.openweathermap.org/geo/1.0/zip?zip={zip code},{country code}&appid={API key}`
    const req = await axios.get(url)
    return req
}



export default getGeoLocation
