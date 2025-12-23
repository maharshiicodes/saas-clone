import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const navLinks = [
        { path: "/", label: "Home" },
        { path: "why-us", label: "Why Us" },
        { path: "/services", label: "Services" },
        { path: "/projects", label: "Projects" },
        { path: "/blogs", label: "Blogs" },
        { path: "/pricing", label: "Pricing" },
        { path: "/contact", label: "Contact" },
    ];

    return (
        <div className='bg-black relative w-full z-50'>
            <div className='max-w-7xl mx-auto px-4'>
                <div className='flex items-center justify-between h-20'>
                    
                    <div className='flex md:hidden'>
                        <span className='text-white font-bold text-xl'>Menu</span>
                    </div>

                    <div className='hidden md:flex items-center justify-center space-x-2 w-full'>
                        {navLinks.map((link) => (
                            <Link 
                                key={link.label}
                                to={link.path} 
                                className='px-4 py-2 text-white bg-transparent rounded-lg font-sans transition-all duration-300 ease-in-out hover:text-blue-500 hover:scale-105'
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link 
                            to="/" 
                            className='bg-blue-500 rounded-3xl text-white px-5 py-2 ml-4 transform hover:scale-105 transition-all duration-300 ease-in-out'
                        >
                            Book Free Consultation 
                        </Link>
                    </div>

                    <div className='md:hidden'>
                        <button 
                            onClick={toggleMenu} 
                            className='text-white focus:outline-none hover:text-blue-500'
                        >
                            {!isOpen ? (
                                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className='md:hidden bg-black w-full pb-5 absolute top-20 left-0 border-t border-gray-800 shadow-lg'>
                    <div className='flex flex-col items-center space-y-4 pt-4'>
                        {navLinks.map((link) => (
                            <Link 
                                key={link.label}
                                to={link.path} 
                                onClick={() => setIsOpen(false)}
                                className='text-white text-lg font-sans hover:text-blue-500 transition-colors duration-300'
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link 
                            to="/" 
                            onClick={() => setIsOpen(false)}
                            className='bg-blue-500 rounded-3xl text-white px-6 py-2 transform hover:scale-105 transition-all duration-300'
                        >
                            Book Free Consultation 
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}

export default NavBar;