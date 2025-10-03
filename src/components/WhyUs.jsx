import React from "react";
import AnimatedNumbers from './AminatedNumbers'

function WhyUs(){
    return(
      
        <section className='flex flex-col justify-evenly gap-13 items-center  min-h-screen'>
            <div>
            <h1 className='text-white text-5xl text-center font-mono font-bold tracking-wider'>WHY US</h1>
            <p className='text-gray-300 text-center max-w-300 text-2xl py-8'>At Flutter Your Way, we are a team of passionate and experienced app developers<br/> 
                and software engineers driven by a 
                shared mission to empower businesses with<br/> <span className='text-center'>innovative technology solutions.</span></p>
                </div>
                <div className='bg-black grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-16 max-w-5xl w-full'>
                   <AnimatedNumbers to={30} suffix='+' label ="Projects Completed"/>
                   <AnimatedNumbers to={19} suffix='+' label ="Happy Clients"/>
                   <AnimatedNumbers to={186} suffix='+' label ="Members Community"/>
                   <AnimatedNumbers to={4} suffix='+' label ="Years of Experience"/>
                 </div>
           </section>
        
    )
}
export default WhyUs