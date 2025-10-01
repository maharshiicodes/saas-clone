import React from 'react'; 
import {Link} from 'react-router-dom';

function NavBar(){
    return(
        <>
          <nav className='rounded-md w-ful h-20 flex items-center justify-center'>
            <Link to="/" className='px-5 py-2 text-white bg-transparent rounded-lg transform
            font-sans transition-all duration-300 ease-in-out
            hover:text-blue-500 scale-105 bg-gray-200'>Home</Link>
             <Link to="why-us" className='px-5 py-2 text-white bg-transparent rounded-lg transform
            font-sans transition-all duration-300 ease-in-out
            hover:text-blue-500 scale-105 bg-gray-200'>Why Us</Link>
             <Link to="/services" className='px-5 py-2 text-white bg-transparent rounded-lg transform
            font-sans transition-all duration-300 ease-in-out
            hover:text-blue-500 scale-105 bg-gray-200'>Services</Link>
             <Link to="/projects" className='px-5 py-2 text-white bg-transparent rounded-lg transform
            font-sans transition-all duration-300 ease-in-out
            hover:text-blue-500 scale-105 bg-gray-200'>Projects</Link>
             <Link to="/blogs" className='px-5 py-2 text-white bg-transparent rounded-lg transform
            font-sans transition-all duration-300 ease-in-out
            hover:text-blue-500 scale-105 bg-gray-200'>Blogs</Link>
             <Link to="pricing" className='px-5 py-2 text-white bg-transparent rounded-lg transform
            font-sans transition-all duration-300 ease-in-out
            hover:text-blue-500 scale-105 bg-gray-200'>Pricing</Link>
             <Link to="/contact"className='px-5 py-2 text-white bg-transparent rounded-lg transform
            font-sans transition-all duration-300 ease-in-out
            hover:text-blue-500 scale-105 bg-gray-200'>Contact</Link>
            <Link to="/consult" className='bg-blue-500 rounded-3xl text-white px-5 py-2 h-10  transform
            hover:scale-105 transition-all duration-300 ease-in-out'>Book Free Consultation </Link>
        </nav>
        </>
    ) 
}

export default NavBar;