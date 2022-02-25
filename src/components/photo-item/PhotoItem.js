import React, { useState } from "react";
import "./PhotoItem.css"
import Modal from "../modal/Modal";
function PhotoItem(props) {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const toggle = () => {
        setIsModalOpen((prev) => !prev)
    }
    
    return (
    <>
        <div className="photo-item" onClick={toggle}>
            <div className="photo-item-top"><img src={props.photo.url} /></div>
            <div className="photo-item-middle">
                <div className="photo-title">{props.photo.title}</div>
                <div>id: {props.photo.id}</div>
            </div>
            <div className="photo-item-bottom">
                {props.photo.url}
            </div>
        </div>
        {
            isModalOpen &&
            <Modal isModalOpen={isModalOpen} toggle={toggle} photo={props.photo} />
        }
    </>
    )
}

export default PhotoItem