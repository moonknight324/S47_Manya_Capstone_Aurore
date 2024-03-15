import React, { useEffect,useState} from "react";

const APOD = () =>{
    const [data, setdata] = useState(null);


useEffect(()=>{
    const fetchData = async () => {
        const apiKey = import.meta.env.VITE_API_KEY;
        const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

        try{
            const response = await fetch(apiUrl);
            const data = await response.json();
            setdata(data);
        }catch(error){
            console.error("Error fetchinng data",error);
        }
    };
    fetchData();
},[])

return(
    <div>
        {data ? ( 
            <>
            <h1>Astronomy Picture of the Day</h1>
            <h2>{data.title}</h2>
            <img src={data.url} alt={data.title} />
            <p>{data.explanation}</p>
            <p>Date : {data.date}</p>
            <p>Copyright : {data.copyright}</p>
            </>
        ) : (
            <p>Loading...</p>
        )}
    </div>
)
        }

export default APOD;