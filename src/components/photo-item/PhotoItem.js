import React, { useState } from "react";
import "./PhotoItem.css"
function PhotoItem(props){

return(<>
    <div className="photo-item">
    <div className="photo-item-top"><img src={props.photo.url}/></div>
        <div className="photo-item-middle">
            <div className="photo-title">{props.photo.title}</div>
            <div>id: {props.photo.id}</div>
        </div>
        <div className="photo-item-bottom">
           {props.photo.url}
        </div>
    </div>
  

    </>
)
}

export default PhotoItem