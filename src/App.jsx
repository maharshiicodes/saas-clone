import React from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import {Routes , Route} from 'react-router-dom'

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} /> 
        </Routes>
      </main>
    </>
  )
}

export default App;
