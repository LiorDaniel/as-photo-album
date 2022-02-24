import React, { useContext, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import PhotoItem from '../photo-item/PhotoItem';
import './PhotoAlbum.css';
import {Context} from "./../../Context"
function PhotoAlbum() {
    const {presentedPhotos} =useContext(Context)
  const [count, setCount] = useState({
    prev: 0,
    next: 10
  })
  const [hasMore, setHasMore] = useState(true);
  const [current, setCurrent] = useState(presentedPhotos.slice(count.prev, count.next))

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
      loader={<h4>Loading...</h4>}
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