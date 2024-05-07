import axios from 'axios'

const BASE_URL = 'http://localhost:8080/api/v1';

export const fetchUniversity = async() =>{
    try{
        const Universities = await axios.get(`${BASE_URL}/university/get`);
        console.log("respones   : " , Universities.data);
        return Universities.data;
    }
    catch(err){
        console.error("Error in Fetch Universities" , err);
        throw err;
    }
}                           