import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ImHammer2 } from "react-icons/im";
import { AiOutlineUser } from "react-icons/ai";
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
    const [isOpen, setIsOpen] = useState(false);
    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    }

    //Mobile View Pages Links
    const Links = [
        { name: "Home", link: "/" },
        { name: "Browse Bids", link: "/browserbid" },
    ];
    return (
        <div className=''>
            <header className='p-3 flex justify-between shadow-md w-full fixed-top bg-dark z-20 text-white'>
                <Link to={'/'} href='' className='flex items-center gap-1'>
                <ImHammer2 className='text-4xl	'/>
                    <div className='font-bold font-[Georgia] text-xl'><span className='text-nc text-3xl underline decoration-wavy m-2'>Auction</span>Katta</div>
                </Link>
                <div className="hidden md:flex gap-2 border border-gray-300 rounded-full py-2 px-4 shadow-md shadow-gray-300 font-[Georgia]">
                  <Link exact to="/">
                        <div className=' mx-8 my-1'>Home</div>
                    </Link>
                    <div className="border-l border-gray-300"></div>
                      <Link exact to="/browserbid">
                        <div className=' mx-8 my-1'>Browse Bids</div>
                    </Link>
                </div>
                <div className="flex items-center gap-2 border border-gray-300 rounded-full py-2 px-4">
                    <div className="md:hidden cursor-pointer">
                        <div onClick={toggleNavbar}>{isOpen ? <CrossMenu /> : <HamburgerMenu />} </div>
                    </div>
                    <Link to={'/role'} className="bg-gray-400 text-white rounded-3xl text-2xl border-gray-500 overflow-hidden">
                    <AiOutlineUser />
                    </Link>
                    {/* {!!user && (
                        <div>
                            {user.name}
                        </div>
                    )} */}
                </div>
            </header>
            <ul className={`md:hidden items-center justify-self-center font-medium text-2xl text-white pb-12 absolute  z-40 md:static bg-dark top-19 w-full h-full pl-[70px] transition-all duration-1000 ease-out z-10 ${isOpen ? 'top-[75px] left-0 opacity-100' : 'top-[75px] left-[-990px] opacity-0'}`}>
                {
                    Links.map((Link) => (
                        <li key={Link.name} className='my-20'>
                            <a href={Link.link}
                                className='text-primary-800 hover:text-primary-400 duration-500 relative'>{Link.name}</a>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Navbar