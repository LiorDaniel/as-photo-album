import React, { useContext } from "react";
import AlbumList from "../album-list/AlbumList";
import SearchBar from "../search-bar/SearchBar";
import { Context } from "./../../Context"
import "./Header.css"


function Header() {

    const { albumNum } = useContext(Context)

    return (
        <div className="header">
            <h1>Photo Albums Page</h1>
            <div className="search-and-album">
                <SearchBar />

                <AlbumList />
                {albumNum !== -1 &&
                    <p className="current-album">Album number {albumNum}</p>
                }
            </div>

        </div>
    )

}

export default Header