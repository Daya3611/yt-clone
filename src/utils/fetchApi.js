import axios from 'axios';
const BASE_URL = "https://www.googleapis.com/youtube/v3"
const API_KEY ="AIzaSyCvCDvniviX523hPWOt6oDER1rB8u5qsLM"

export const fetchApiForYoutubeData = async(enpoints,params ={}) =>{
    try {
       const response = await axios.get(`${BASE_URL}/${enpoints}`,{
           params:{
               ...params,
               key: API_KEY,
           }
       })
       console.log(response.data,'response')
       return response.data;
    } catch (error) {
       console.error(error,'error fetching youtube data')
    }
}