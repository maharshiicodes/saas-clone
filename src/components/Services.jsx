import React from "react";

function Services(){
    return(
        <div className='bg-black py-20 px-4'>
        <div className='flex flex-col  items-center text-center'>
           <h1 className='text-white text-5xl tracking-wide font-bold'>Services We Provide</h1>
           <p className='text-gray-300 mt-5 text-xl max-w-2xl'>We build robust apps through collaborative development that turns your vision into reality.</p>
            <div className='flex flex-wrap items-stretch justify-center mt-16 gap-8 text-white'>
               <div className='group flex flex-col items-start bg-gray-800 border border-gray-700 p-8 rounded-lg shadow-md w-full max-w-sm text-left transition-transform duration-300 hover:scale-105 hover:bg-white'>
                        <div className="p-3 mb-4 bg-gray-700 rounded-full group-hover:bg-blue-100">
                             <svg xmlns="http://www.w.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                        </div>
                        <h4 className='text-white text-xl font-bold mb-2 group-hover:text-black'>Startup & MVP</h4>
                        <p className='text-gray-400 mb-4 group-hover:text-black'>Quickly validate your concept with a market-ready MVP that captures your core idea.</p>
                        <a href="#" className='text-blue-400 font-semibold mt-auto group-hover:text-blue-600'>Learn more &gt;</a>
                    </div>
                    <div className='group flex flex-col items-start bg-gray-800 border border-gray-700 p-8 rounded-lg shadow-md w-full max-w-sm text-left transition-transform duration-300 hover:scale-105 hover:bg-white'>
                        <div className="p-3 mb-4 bg-gray-700 rounded-full group-hover:bg-blue-100 ">
                            <svg xmlns="http://www.w.g/2000/svg" className="h-6 w-6 text-blue-400 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                        </div>
                        <h4 className='text-white text-xl font-bold mb-2 group-hover:text-black'>Full-Cycle Development</h4>
                        <p className='text-gray-400 mb-4 group-hover:text-black'>End-to-end app creation: design, development, testing, and store deployment.</p>
                        <a href="#" className='text-blue-400 font-semibold mt-auto'>Learn more &gt;</a>
                    </div>
                     <div className='group flex flex-col items-start bg-gray-800 border border-gray-700 p-8 rounded-lg shadow-md w-full max-w-sm text-left transition-transform duration-300 hover:scale-105 hover:bg-white'>
                        <div className="p-3 mb-4 bg-gray-700 rounded-full group-hover:bg-blue-100">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                        </div>
                        <h4 className='text-white text-xl font-bold mb-2 group-hover:text-black'>Custom Solutions</h4>
                        <p className='text-gray-400 mb-4 group-hover:text-black'>Bespoke applications tailored to your unique business challenges and goals.</p>
                        <a href="#" className='text-blue-400 font-semibold mt-auto'>Learn more &gt;</a>
                    </div>
            </div>
        </div>
       <div className="bg-[rgb(15,23,42)] text-gray-300 font-sans p-8 mt-8 rounded-xl md:p-16">
        <div className='relative w-40 rounded-3xl bg-neutral-700 text-white mx-auto text-center py-2 font-sans 
       before:content-[]  before:absolute before:top-1/3 before:left-3  before:inline-block before:w-4 before:h-3.5 before:rounded-full
       before:bg-gradient-to-b before:from-blue-300 before:to-blue-600 '>Our Process</div>
    <h2 className="text-3xl mt-6 md:text-5xl font-bold text-center text-blue-400 mb-16">
        How It Works
    </h2>
    <div className="relative w-full max-w-3xl mx-auto
                 before:absolute before:top-0 before:left-1/2 
                before:w-[2px] before:h-full before:bg-slate-700">
        <div className="relative flex justify-start items-center mb-12
                    after:absolute after:left-1/2 after:-translate-x-1/2
                    after:w-4 after:h-4 after:bg-[#0f172a]
                    after:border-2 after:border-blue-500 after:rounded-full">
            <div className="w-1/2 pr-8">
                <div className="bg-slate-800 border border-slate-700 rounded-xl p-5 text-right">
                    <div className="text-xs text-gray-400 bg-slate-900 inline-block px-3 py-1 rounded-full mb-2">Step 01</div>
                    <h3 className="text-xl font-bold text-blue-400 mb-2">Discovery Call</h3>
                    <p className="text-sm text-gray-400">
                        We start with understanding your vision, requirements, and business goals. This initial consultation helps us map out the perfect strategy for your project.
                    </p>
                </div>
            </div>
        </div>
        <div className="relative flex justify-end items-center mb-12
                    after:absolute after:left-1/2 after:-translate-x-1/2
                    after:w-4 after:h-4 after:bg-[#0f172a]
                    after:border-2 after:border-blue-500 after:rounded-full">
            
            <div className="w-1/2 pl-8">
                <div className="bg-slate-800 border border-slate-700 rounded-xl p-5 text-left">
                    <div className="text-xs text-gray-400 bg-slate-900 inline-block px-3 py-1 rounded-full mb-2">Step 02</div>
                    <h3 className="text-xl font-bold text-blue-400 mb-2">Design</h3>
                    <p className="text-sm text-gray-400">
                        Our UI/UX experts create intuitive wireframes and high-fidelity prototypes that capture your brand identity while ensuring exceptional user experience.
                    </p>
                </div>
            </div>
        </div>
        <div className='relative flex justify-start items-center mb-12
        after:absolute after:left-1/2 after:-translate-x-1/2
        after:w-4 after:h-4 after:bg-[#0f172a]
        after:border-2 after:border-blue-500 after:rounded-full'>
            <div className='w-1/2 pr-8'>
              <div className='bg-slate-800 border border-slate-700 rounded-xl p-5 text-right'>
                <div className='text-xs text-gray-400 bg-slate-900 inline-block px-3 py-1 rounded-full mb-2'>Step 03</div>
                <h3 className="text-xl font-bold text-blue-400 mb-2">Development</h3>
                 <p className="text-sm text-gray-400">
                        Our skilled developers bring the designs to life using clean, scalable code. We follow industry best practices to ensure your application is robust and future-proof.
                    </p>
              </div>
            </div>
        </div>
         <div className="relative flex justify-end items-center mb-12
                    after:absolute after:left-1/2 after:-translate-x-1/2
                    after:w-4 after:h-4 after:bg-[#0f172a]
                    after:border-2 after:border-blue-500 after:rounded-full">
            
            <div className="w-1/2 pl-8">
                <div className="bg-slate-800 border border-slate-700 rounded-xl p-5 text-left">
                    <div className="text-xs text-gray-400 bg-slate-900 inline-block px-3 py-1 rounded-full mb-2">Step 04</div>
                    <h3 className="text-xl font-bold text-blue-400 mb-2">Testing</h3>
                    <p className="text-sm text-gray-400">
                        Rigorous quality assurance across multiple devices and platforms ensures your application is bug-free, responsive, and delivers a seamless experience.
                    </p>
                </div>
            </div>
        </div>
        <div className='relative flex justify-start items-center mb-12
        after:absolute after:left-1/2 after:-translate-x-1/2
        after:w-4 after:h-4 after:bg-[#0f172a]
        after:border-2 after:border-blue-500 after:rounded-full'>
            <div className='w-1/2 pr-8'>
              <div className='bg-slate-800 border border-slate-700 rounded-xl p-5 text-right'>
                <div className='text-xs text-gray-400 bg-slate-900 inline-block px-3 py-1 rounded-full mb-2'>Step 05</div>
                <h3 className="text-xl font-bold text-blue-400 mb-2">Deployment</h3>
                 <p className="text-sm text-gray-400">
                        We handle the entire submission and release process to make your application available on app stores, followed by continuous support and maintenance.
                    </p>
              </div>
            </div>
        </div>
    </div>
</div>
        </div>
    )
}
export default Services;