import React from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import InfiniteScroll from './components/InfiniteScroll';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="bg-black">
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} /> 
        </Routes>
      </main>
      <InfiniteScroll />
    </div>
  );
}

export default App;