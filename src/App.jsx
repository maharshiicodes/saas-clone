import React from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import InfiniteScroll from './components/InfiniteScroll';
import HomePage from './pages/HomePage';
import { Routes, Route } from 'react-router-dom';
import WhyUs from './components/WhyUs';
import Services from './components/Services';
import Projects from'./components/Projects';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <NavBar />
      <main className="pt-16">
        <Routes>
          <Route path="/" element={<HomePage />} /> 
          <Route path="/why-us" element={<WhyUs />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/projects" element={<Projects/>}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;