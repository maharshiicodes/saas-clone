import React from "react";
function Projects(){
    return(
        <>
             <div className='flex flex-col items-center'>
                 <div className='flex flex-col items-center gap-7'>
                     <div className='relative w-40 rounded-3xl bg-blue-200 text-blue-700 mx-auto text-center py-2 font-poppins 
                        before:content-[]  before:absolute before:top-1/3 before:left-3  before:inline-block before:w-4 before:h-3.5 before:rounded-full
                        before:bg-gradient-to-b before:from-blue-300 before:to-blue-600 '>Our Work</div>
                        <h1 className='font-poppins text-5xl tracking-tight bg-gradient-to-r from-blue-400 via-purple-300 to-blue-900 bg-clip-text text-transparent font-bold
                        [filter:drop-shadow(0_0_40px_white)]'>Featured Projects</h1>
                        <p className='text-transparent text-center bg-gradient-to-r from-blue-400 via-purple-300 to-blue-900 bg-clip-text
                        [filter:drop-shadow(0_0_30px_white)]'>We believe in the power of technology to empower businesses. 
                            Explore our latest projects and see how we've helped our clients transform their ideas 
                            into reality.</p>
                            <div className='flex items-center justify-evenly'>
                              
                            </div>
                 </div>
             </div>
        </>
    )
}

export default Projects;