import React, { useEffect, useState } from "react";

const Context= React.createContext()

function ContextProvider({children}){
    const [presentedPhotos,setPresentedPhotos]= useState([])
    const [albumNum,setAlbumNum]= useState(1)
   
    const fetchPhotos= ()=>{
        fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumNum}`)
        .then(res=>res.json())
        .then(data=>{
            setPresentedPhotos(data)})
    }

    
   
   
 
    return(
        <Context.Provider value={{presentedPhotos,setPresentedPhotos,fetchPhotos, albumNum,setAlbumNum}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider,Context}