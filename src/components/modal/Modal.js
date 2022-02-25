import React, { useEffect, useRef } from "react";
import "./Modal.css"

function Modal(props) {
    const ref = useRef()

    useEffect(() => {
        // click anywhere outside the modal to close it
        const checkIfClickedOutside = (event) => {
            {
                if (props.isModalOpen &&ref.current &&!ref.current.contains(event.target)) {
                    props.toggle();
                }
            }
        };
        document.addEventListener("click", checkIfClickedOutside);
        return () => {
            // Cleanup the event listener
            document.removeEventListener("click", checkIfClickedOutside);
        };
    }, [props.isModalOpen]);

    return (
        <div id="myModal" className="modal" >
            <div className="modal-content" ref={ref}>

                <img src={props.photo.url} />
                <div className="modal-image-details">
                    <p className="image-title">{props.photo.title}</p>
                    <p className="image-album-id">Album number {props.photo.albumId}</p>
                    <p className="image-id">Image {props.photo.id} / 50</p>

                </div>
                <span className="close" onClick={props.toggle}>&times;</span>
            </div>

        </div>
    )
}

export default Modal