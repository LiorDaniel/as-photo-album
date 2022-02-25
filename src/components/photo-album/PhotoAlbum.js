import React, { useContext, useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import PhotoItem from '../photo-item/PhotoItem';
import { Context } from "./../../Context"
import './PhotoAlbum.css';

function PhotoAlbum() {
    const { presentedPhotos, albumNum } = useContext(Context)

    //SCROLLING RELATED STATES
    //how many photos are we displaying each time
    const [count, setCount] = useState({
        prev: 0,
        next: 10
    })
    const [hasMore, setHasMore] = useState(true);
    const [current, setCurrent] = useState([])
    
    useEffect(() => {
        //resetting all the scrolling states if another album was selected
        setCount({ prev: 0, next: 10 })
        setCurrent([])
        setHasMore(true)
        if (albumNum !== -1) {
            setCurrent(presentedPhotos.slice(0, 10))
        }
    }, [presentedPhotos])

// selecting the next set of photos to show 
    const getMoreData = () => {
        if (current.length === presentedPhotos.length) {
            setHasMore(false);
            return;
        }
        setTimeout(() => {
            setCurrent(current.concat(presentedPhotos.slice(count.prev + 10, count.next + 10)))
        }, 2000)
        //increasing count for next selection
        setCount((prevState) => ({ prev: prevState.prev + 10, next: prevState.next + 10 }))
    }

    return (
        presentedPhotos.length > 0 &&
        <InfiniteScroll
            dataLength={current.length}
            next={getMoreData}
            hasMore={hasMore}
            loader={<div className='loader'><div className='dot'></div> <div className='dot'></div> <div className='dot'></div></div>}
        >
            <div className='grid'>
                {current && current.map(((item, index) => (
                    <PhotoItem photo={item} key={index} />
                )))
                }
            </div>
        </InfiniteScroll>
    );
}
export default PhotoAlbum;