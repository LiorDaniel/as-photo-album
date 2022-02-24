import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../Context";
import "./SearchBar.css"
function SearchBar(){
    const {presentedPhotos,setPresentedPhotos,fetchPhotos,albumNum}=useContext(Context)
const [search,setSearch] =useState("")

const handleChange=(event)=>{
    setSearch(event.target.value)
}
useEffect(()=>{
setSearch("")
},[albumNum])
useEffect(()=>{
    if(search===""){
       return fetchPhotos()
    }
    setPresentedPhotos(presentedPhotos.filter((photo)=>photo.title.includes(search)))
},[search])
    return (
        <input type="search" placeholder="search Photo" value={search} onChange={handleChange}/>
    )
}

export default SearchBar