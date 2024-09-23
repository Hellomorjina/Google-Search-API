
import axios from "axios";
import { useState } from "react";

export default function uscFecth() {
  const API = `AIzaSyCwISrPq-rMHdRnIO9Aa5es-lil6TCBQEk`;
  // const searchTerms = `react`;
  const searchID = `315fffee6b98c4dac`;

  const [results, setResults] = useState([]);
  const [lodding, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const getResults = async (query) => {

    const BASE_URL = `https://www.googleapis.com/customsearch/v1?key=${API}&q=${query}&num=5&cx=${searchID}`;
    try{
      setError(null);
      setLoading(true)
      const response = await axios.get(BASE_URL);
        console.log(response.data.items);
        setResults(response.data.items || []);

    }catch(error){
      console.log(error);
      setError(error.massage);

    }
    finally{
      setLoading(false);
    }
    
  }
  return [results,lodding,error,getResults]
}
