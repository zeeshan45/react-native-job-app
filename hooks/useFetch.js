import axios from "axios";
import { useState } from "react";

const useFetch = async(endpoint)=>{
    conct [DataTransfer,setData] = useState([])
    
    const [isLoading,setIsLoading] = useState(false)
    const [error,setError] = useState(null)
    const options = {
    method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
            'X-RapidAPI-Key': '39eead91ccmsh3534d72a0a3a615p126ec2jsn30aa7dd139a9',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        params: {
            query: 'Python developer in Texas, USA',
            page: '1',
            num_pages: '1'
        },
    };

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }
}