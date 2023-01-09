import React, { useEffect, useState } from "react";
import Headers from "../Header_Data/Heading";
import "../../App.css"
import Movies from "../Header_Data/Movies"





export default function Dashboard(){
    const [popularMovies,setPopularmovies] = useState([])

    useEffect(()=>{
  fetch("http://www.omdbapi.com/?i=tt3896198&apikey=cb68851c").then(res=>res.json()).then(data=>{
    console.log({data})
    setPopularmovies([data])
  }
  
)
    },[])
    return (
        <>
        <div className="Images">
        <Headers/>
          {
            popularMovies.map((movies,index)=><div>
           <Movies movies={movies} key={index}/>
                </div>)
          }
          
       
        </div>
        </>
    )
}