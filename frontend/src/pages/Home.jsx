import React from 'react'
import CarouselPage from '../Components/CarouselPage'
const Home = () => {
    return (
        <div className='h-[100vh]'>
            <div className="p-[40px] w-full sm:flex gap-4 items-center">
                <div className="left md:w-[60%] rounded-3xl">
                    <div className='flex-col m-7 text-3xl text-center text-orange-600 font-serif p-9'>
                        <div className=''>
                        <h2>Discover Here</h2>
                        <h3>The World Largest Bidding Platform</h3>
                        </div>
                    <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Read More
                        </span>
                    </button>
                    </div>
                </div>
                <div className="right md:w-[50%] py-9">
                    <CarouselPage />
                </div>
            </div>
        </div>
    )
}

export default Home