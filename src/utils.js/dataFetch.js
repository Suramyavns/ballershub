import axios from "axios";

async function fetchData(url,options={}){
    try{
        const response = await axios.get(url,options);
        return response.data
    }catch(error){
        console.error('error fetching data: ',error);
        throw error;
    }
}

export {fetchData};