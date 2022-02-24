import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import './PhotoAlbum.css';

function PhotoAlbum() {
  const data = new Array(50).fill().map((value, id) => ((id)))

  const [count, setCount] = useState({
    prev: 0,
    next: 10
  })
  const [hasMore, setHasMore] = useState(true);
  const [current, setCurrent] = useState(data.slice(count.prev, count.next))

  const getMoreData = () => {
    if (current.length === data.length) {
      setHasMore(false);
      return;
    }
    setTimeout(() => {
      setCurrent(current.concat(data.slice(count.prev + 10, count.next + 10)))
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
          <div key={index} className="post">
            {item}
          </div>
        )))
        }
      </div>
    </InfiniteScroll>
  );
}
export default PhotoAlbum;