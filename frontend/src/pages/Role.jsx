import React from 'react'
import { ImUsers } from "react-icons/im";
import { ImUserTie } from "react-icons/im";
const Role = () => {
    return (
        <div className='h-[100vh] '>
            <div className="p-[20px] w-full  sm:flex grid grid-cols-2 gap-4">
                <div className="left md:w-[50%] flex justify-center p-5">
                    <div className='text-7xl text-center text-orange-600 font-serif'>
                        <ImUsers />
                    </div>
                        <button type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">User Role</button>
                </div>
                <div className="right md:w-[50%] flex justify-center p-5">
                    <div className="text-7xl  text-center text-orange-600 font-serif ">
                        <ImUserTie />
                    </div>
                        <button type="button" class="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Admin Role</button>
                </div>
                <div />
            </div>
        </div>
    )
}

export default Role