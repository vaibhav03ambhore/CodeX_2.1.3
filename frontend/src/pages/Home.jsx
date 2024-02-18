import React from 'react'
import CarouselPage from '../Components/CarouselPage'
import { Link } from 'react-router-dom'
const Home = () => {
    return (
        <div className='h-[100vh] bg-gray-50'>
            <div className="p-[40px] w-full sm:flex gap-4 items-center">
                <div className="left md:w-[50%] rounded-3xl">
                    <div className='justify-center text-center'>
                        <h1 className='text-4xl	p-3'>Discover</h1>
                        <h2 className='text-5xl text-red-600 font-bold p-2'>The World</h2>
                        <h3 className='text-6xl'>Largest Bidding Platform</h3>
                        <p className='text-1xl font-medium m-4'>Experience the thrill of auctioning your cherished art, collectibles, and real estate on our dynamic online platform. Unleash the power of bidding to unlock the true value of your treasures in a seamless and engaging digital marketplace.</p>
                        <Link to={'/readmore'}>
                        <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Read More</button>
                        </Link>
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