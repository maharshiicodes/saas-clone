import React from "react";

export default function Pricing(){
    return(
        <div className="flex flex-col items-center bg-black min-h-screen">
            <div className="flex flex-col items-center gap-10">
              <div className="bg-sky-50 h-8 w-40 flex gap-3 rounded-full">
                 <div className="bg-blue-300 w-3 h-3 rounded-full mt-2.5 ml-3"></div>
                 <p className="text-blue-600 pt-0.5 font-extrabold mt-0.5">Simple Pricing</p>
              </div>
              <div>
                <h1 className="text-white text-6xl tracking-normal font-sans font-extrabold">Choose Your Plan</h1>
              </div>
              <div>
                <p className="text-neutral-200 text-xl font-extrabold">Clear options to bring your app idea to life, with everything included to launch successfully</p>
              </div>
              <div className="flex  flex-col justify-start gap-10 lg:flex-row">
                  <div className="flex flex-col items-start w-75 h-185 rounded-2xl bg-white transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:scale-[1.02]">
                    <h1 className="text-3xl font-bold ml-3 mt-10">Frontend<br></br>Development</h1>
                    <p className="ml-3 mt-2 text-neutral-500 font-semibold text-md">Basic App Package</p>
                    <div className="flex gap-2">
                        <h1 className="ml-3 mt-2 text-4xl font-extrabold">$799</h1>
                        <p className="text-neutral-500 mt-4 text-xl font-bold">USD</p>
                    </div>
                    <div className="bg-neutral-200 h-0.5 w-59 ml-7 mr-8 mt-5"></div>
                    <div className="flex flex-col items-center">
                      <div className="flex flex-row gap-5 w-60 flex-nowrap">
                        <div className="bg-sky-50 h-8 w-8 rounded-full ml-4 mt-2">
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeWidth="1" 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                className="w-7 h-10 text-blue-500 pb-2 pl-1"
                            >                             
                           <path d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <p className="text-neutral-500 mt-1">Mobile app for your users</p>
                        
                      </div>
                      <div className="flex flex-row gap-5 w-60 flex-nowrap">
                        <div className="bg-sky-50 h-8 w-8 rounded-full ml-4 mt-2">
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeWidth="1" 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                className="w-7 h-10 text-blue-500 pb-2 pl-1"
                            >                             
                           <path d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <p className="text-neutral-500 mt-1">Converting your design into working app</p>
                        
                      </div>
                      <div className="flex flex-row gap-5 w-60 flex-nowrap">
                        <div className="bg-sky-50 h-8 w-8 rounded-full ml-4 mt-2">
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeWidth="1" 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                className="w-7 h-10 text-blue-500 pb-2 pl-1"
                            >                             
                           <path d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <p className="text-neutral-500 mt-1">Connecting to external services</p>
                        
                      </div>
                      <div className="flex flex-row gap-5 w-60 flex-nowrap">
                        <div className="bg-sky-50 h-8 w-8 rounded-full ml-4 mt-2">
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeWidth="1" 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                className="w-7 h-10 text-blue-500 pb-2 pl-1"
                            >                             
                           <path d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <p className="text-neutral-500 mt-1">Smooth animations and transitions</p>
                        
                      </div>
                      <div className="flex flex-row gap-5 w-60 flex-nowrap">
                        <div className="bg-sky-50 h-8 w-8 rounded-full ml-4 mt-2">
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeWidth="1" 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                className="w-7 h-10 text-blue-500 pb-2 pl-1"
                            >                             
                           <path d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <p className="text-neutral-500 mt-1">Help when you need it</p>
                        
                      </div>
                      <div className="flex flex-row gap-5 w-60 flex-nowrap">
                        <div className="bg-sky-50 h-8 w-8 rounded-full ml-4 mt-2">
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeWidth="1" 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                className="w-7 h-10 text-blue-500 pb-2 pl-1"
                            >                             
                           <path d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <p className="text-neutral-500 mt-1">10-30 Day Delivery</p>
                        
                      </div>
                      <div className="flex flex-row gap-5 w-60 flex-nowrap">
                        <div className="bg-sky-50 h-8 w-8 rounded-full ml-4 mt-2">
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeWidth="1" 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                className="w-7 h-10 text-blue-500 pb-2 pl-1"
                            >                             
                           <path d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <p className="text-neutral-500 mt-1">Unlimited changes until you are happy</p>
                        
                      </div>
                    </div>
                    <div className="bg-white ml-12 mt-15 w-50 h-15 rounded-md border border-neutral-300 flex items-center justify-center hover:ring hover:ring-black">
                       <div className="flex items-center justify-between">
                        <p className="text-xs font-mono font-semibold">Start your Project</p>
                            <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            strokeWidth="2" 
                            stroke="currentColor" 
                            className="w-6 h-6 ml-3"
                            >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" 
                            />
                            </svg>          
                       </div>
                     </div>
                  </div> 
                  {/* First white div ends here */}
                  <div className="flex flex-col items-start w-75 h-205 rounded-2xl bg-white transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:scale-[1.02]">
                    <h1 className="text-3xl font-bold ml-3 mt-10">MVP<br></br>Development</h1>
                    <p className="ml-3 mt-2 text-neutral-500 font-semibold text-md">Complete Starter Package</p>
                    <div className="flex gap-2">
                        <h1 className="ml-3 mt-2 text-4xl font-extrabold">$2499</h1>
                        <p className="text-neutral-500 mt-4 text-xl font-bold">USD</p>
                    </div>
                    <div className="bg-neutral-200 h-0.5 w-59 ml-7 mr-8 mt-5"></div>
                    <div className="flex flex-col items-center">
                      <div className="flex flex-row gap-5 w-60 flex-nowrap">
                        <div className="bg-sky-50 h-8 w-8 rounded-full ml-4 mt-2">
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeWidth="1" 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                className="w-7 h-10 text-blue-500 pb-2 pl-1"
                            >                             
                           <path d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <p className="text-neutral-500 mt-1">Mobile app plus admin dashboard</p>
                        
                      </div>
                      <div className="flex flex-row gap-5 w-60 flex-nowrap">
                        <div className="bg-sky-50 h-8 w-8 rounded-full ml-4 mt-2">
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeWidth="1" 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                className="w-7 h-10 text-blue-500 pb-2 pl-1"
                            >                             
                           <path d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <p className="text-neutral-500 mt-1">Custom design for your brand</p>
                        
                      </div>
                      <div className="flex flex-row gap-5 w-60 flex-nowrap">
                        <div className="bg-sky-50 h-8 w-8 rounded-full ml-4 mt-2">
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeWidth="1" 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                className="w-7 h-10 text-blue-500 pb-2 pl-1"
                            >                             
                           <path d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <p className="text-neutral-500 mt-1">Converting designs into working app
</p>
                        
                      </div>
                      <div className="flex flex-row gap-5 w-60 flex-nowrap">
                        <div className="bg-sky-50 h-8 w-8 rounded-full ml-4 mt-2">
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeWidth="1" 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                className="w-7 h-10 text-blue-500 pb-2 pl-1"
                            >                             
                           <path d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <p className="text-neutral-500 mt-1">Building your apps brain (backend)</p>
                        
                      </div>
                      <div className="flex flex-row gap-5 w-60 flex-nowrap">
                        <div className="bg-sky-50 h-8 w-8 rounded-full ml-4 mt-2">
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeWidth="1" 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                className="w-7 h-10 text-blue-500 pb-2 pl-1"
                            >                             
                           <path d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <p className="text-neutral-500 mt-1">1-3 Month Delivery</p>
                        
                      </div>
                      <div className="flex flex-row gap-5 w-60 flex-nowrap">
                        <div className="bg-sky-50 h-8 w-8 rounded-full ml-4 mt-2">
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeWidth="1" 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                className="w-7 h-10 text-blue-500 pb-2 pl-1"
                            >                             
                           <path d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <p className="text-neutral-500 mt-1">Getting your app on App Store & Play Store</p>
                        
                      </div>
                      <div className="flex flex-row gap-5 w-60 flex-nowrap">
                        <div className="bg-sky-50 h-8 w-8 rounded-full ml-4 mt-2">
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeWidth="1" 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                className="w-7 h-10 text-blue-500 pb-2 pl-1"
                            >                             
                           <path d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <p className="text-neutral-500 mt-1">Testing everything works perfectly</p>
                        
                      </div>
                      <div className="flex flex-row gap-5 w-60 flex-nowrap">
                        <div className="bg-sky-50 h-8 w-8 rounded-full ml-4 mt-2">
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeWidth="1" 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                className="w-7 h-10 text-blue-500 pb-2 pl-1"
                            >                             
                           <path d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <p className="text-neutral-500 mt-1">Unlimited changes until you are happy</p>
                        
                      </div>
                    </div>
                    
                    <div className="bg-white ml-12 mt-15 w-50 h-15 rounded-md border border-neutral-300 flex items-center justify-center hover:ring hover:ring-black">
                       <div className="flex items-center justify-between">
                        <p className="text-xs font-mono font-semibold">Start your Project</p>
                            <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            strokeWidth="2" 
                            stroke="currentColor" 
                            className="w-6 h-6 ml-3"
                            >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" 
                            />
                            </svg>          
                       </div>
                     </div>
                  </div> 
                  <div className="flex flex-col items-start w-75 h-215 rounded-2xl bg-white transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:scale-[1.02]">
                    <h1 className="text-3xl font-bold ml-3 mt-10">Frontend<br></br>Development</h1>
                    <p className="ml-3 mt-2 text-neutral-500 font-semibold text-md">Basic App Package</p>
                    <div className="flex gap-2">
                        <h1 className="ml-3 mt-2 text-4xl font-extrabold">$799</h1>
                        <p className="text-neutral-500 mt-4 text-xl font-bold">USD</p>
                    </div>
                    <div className="bg-neutral-200 h-0.5 w-59 ml-7 mr-8 mt-5"></div>
                    <div className="flex flex-col items-center">
                      <div className="flex flex-row gap-5 w-60 flex-nowrap">
                        <div className="bg-sky-50 h-8 w-8 rounded-full ml-4 mt-2">
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeWidth="1" 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                className="w-7 h-10 text-blue-500 pb-2 pl-1"
                            >                             
                           <path d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <p className="text-neutral-500 mt-1">Mobile app for your users</p>
                        
                      </div>
                      <div className="flex flex-row gap-5 w-60 flex-nowrap">
                        <div className="bg-sky-50 h-8 w-8 rounded-full ml-4 mt-2">
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeWidth="1" 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                className="w-7 h-10 text-blue-500 pb-2 pl-1"
                            >                             
                           <path d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <p className="text-neutral-500 mt-1">User app, business app & admin dashboard</p>
                        
                      </div>
                      <div className="flex flex-row gap-5 w-60 flex-nowrap">
                        <div className="bg-sky-50 h-8 w-8 rounded-full ml-4 mt-2">
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeWidth="1" 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                className="w-7 h-10 text-blue-500 pb-2 pl-1"
                            >                             
                           <path d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <p className="text-neutral-500 mt-1">Premium design customized for your brand
</p>
                        
                      </div>
                      <div className="flex flex-row gap-5 w-60 flex-nowrap">
                        <div className="bg-sky-50 h-8 w-8 rounded-full ml-4 mt-2">
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeWidth="1" 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                className="w-7 h-10 text-blue-500 pb-2 pl-1"
                            >                             
                           <path d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <p className="text-neutral-500 mt-1">Complete backend system built for growth</p>
                        
                      </div>
                      <div className="flex flex-row gap-5 w-60 flex-nowrap">
                        <div className="bg-sky-50 h-8 w-8 rounded-full ml-4 mt-2">
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeWidth="1" 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                className="w-7 h-10 text-blue-500 pb-2 pl-1"
                            >                             
                           <path d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <p className="text-neutral-500 mt-1">2-4 Month Delivery</p>
                        
                      </div>
                      <div className="flex flex-row gap-5 w-60 flex-nowrap">
                        <div className="bg-sky-50 h-8 w-8 rounded-full ml-4 mt-2">
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeWidth="1" 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                className="w-7 h-10 text-blue-500 pb-2 pl-1"
                            >                             
                           <path d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <p className="text-neutral-500 mt-1">Publishing on App Store & Play Store</p>
                        
                      </div>
                      <div className="flex flex-row gap-5 w-60 flex-nowrap">
                        <div className="bg-sky-50 h-8 w-8 rounded-full ml-4 mt-2">
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeWidth="1" 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                className="w-7 h-10 text-blue-500 pb-2 pl-1"
                            >                             
                           <path d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <p className="text-neutral-500 mt-1">Thorough testing for flawless performance</p>
                        
                      </div>
                      <div className="flex flex-row gap-5 w-60 flex-nowrap">
                        <div className="bg-sky-50 h-8 w-8 rounded-full ml-4 mt-2">
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeWidth="1" 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                className="w-7 h-10 text-blue-500 pb-2 pl-1"
                            >                             
                           <path d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <p className="text-neutral-500 mt-1">Full control with admin dashboard</p>
                        
                      </div>
                      <div className="flex flex-row gap-5 w-60 flex-nowrap">
                        <div className="bg-sky-50 h-8 w-8 rounded-full ml-4 mt-2">
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeWidth="1" 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                className="w-7 h-10 text-blue-500 pb-2 pl-1"
                            >                             
                           <path d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <p className="text-neutral-500 mt-1">Unlimited changes until you are happy</p>
                        
                      </div>
                    </div>
                    <div className="bg-white ml-12 mt-15 w-50 h-15 rounded-md border border-neutral-300 flex items-center justify-center hover:ring hover:ring-black">
                       <div className="flex items-center justify-between">
                        <p className="text-xs font-mono font-semibold">Start your Project</p>
                            <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            strokeWidth="2" 
                            stroke="currentColor" 
                            className="w-6 h-6 ml-3"
                            >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" 
                            />
                            </svg>          
                       </div>
                     </div>
                     {/* Third div ends here*/}
                  </div> 
              </div>
            </div>
        </div>
    )
}