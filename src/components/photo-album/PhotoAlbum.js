import React, { useContext, useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import PhotoItem from '../photo-item/PhotoItem';
import './PhotoAlbum.css';
import {Context} from "./../../Context"
function PhotoAlbum() {
    const {fetchPhotos,presentedPhotos,albumNum,setAlbumNum} =useContext(Context)
  const [count, setCount] = useState({
    prev: 0,
    next: 10
  })
  const [hasMore, setHasMore] = useState(true);
  const [current, setCurrent] = useState([])
useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumNum}`)
        .then(res=>res.json())
        .then(data=>{
            setCurrent(data.slice(count.prev, count.next))
        })
        return ()=>{
            setCurrent([])
            setCount({prev:0,next:10})
            
        }
},[albumNum])


  const getMoreData = () => {
    if (current.length === presentedPhotos.length) {
      setHasMore(false);
      return;
    }
    setTimeout(() => {
      setCurrent(current.concat(presentedPhotos.slice(count.prev + 10, count.next + 10)))
    }, 2000)
    setCount((prevState) => ({ prev: prevState.prev + 10, next: prevState.next + 10 }))
  }

  return (
    <InfiniteScroll
      dataLength={current.length}
      next={getMoreData}
      hasMore={hasMore}
      loader={<div className='loader'><div className='dot'></div> <div  className='dot'></div> <div  className='dot'></div></div>}
    >
      <div className='grid'>
        {current && current.map(((item, index) => (
         <PhotoItem photo={item}/>
        )))
        }
      </div>
    </InfiniteScroll>
  );
}
export default PhotoAlbum;