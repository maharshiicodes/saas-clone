import React from 'react';

function Home() {
    return (
        <div className="pt-15 flex items-center justify-center text-center">
            <div>
                <h1 className='font-sans text-5xl md:text-7xl font-extrabold leading-tight text-white'>
                    Launch your app In <br className='hidden md:block' /> 
                    <span className='text-blue-500'>Days,</span> Not <span className='text-blue-500 line-through'>Months</span><span>.</span>
                </h1>
                <h2 className='m-8 text-2xl text-white'>
                    For Startups & SMEs. Business-results oriented and AI-powered 🚀
                </h2>
            </div>
        </div>
    );
}

export default Home;