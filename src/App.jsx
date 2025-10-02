import React from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import InfiniteScroll from './components/InfiniteScroll';
import HomePage from './pages/HomePage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="bg-black">
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} /> 
        </Routes>
      </main>
    </div>
  );
}

export default App;