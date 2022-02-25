import React, { useState, useEffect, useRef, useContext } from 'react';
import { Context } from "./../../Context"
import { FixedSizeList as List } from "react-window";
import "./AlbumList.css"

function AlbumList() {
    const { setAlbumNum } = useContext(Context)
    //array of numbers 1-100
    const data = new Array(100).fill().map((id) => ((id + 1)))
    const [isOpen, setIsOpen] = useState(false)
    const ref = useRef()

    const toggle = () => {
        setIsOpen((prev) => !prev)
    }

    useEffect(() => {
        // click anywhere outside the list to close it
        const checkIfClickedOutside = (event) => {
            {
                if (
                    isOpen &&
                    ref.current &&
                    (!ref.current.contains(event.target) || event.target.className === "list-item")) {
                    toggle();
                }
            }
        };
        document.addEventListener("click", checkIfClickedOutside);
        return () => {
            // Cleanup the event listener
            document.removeEventListener("click", checkIfClickedOutside);
        };
    }, [isOpen]);

    const Row = ({ index, style }) => (
        <div style={style} className='list-item' key={index} onClick={() => setAlbumNum(index + 1)}>
            Album {index+1}
        </div>
    )

    const handleClick=()=>{
        toggle()
         setAlbumNum(-1);
    }

    return (
        <div className='select-album-list' ref={ref}>
            <button className='select-album-list-button' onClick={handleClick}>select album</button>
            {
                isOpen &&
                <List
                    className="List"
                    height={150}
                    itemCount={100}
                    itemSize={35}
                    width={100}
                >
                    {Row}
                </List>
            }

        </div>
    );
}
export default AlbumList;