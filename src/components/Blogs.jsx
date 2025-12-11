import React from "react";
import FlutterBlog from '../assets/Images/FlutterBlog.png';
import FlutterNative from '../assets/Images/FlutterNative.png';
import Mobile from '../assets/Images/Mobile.png';

function Blogs(){
    return(
        <>
            <div className="flex justify-center w-40 rounded-2xl h-8 mt-15 ml-5 bg-gray-900 border border-solid border-gray-600 gap-3">
                <div className="h-3 w-3 rounded-full bg-blue-400 mt-[9px] animate-pulse"></div>
                <p className="text-sm text-white font-poppins  font-bold mt-[4px]">Insights & News</p>
            </div>
            <p className="text-4xl mt-4 ml-4 bg-gradient-to-r from-gray-600 via-gray-300 to-gray-600 bg-clip-text text-transparent font-poppins font-bold">WHAT'S NEW IN OUR BLOG</p>
            <div className=" flex flex-col justify-start gap-10 items-center lg:flex-row lg:gap-10 lg:justify-evenly pt-5 pl-10">
                <div className="flex flex-wrap flex-col justify-center max-w-100 rounded-md">
                   <div className="overflow-hidden">
                     <img
                      src = {FlutterBlog}
                      alt = {FlutterBlog}
                      className="h-48 w-full object-cover rounded-xl transition-transform duration-300 ease-in-out hover:scale-110"
                     ></img>
                   </div>
                   <div className="py-5 bg-slate-900">
                      <h1 className="text-white text-2xl font-bold py-1 px-1">Flutter : The Framework for
                        Cross-Platform Applications
                      </h1>
                      <p className = "text-neutral-400 py-2 px-1 tracking-tight ml-1 font-poppins font-bold">
                       Introduction in the rapidly evolving world of
                       mobile app development,businesses and 
                       developers alike are constantly seeking
                      </p>
                      <div className="w-100 h-px bg-gradient-to-r from-slate-600 via-white to-slate-900"></div>
                      <div className="flex justify-between items-between gap-10 flex-wrap text-slate-400 text-sm mb-6 py-5 pl-4">
                         <div className="flex items-center gap-2">
                                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                       <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                                    </svg>
                            <span>8/20/24</span>
                         </div>
                         <div className="flex items-center gap-2 pr-3">
                                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                       <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                   </svg>
                            <span>12 min read</span>
                         </div>
                         <div className="flex items-center gap-2">
                                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                   </svg>
                            <span>Flutter Your Way</span>
                         </div>
                         <a href="https://www.flutteryourway.com/blogs/flutter-the-framework-for-cross-platform-applications-why-it-is-best" className="text-blue-500 font-semibold hover:text-blue-400 transition-colors pr-3">
                            Read more
                        </a>
                      </div>
                   </div>
                </div>
                <div className="flex flex-wrap flex-col justify-center max-w-100 rounded-md">
                   <div className="overflow-hidden">
                     <img
                      src = {FlutterNative}
                      alt = {FlutterNative}
                      className="h-48 w-full object-cover rounded-xl transition-transform duration-300 ease-in-out hover:scale-110"
                     ></img>
                   </div>
                   <div className="py-5 bg-slate-900">
                      <h1 className="text-white text-2xl font-bold py-1 px-1">Flutter vs React native in 
                        2024 - Detailed Comparison
                      </h1>
                      <p className = "text-neutral-400 py-2 px-1 tracking-tight ml-1 font-poppins font-bold">
                       In 2024, Flutter and React Native continu to <br></br>
                       be top choices for building cross-platform <br></br>
                       mobile apps. Each has its own strength and...
                      </p>
                      <div className="w-100 h-px bg-gradient-to-r from-slate-900 via-white to-slate-900"></div>
                      <div className="flex justify-between items-between gap-10 flex-wrap text-slate-400 text-sm mb-6 py-5 pl-4">
                         <div className="flex items-center gap-2">
                                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                       <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                                    </svg>
                            <span>8/5/24</span>
                         </div>
                         <div className="flex items-center gap-2 pr-3">
                                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                       <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                   </svg>
                            <span>17 min read</span>
                         </div>
                         <div className="flex items-center gap-2">
                                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                   </svg>
                            <span>Flutter Your Way</span>
                         </div>
                         <a href="https://www.flutteryourway.com/blogs/flutter-vs-react-native-in-2024-detailed-comparison" className="text-blue-500 font-semibold hover:text-blue-400 transition-colors pr-3">
                            Read more
                        </a>
                      </div>
                   </div>
                </div>
                <div className="flex flex-wrap flex-col justify-center max-w-100 rounded-md">
                   <div className="overflow-hidden">
                     <img
                      src = {Mobile}
                      alt = {Mobile}
                      className="h-48 w-full object-cover rounded-xl transition-transform duration-300 ease-in-out hover:scale-110"
                     ></img>
                   </div>
                   <div className="py-5 bg-slate-900">
                      <h1 className="text-white text-2xl font-bold py-1 px-1">4 main types of mobile apps
                        Development with examples :...
                      </h1>
                      <p className = "text-neutral-400 py-2 px-1 tracking-tight ml-1 font-poppins font-bold">
                       Mobile apps have become a big part of our <br></br>
                       everyday lives. From checking the weather to <br></br>
                       chatting with friends, there's an app for...
                      </p>
                      <div className="w-100 h-px bg-gradient-to-r from-slate-900 via-white to-slate-900"></div>
                      <div className="flex justify-between items-between gap-10 flex-wrap text-slate-400 text-sm mb-6 py-5 pl-4">
                         <div className="flex items-center gap-2">
                                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                       <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                                    </svg>
                            <span>7/31/24</span>
                         </div>
                         <div className="flex items-center gap-2 pr-3">
                                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                       <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                   </svg>
                            <span>8 min read</span>
                         </div>
                         <div className="flex items-center gap-2">
                                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                   </svg>
                            <span>Flutter Your Way</span>
                         </div>
                         <a href="https://www.flutteryourway.com/blogs/main-types-of-mobile-apps-development-with-examples-which-one-is-right-for-you" className="text-blue-500 font-semibold hover:text-blue-400 transition-colors pr-3">
                            Read more
                        </a>
                      </div>
                   </div>
                </div>
            </div>
            <div className="flex justify-evenly  bg-slate-800 h-70 rounded-xl mt-40 ml-20 max-w-200 mb-40 lg:ml-140">
               <div className="py-15 px-15">
                  <h1 className = "text-white text-3xl font-mono font-extrabold tracking-normal">Stay updated with our tech insights</h1>
                  <p className="text-slate-400 font-semibold">Join our newsletter to receive the latest updates on app development, Flutter innovations, and industry trends directly to your inbox</p>
               </div>
               <div className="flex-col items-center py-20">
                  <input type="email" placeholder="Your email address" className="bg-slate-700 w-60 h-15 mr-10 rounded-full placeholder:text-white text-center"/>
                  <button className="bg-blue-500 w-60 h-15 rounded-full mt-4 cursor-pointer text-white font-bold text-xl font-mono">Subscribe</button>
               </div>
            </div>
            <div className="none">
            <h1>huhfe</h1>
            </div>
        </>
    )
}

export default Blogs;