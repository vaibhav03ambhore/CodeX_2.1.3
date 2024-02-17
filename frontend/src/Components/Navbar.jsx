import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useContext } from "react";
// import { UserContext } from "../../src/UserContext";

const HamburgerMenu = () => {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
        </>
    )
}
const CrossMenu = () => {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                <path d="M16 8L8 16M8.00001 8L16 16" stroke="#000000" strokeWidth={2.5} stroke-linecap="round" />
            </svg>
        </>
    )
}

const Navbar = () => {
    // const { user } = useContext(UserContext);
    // const [isOpen, setIsOpen] = useState(false);
    // const toggleNavbar = () => {
    //     setIsOpen(!isOpen);
    // }

    //Mobile View Pages Links
    const Links = [
        { name: "Home", link: "/" },
        { name: "About", link: "/about" },
        { name: "Event", link: "/event" },
        { name: "Contact", link: "/contact" },
    ];
    return (
        <>
            <header className='p-4 flex justify-between shadow-md'>
                {/* <Link to={'/'} href='' className='flex items-center gap-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
                    </svg>
                    <div className='font-bold font-[Georgia] text-xl'><span className='text-nc text-3xl underline decoration-wavy'>E</span>vento</div>
                </Link> */}
                <div className="hidden md:flex gap-2 border border-gray-300 rounded-full py-2 px-4 shadow-md shadow-gray-300 font-[Georgia]">
                  <Link exact to="/browserBid">
                        <div className=' mx-8 my-1'>Home</div>
                    </Link>
                    <div className="border-l border-gray-300"></div>
                     {/*  <Link exact to="/about">
                        <div className=' mx-8 my-1'>About</div>
                    </Link>
                    <div className="border-l border-gray-300"></div>
                    <Link exact to="/event">
                        <div className=' mx-8 my-1'>Events</div>
                    </Link>
                    <div className="border-l border-gray-300"></div>
                    <Link exact to="/contact">
                        <div className=' mx-8 my-1'>Contact</div>
                    </Link> */}
                    <button className="bg-primary text-white p-2 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    </button>
                </div>
                <div className="flex items-center gap-2 border border-gray-300 rounded-full py-2 px-4">
                    {/* <div className="md:hidden cursor-pointer">
                        <div onClick={toggleNavbar}>{isOpen ? <CrossMenu /> : <HamburgerMenu />} </div>
                    </div> */}
                    {/* <Link to={user ? '/profile' : '/user-login'} className="bg-gray-500 text-white rounded-full border border-gray-500 overflow-hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 relative top-1">
                            <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
                        </svg>
                    </Link>
                    {!!user && (
                        <div>
                            {user.name}
                        </div>
                    )} */}
                </div>
            </header>
            {/* <ul className={`md:hidden items-center justify-self-center font-medium text-2xl text-white pb-12 absolute  z-40 md:static bg-nc top-19 w-full h-full pl-[70px] transition-all duration-1000 ease-out ${isOpen ? 'left-0 opacity-100' : 'left-[-990px] opacity-0'}`}>
                {
                    Links.map((Link) => (
                        <li key={Link.name} className='my-20'>
                            <a href={Link.link}
                                className='text-primary-800 hover:text-primary-400 duration-500 relative'>{Link.name}</a>
                        </li>
                    ))
                }
            </ul> */}
        </>
    )
}

export default Navbar