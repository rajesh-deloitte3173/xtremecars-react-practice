import { useEffect, useState } from "react"

const useFetch = (url) =>{
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        fetch(url)
        .then(res=>{
            if(!res.ok){
                throw Error("Could not fetch data");
            }
            return res.json();
        })
        .then(data=>{
            console.log(data);
            setData(data);
            setLoading(false);
            setError(null);
        })
        .catch(err=>{
            console.log(err.message);
            setError(err.message);
            setLoading(false);
            setData(null);
        })
    },[url]);

    return {data, loading, error};
}

export default useFetch;