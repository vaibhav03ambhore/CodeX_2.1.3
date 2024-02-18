import React from 'react'
import { Link } from 'react-router-dom'
const Register = () => {
    return (
        <div className=''>
            <section className="flex grid justify-items-center">
                <div className="py-4 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
                    <div>
                        <div className="w-full lg:max-w-xl p-6 space-y-4 sm:p-4 bg-white rounded-lg shadow-xl dark:bg-gray-800">
                            <h2 className="text-2xl font-bold text-gray-900 ">
                                Register For Auction Katta
                            </h2>
                            <form className="mt-8 space-y-6" action="#">
                                <div>
                                    <label for="name" className="block mb-2 text-sm font-medium text-gray-900 ">Your Name</label>
                                    <input type="name" name="name" id="name" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name" required />
                                </div>
                                <div>
                                    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="yourname@gmail.com" required />
                                </div>
                                <div>
                                    <label for="password" className="block mb-2 text-sm font-medium text-gray-900 ">Your password</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                </div>
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="remember" aria-describedby="remember" name="remember" type="checkbox" className="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" required />
                                    </div>
                                    <div className="ms-3 text-sm">
                                        <label for="remember" className="font-medium text-gray-500 dark:text-gray-400">Remember this device</label>
                                    </div>
                                </div>
                                <button type="submit" className="w-full px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register</button>
                                <div className="text-sm font-medium text-gray-900 dark:text-white">
                                    Already registered ? <Link to={'/login'}><a className="text-blue-600 hover:underline dark:text-blue-500">Click Here Login</a></Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Register