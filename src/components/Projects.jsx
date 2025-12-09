import React from "react";
import LadakhTempo from '../assets/Images/LadakhTempo.png';
import FoodMama from '../assets/Images/Food Mama.png';
import TechLand from '../assets/Images/Tech Land.png';
import ContractWise from '../assets/Images/Contract Wise.png';
import BoomJournal from '../assets/Images/Boom Journal.png';
import Yato from '../assets/Images/Yato.png';
function Projects(){
    return(
        <>
             <div className='flex flex-col items-center'>
                 <div className='flex flex-col items-center gap-7'>
                     {/* <div className='relative w-40 rounded-3xl bg-gray-200 text-gray-700 mx-auto text-center py-2 font-poppins 
                        before:content-[]  before:absolute before:top-1/3 before:left-3  before:inline-block before:w-4 before:h-3.5 before:rounded-full
                        before:bg-gradient-to-b before:from-gray-300 before:to-gray-600 '>Our Work</div> */}
                        <h1 className='font-poppins text-5xl tracking-tight bg-gradient-to-r from-gray-600 via-gray-300 to-gray-600 bg-clip-text text-transparent font-bold
                        [filter:drop-shadow(0_0_40px_white)]'>Featured Projects</h1>
                        <p className='text-transparent text-center bg-gradient-to-r from-gray-600 via-gray-300 to-gray-600 bg-clip-text
                        [filter:drop-shadow(0_0_30px_white)]'>We believe in the power of technology to empower businesses. 
                            Explore our latest projects and see how we've helped our clients transform their ideas 
                            into reality.</p>
                            <div className='flex flex-wrap justify-center gap-8 mt-10'>
                                {/* Project Cards will go here */}
                                <div className='bg-white rounded-2xl shadow-lg overflow-hidden max-w-[370px] w-full border border-gray-100 transform transition-transform hover:scale-105'>
                                    <div>
                                        <img
                                        src={LadakhTempo}
                                        alt="Ladakh Tempo"
                                        className="w-full h-48 object-cover"
                                        />
                                    </div>
                                    <div className='p-6 flex flex-col gap-4'>
                                        <h3 className="text-2xl font-bold text-gray-900 font-poppins">
                    Ladakh Tempo
                  </h3>
                  <p className='text-gray-600'>App for biggest Tourist Tempo company of ladakh to manage their bookings and drivers.</p>
                  <div className='flex items-center justify-start gap-2'>
                    <div className='w-20 text-xs text-center py-1 h-6 bg-blue-100 rounded-sm text-blue-500 font-poppins font-bold'>
                        Case Study
                    </div>
                    <p className='text-gray-600'>View Details</p>
                  </div>
                                    </div>
                                </div>
                                 <div className='bg-white rounded-2xl shadow-lg overflow-hidden  max-w-[370px] w-full border border-gray-100 transform transition-transform hover:scale-105'>
                                    <div>
                                        <img
                                        src={FoodMama}
                                        alt="Ladakh Tempo"
                                        className="w-full h-48 object-cover"
                                        />
                                    </div>
                                    <div className='p-6 flex flex-col gap-4'>
                                        <h3 className="text-2xl font-bold text-gray-900 font-poppins">
                    Food Mama
                  </h3>
                  <p className='text-gray-600'>The best food delivery app in town, and enjoy delicious meals from your favourite restaurants.</p>
                  <div className='flex items-center justify-start gap-2'>
                    <div className='w-20 text-xs text-center py-1 h-6 bg-blue-100 rounded-sm text-blue-500 font-poppins font-bold'>
                        Case Study
                    </div>
                    <p className='text-gray-600'>View Details</p>
                  </div>
                                    </div>
                                </div>
                                 <div className='bg-white rounded-2xl shadow-lg overflow-hidden max-w-[370px] w-full border border-gray-100 transform transition-transform hover:scale-105'>
                                    <div>
                                        <img
                                        src={TechLand}
                                        alt="Ladakh Tempo"
                                        className="w-full h-48 object-cover"
                                        />
                                    </div>
                                    <div className='p-6 flex flex-col gap-4'>
                                        <h3 className="text-2xl font-bold text-gray-900 font-poppins">
                    TechLand
                  </h3>
                  <p className='text-gray-600'>TechLand is a AgroFinTech application that serves as a hub for agricultural investments and returns.</p>
                  <div className='flex items-center justify-start gap-2'>
                    <div className='w-20 text-xs text-center py-1 h-6 bg-blue-100 rounded-sm text-blue-500 font-poppins font-bold'>
                        Case Study
                    </div>
                    <p className='text-gray-600'>View Details</p>
                  </div>
                                    </div>
                                </div>
                                 <div className='bg-white rounded-2xl shadow-lg overflow-hidden max-w-[370px] w-full border border-gray-100 transform transition-transform hover:scale-105'>
                                    <div>
                                        <img
                                        src={ContractWise}
                                        alt="Ladakh Tempo"
                                        className="w-full h-48 object-cover"
                                        />
                                    </div>
                                    <div className='p-6 flex flex-col gap-4'>
                                        <h3 className="text-2xl font-bold text-gray-900 font-poppins">
                    Contract Wise
                  </h3>
                  <p className='text-gray-600'>Contract Wise is a platform that simplifies contract management for businesses.</p>
                  <div className='flex items-center justify-start gap-2'>
                    <div className='w-20 text-xs text-center py-1 h-6 bg-blue-100 rounded-sm text-blue-500 font-poppins font-bold'>
                        Case Study
                    </div>
                    <p className='text-gray-600'> View Details</p>
                  </div>
                                    </div>
                                </div>
                                 <div className='bg-white rounded-2xl shadow-lg overflow-hidden max-w-[370px] w-full border border-gray-100 transform transition-transform hover:scale-105'>
                                    <div>
                                        <img
                                        src={BoomJournal}
                                        alt="Ladakh Tempo"
                                        className="w-full h-48 object-cover"
                                        />
                                    </div>
                                    <div className='p-6 flex flex-col gap-4'>
                                        <h3 className="text-2xl font-bold text-gray-900 font-poppins">
                    Boom Journal
                  </h3>
                  <p className='text-gray-600'>Boom Journal is a digital journaling app that helps users document their thoughts and experiences.</p>
                  <div className='flex items-center justify-start gap-2'>
                    <div className='w-20 text-xs text-center py-1 h-6 bg-blue-100 rounded-sm text-blue-500 font-poppins font-bold'>
                        Case Study
                    </div>
                    <p className='text-gray-600'>View Details</p>
                  </div>
                                    </div>
                                </div>
                                 <div className='bg-white rounded-2xl shadow-lg overflow-hidden max-w-[370px] w-full border border-gray-100 transform transition-transform hover:scale-105'>
                                    <div>
                                        <img
                                        src={Yato}
                                        alt="Ladakh Tempo"
                                        className="w-full h-48 object-cover"
                                        />
                                    </div>
                                    <div className='p-6 flex flex-col gap-4'>
                                        <h3 className="text-2xl font-bold text-gray-900 font-poppins">
                    Yato - Parking Assistance
                  </h3>
                  <p className='text-gray-600'>Yato Parking Assistant allows you to generate parking tickets and manage your parking space efficiently.</p>
                  <div className='flex items-center justify-start gap-2'>
                    <div className='w-20 text-xs text-center py-1 h-6 bg-blue-100 rounded-sm text-blue-500 font-poppins font-bold'>
                        Case Study
                    </div>
                    <p className='text-gray-600'>View Details</p>
                  </div>
                                    </div>
                                </div>
                            </div>
                 </div>
             </div>
              <div className='bg-black w-full flex md:flex-col md:items-center md:justify-center lg:flex-col items-center justify-center flex-wrap mt-30'>
                   <h1 className='bg-gradient-to-r from-gray-600 via-gray-300 to-gray-600 bg-clip-text text-transparent font-poppins text-center font-bold text-5xl pt-10 pb-10 tracking-tighter pr-10 ml-5 mb-10'>CLIENTS ARE SAYING</h1>
                   <div className="flex gap-10 justify-center flex-wrap md:flex-col lg:flex-row">
                      <div className="rounded-xl h-60 w-120 bg-gray-800 mb-10 transform transition-transform hover:scale-105 [filter:drop-shadow(0_0_5px_white)]">
                          <div className="flex flex-col justify-center gap-2 ">
                                <div className="flex">
                                    <div className="rounded-4xl h-14 w-14 ml-6 mt-8 bg-gray-700 flex items-center justify-center">
                                        <svg 
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="w-8 h-8 text-gray-400"
                                       >
                                        <path
                                            fillRule="evenodd"
                                            d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                                            clipRule="evenodd"
                                        />
                                        </svg>
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <p className="text-white text-xl  mt-8 ml-4 font-bold tracking-tight font-poppins">CEO-Boom Journal(1m+ Followers)</p>
                                        <p className="text-gray-400 ml-4 font-poppins">Matthew West</p>
                                    </div>
                                </div>
                                <p className="text-white mx-9 my-5 font-bold text-sm font-poppins">I appreciate the hard work and dedication your team has done for this app. you guys delivered an outstanding product and made the process seamless."</p>
                          </div>
                      </div>
                      <div className="rounded-xl h-60 w-120 bg-gray-800 mb-10 transition-transform hover:scale-105 [filter:drop-shadow(0_0_7px_white)]">
                          <div className="flex flex-col justify-center gap-2 ">
                                <div className="flex">
                                    <div className="rounded-4xl h-14 w-14 ml-6 mt-8 bg-gray-700 flex items-center justify-center">
                                        <svg 
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="w-8 h-8 text-gray-400"
                                       >
                                        <path
                                            fillRule="evenodd"
                                            d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                                            clipRule="evenodd"
                                        />
                                        </svg>
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <p className="text-white text-xl  mt-8 ml-4 font-bold tracking-tight font-poppins">CTO - TECHLAND</p>
                                        <p className="text-gray-400 ml-4 font-poppins">Ashish Sharma</p>
                                    </div>
                                </div>
                                <p className="text-white mx-9 my-5 font-bold text-sm font-poppins">I had the pleasure of working closely with Flutter Your Way on the TechLand app. Their seamless integration of APIs and payment gateways contributed to advanced features. Their innovative mindset, commitment to quality, and effective communication make them an asset to any project."</p>
                          </div>
                      </div>
                      <div className="rounded-xl h-60 w-120 bg-gray-800 mb-10 transition-transform hover:scale-105 [filter:drop-shadow(0_0_7px_white)]">
                          <div className="flex flex-col justify-center gap-2 ">
                                <div className="flex">
                                    <div className="rounded-4xl h-14 w-14 ml-6 mt-8 bg-gray-700 flex items-center justify-center">
                                        <svg 
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="w-8 h-8 text-gray-400"
                                       >
                                        <path
                                            fillRule="evenodd"
                                            d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                                            clipRule="evenodd"
                                        />
                                        </svg>
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <p className="text-white text-xl  mt-8 ml-4 font-bold tracking-tight font-poppins">CEO - Finixia Dedecons</p>
                                        <p className="text-gray-400 ml-4 font-poppins">Anurag Bezboruah</p>
                                    </div>
                                </div>
                                <p className="text-white mx-9 my-5 font-bold text-sm font-poppins">Absolute win for my team, only possible because of the high-end application delivered by Flutter Your Way. Very, very satisfied with their work. Would highly recommend them for freelance projects as well as for team participation."</p>
                          </div>
                      </div>
                      <div className="rounded-xl h-60 w-120 bg-gray-800 mb-10 transition-transform hover:scale-105 [filter:drop-shadow(0_0_7px_white)]">
                          <div className="flex flex-col justify-center gap-2 ">
                                <div className="flex">
                                    <div className="rounded-4xl h-14 w-14 ml-6 mt-8 bg-gray-700 flex items-center justify-center">
                                        <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="w-8 h-8 text-gray-400"
                                       >
                                        <path
                                            fillRule="evenodd"
                                            d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                                            clipRule="evenodd"
                                        />
                                        </svg>
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <p className="text-white text-xl  mt-8 ml-4 font-bold tracking-tight font-poppins">Company</p>
                                        <p className="text-gray-400 ml-4 font-poppins">Wolf Technologies</p>
                                    </div>
                                </div>
                                <p className="text-white mx-9 my-5 font-bold text-sm font-poppins">We've completed 3 projects with Flutter Your Way, and they've always delivered exceptional results. Their expertise, attention to detail, and excellent communication make them a top choice for app development. Highly recommend!"</p>
                          </div>
                      </div>
                      <div className="rounded-xl h-60 w-120 bg-gray-800 mb-10 transition-transform hover:scale-105 [filter:drop-shadow(0_0_7px_white)]">
                          <div className="flex flex-col justify-center gap-2 ">
                                <div className="flex">
                                    <div className="rounded-4xl h-14 w-14 ml-6 mt-8 bg-gray-700 flex items-center justify-center">
                                        <svg 
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="w-8 h-8 text-gray-400"
                                       >
                                        <path
                                            fillRule="evenodd"
                                            d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                                            clipRule="evenodd"
                                        />
                                        </svg>
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <p className="text-white text-xl  mt-8 ml-4 font-bold tracking-tight font-poppins">Simranpreet Singh</p>
                                        <p className="text-gray-400 ml-4 font-poppins">Simranpreet Singh</p>
                                    </div>
                                </div>
                                <p className="text-white mx-9 my-5 font-bold text-sm font-poppins">The team is incredibly skilled and professional. They delivered our MVP on time and within budget. We appreciated their clear communication and dedication to our project's success."</p>
                          </div>
                      </div>
                   </div>
             </div>
        </>
    )
}

export default Projects;