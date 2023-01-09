import React, { useState } from "react";
import "./Heading.css"

export default function Headers(){
    const [search,setSearch] = useState("")




    return (
        <>
        <div className="Heading-Data">
            <h1 className="Heading">Movies</h1>
            <input className="search" type="text" placeholder="search heare" value={search} onChange={(e)=>setSearch(e.target.value)}/>
        </div>
        </>
    )
}