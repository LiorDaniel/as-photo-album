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
    setCount({prev:0,next:10})
    setCurrent([])
    setHasMore(true)
    if(setAlbumNum!==-1){
            setCurrent(presentedPhotos.slice(0, 10))
            console.log("count is "+count.prev+" "+count.next )
    }
},[presentedPhotos])


  const getMoreData = () => {
    if (current.length === presentedPhotos.length) {
      setHasMore(false);
      return;
    }
    setTimeout(() => {
      setCurrent(current.concat(presentedPhotos.slice(count.prev + 10, count.next + 10)))
      console.log(albumNum)
    }, 2000)
    setCount((prevState) => ({ prev: prevState.prev + 10, next: prevState.next + 10 }))
  }

  return (
      
          presentedPhotos.length>0&&
      
    <InfiniteScroll
      dataLength={current.length}
      next={getMoreData}
      hasMore={hasMore}
      loader={<div className='loader'><div className='dot'></div> <div  className='dot'></div> <div  className='dot'></div></div>}
    >
      <div className='grid'>
        {current && current.map(((item, index) => (
         <PhotoItem photo={item} key={index}/>
        )))
        }
      </div>
    </InfiniteScroll>
  );
}
export default PhotoAlbum;