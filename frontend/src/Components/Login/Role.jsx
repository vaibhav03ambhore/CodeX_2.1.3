import React from 'react'
import { Link } from 'react-router-dom'
import { ImUsers } from "react-icons/im";
import { ImUserTie } from "react-icons/im";
const Role = () => {
    return (
        <section className='h-[100vh] pt-[80px]'>
            <div className="p-[20px] w-full  md:flex gap-2">
                <div className="left md:w-[50%] flex justify-center items-center p-3">
                    <div className='text-7xl text-center text-orange-600'>
                        <ImUsers />
                    </div>
                    <div className='m-4'>
                    <Link to={'/ulogin'}>
                        <button type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2 text-center me-2 mb-2">Bidder Role</button>
                    </Link>
                    </div>
                </div>
                <div className="right md:w-[50%] flex justify-center items-center p-3">
                    <div className="text-7xl  text-center text-orange-600">
                        <ImUserTie />
                    </div>
                        <div className='m-4'>
                        <Link to={'/ologin'}>
                        <button type="button" class="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2 text-center me-2 mb-2">Organizer Role</button>
                        </Link>
                        </div>
                </div>
                <div />
            </div>
        </section>
    )
}

export default Role