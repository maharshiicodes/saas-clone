import React from "react";

export default function Contact(){
    return(
        <div className="min-h-screen bg-black">
            <div className="flex flex-col items-center">
                <div className="flex flex-col gap-8">
                     <div className="flex flex-row bg-blue-800 h-9 w-35 rounded-2xl  ml-40 lg:ml-63">
                         <div className="bg-blue-300 animate-pulse w-3 h-3 rounded-full ml-2 mt-2.5 mr-1"></div>
                         <p className="text-white ml-1 my-1">Let's Connect</p>
                     </div>
                        <h1 className="text-blue-500 text-3xl lg:text-5xl font-extrabold tracking-tight text-center">Contact Us</h1>
                        <p className="text-white text-md text-center lg:text-xl">Don't wait! Build your product now and transform your vision into reality</p>
                        <div className="flex flex-col items-center md:flex-row gap-6">
                           <div className="flex flex-col gap-3 bg-blue-400/10 h-150 w-80 rounded-xl">
                           <div>
                             <h1 className="text-white text-2xl font-extrabold tracking-tight pl-8 pt-6">GET IN TOUCH</h1>
                             </div>
                             {/* first component */}
                             <div className="flex flex-row gap-5 flex-nowrap pl-8 mt-6">
                                {/* icon div */}
                               <div className=" flex items-center justify-center bg-white h-11 w-11 rounded-full">
                                 <svg xmlns="http://www.w3.org/2000/svg" 
                                width="24" height="24" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
                                class="lucide lucide-message-square-icon lucide-message-square">
                                    <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"/></svg>
                               </div>
                               {/* msg div */}
                               <div className="flex flex-col gap-4">
                                 <h1 className="text-white text-xl/1 font-poppins font-extrabold tracking-tight">Send us a message</h1>
                                 <p className="text-neutral-500 font-light tracking-tight">We're here to answer your questions</p>
                               </div>
                             </div>
                             {/* second component */}
                             <div className="flex flex-row gap-5 flex-nowrap pl-8 mt-6">
                                {/* icon div */}
                               <div className=" flex items-center justify-center bg-white h-11 w-11 rounded-full">
                                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" 
                                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
                                 class="lucide lucide-phone-icon lucide-phone">
                                    <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/></svg>
                               </div>
                               {/* msg div */}
                               <div className="flex flex-col gap-4">
                                 <h1 className="text-white text-xl/1 font-poppins font-extrabold tracking-tight">Give us a call</h1>
                                 <p className="text-neutral-500 font-light tracking-tight">+91 966969669</p>
                               </div>
                             </div>
                             {/* third component */}
                             <div className="flex flex-row gap-5 flex-nowrap pl-8 mt-6">
                                {/* icon div */}
                               <div className=" flex items-center justify-center bg-white h-11 w-11 rounded-full">
                                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail-icon lucide-mail"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>
                               </div>
                               {/* msg div */}
                               <div className="flex flex-col gap-4">
                                 <h1 className="text-white text-xl/1 font-poppins font-extrabold tracking-tight">Email us</h1>
                                 <p className="text-neutral-500 font-light tracking-tight">info@developer.com</p>
                               </div>
                             </div>
                             {/* fourth component */}
                             <div className="flex flex-row gap-5 flex-nowrap pl-8 mt-6">
                                {/* icon div */}
                               <div className=" flex items-center justify-center bg-white h-11 w-11 rounded-full">
                                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin-icon lucide-map-pin"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>
                               </div>
                               {/* msg div */}
                               <div className="flex flex-col gap-4">
                                 <h1 className="text-white text-xl/1 font-poppins font-extrabold tracking-tight">Our location</h1>
                                 <p className="text-neutral-500 font-light tracking-tight">Working remotely worldwide</p>
                               </div>
                             </div>
                             <div className="bg-neutral-300 h-0.5 w-60 ml-8 mt-5"></div>
                             <div className="flex flex-col">
                              <div className="ml-8 mt-3">
                                <h1 className="text-white text-xl font-extrabold tracking-tight">Follow us</h1>
                              </div>
                             <div className="flex flex-row gap-4 pl-8 mt-4">
                                 <div className=" flex items-center justify-center bg-white h-11 w-11 rounded-full hover:bg-neutral-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-twitter-icon lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                               </div>
                               <div className=" flex items-center justify-center bg-white h-11 w-11 rounded-full hover:bg-neutral-400">
                                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-instagram-icon lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                               </div>
                               <div className=" flex items-center justify-center bg-white h-11 w-11 rounded-full hover:bg-neutral-400">
                                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"   stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin-icon lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                               </div>
                             </div>
                             </div>
                           </div>
                           <div class="relative w-full max-w-sm rounded-2xl p-8  bg-gradient-to-br from-[#1e2336]  to-[oklch(71.4%_0.203_305.504)] text-white h-150">
                               <div class="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-600 rounded-full blur-[100px] opacity-30"></div>
                                   <h2 class="relative z-10 text-2xl font-bold mb-4">Let's Build Something Amazing Together</h2>
                                   <p className="absolute top-30 font-bold text-md px-2 mr-11">Ready to transform your app idea into reality? Book a free consultation with our experts and let's discuss how we can help bring your vision to life.</p>
                                   <div className="absolute flex justify-between gap-5 top-65">
                                      <div className=" relative h-8 w-8 bg-white rounded-full"><span className="absolute pt-1 my-auto text-black font-bold ml-2.5 ">1</span></div>
                                      <p className="font-extrabold">Share your app idea with us</p>
                                   </div>
                                   <div className="absolute flex justify-between gap-5 top-85">
                                      <div className=" relative h-8 w-8 bg-white rounded-full"><span className="absolute pt-1 my-auto text-black font-bold ml-2.5 ">2</span></div>
                                      <p className="font-extrabold">Get a free project assessment</p>
                                   </div>
                                   <div className="absolute flex justify-between gap-5 top-105">
                                      <div className=" relative h-8 w-8 bg-white rounded-full"><span className="absolute pt-1 my-auto text-black font-bold ml-2.5 ">3</span></div>
                                      <p className="font-extrabold">Recieve a tailored development plan</p>
                                   </div>
                                   <div className="absolute w-80 h-10 bg-white rounded-full top-125 cursor-pointer">
                                    <p className="text-center py-2 font-extrabold text-purple-400">Book free consultation</p>
                                   </div>
                              </div>
                        </div>   
                </div>
            </div>
            
        </div>   
    )
}