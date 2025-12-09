import React from 'react';
import Home from '../components/Home'; 
import InfiniteScroll from '../components/InfiniteScroll'; 

function HomePage() {
  return (
    <div className='bg-black'>
      <Home />
      <InfiniteScroll />
   </div>
  );
}

export default HomePage;