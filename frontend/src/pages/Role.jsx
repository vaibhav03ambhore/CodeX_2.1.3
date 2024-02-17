import React from 'react'
import { ImUsers } from "react-icons/im";
import { ImUserTie } from "react-icons/im";
const Role = () => {
    return (
        <div className='h-[100vh] flex'>
            <div className="p-[20px] w-full sm:flex  items-center">
                <div className="left md:w-[50%]">
                    <div className='flex-col m-7 text-5xl text-center text-orange-600 font-serif p-9'>
                        <ImUsers />
                        <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                User Role
                            </span>
                        </button>
                    </div>
                </div>
                <div className="right md:w-[50%] ">
                    <div className="flex-col m-7 text-5xl text-center text-orange-600 font-serif p-9">
                        <ImUserTie />
                        <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                Admin Role
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Role