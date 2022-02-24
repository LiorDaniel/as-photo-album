import React, { useState } from "react";
import "./PhotoItem.css"
function PhotoItem(props){

return(<>
    <div className="photo-item">
        {props.index}
    </div>
  

    </>
)
}

export default PhotoItem