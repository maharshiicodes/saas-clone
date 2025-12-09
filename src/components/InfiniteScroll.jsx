import React from 'react';
import Marquee from 'react-fast-marquee';
// 1. Make sure these import paths and filenames EXACTLY match your project
import atoonLogo from '../assets/Images/div1.png';
import healthLogo from '../assets/Images/div2.png';
import travelLogo from '../assets/Images/div-3.png';

// 2. Use the imported variables here
const products = [
  { name: 'atoon', src: atoonLogo },
  { name: 'health', src: healthLogo },
  { name: 'travel', src: travelLogo },
  // I've added clones here to make the loop look longer and more natural
  { name: 'atoon-clone', src: atoonLogo },
  { name: 'health-clone', src: healthLogo },
  { name: 'travel-clone', src: travelLogo }
];

function InfiniteScroll() {
    return (
     // This container gives the section a light gray background and spacing
     <div className='w-full pt-4 pb-16 '>
        <h3 className="text-center text-blue-500 font-semibold mb-8 text-3xl font-sans size">
          Trusted by companies worldwide
        </h3>
        <Marquee 
          pauseOnHover={true} 
          speed={60} 
          gradient={true} 
          gradientColor="#000000" // Matches the bg-gray-100 color
        >
            {products.map((product, index) => (
                <div key={index} className="mx-12 flex items-center justify-center">
                    <img 
                      src={product.src} 
                      alt={product.name} 
                      // The final size for your images
                      className='h-60 w-auto' 
                    />
                </div>
            ))}
        </Marquee>
     </div>
    );
}

export default InfiniteScroll;