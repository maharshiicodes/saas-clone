import React from 'react';
import Marquee from 'react-fast-marquee';
import atoonLogo from '../assets/Images/div1.png';
import healthLogo from '../assets/Images/div2.png';
import travelLogo from '../assets/Images/div-3.png';

const products = [
  { name: 'atoon', src: atoonLogo },
  { name: 'health', src: healthLogo },
  { name: 'travel', src: travelLogo },
  { name: 'atoon-clone', src: atoonLogo },
  { name: 'health-clone', src: healthLogo },
  { name: 'travel-clone', src: travelLogo }
];

function InfiniteScroll() {
    return (
    
     <div className='w-full pt-4 pb-16 '>
        <h3 className="text-center text-blue-500 font-semibold mb-8 text-3xl font-sans size">
          Trusted by companies worldwide
        </h3>
        <Marquee 
          pauseOnHover={true} 
          speed={60} 
          gradient={true} 
          gradientColor="#000000" 
        >
            {products.map((product, index) => (
                <div key={index} className="mx-12 flex items-center justify-center">
                    <img 
                      src={product.src} 
                      alt={product.name} 
                    
                      className='h-60 w-auto' 
                    />
                </div>
            ))}
        </Marquee>
     </div>
    );
}

export default InfiniteScroll;