import React from 'react'
import Img1 from '../Images/Bike.jpg'
import '../index.css'
import FilterCategories from '../Components/FilterCategories'
import { Link } from 'react-router-dom'
import { useState, useEffect} from'react';
import axios from 'axios';

const BrowserBid = () => {

  const [itemsData,setItemsData]=useState([]);

  useEffect(()=>{
    axios.get('http://localhost:3000/api/bid-items')
     .then(res => {
        console.log(res.data)
        setItemsData(res.data)
      })
     .catch(err => {
        console.log(err)
      })
  },[])

  return (
    <section className='pt-[95px] md:flex rtl bg-nc md:h-[100vh]'>
      <div className='Left md:w-[20%] '>
        <FilterCategories />
      </div>
      <div className='right md:w-[80%] p-3 border-s-4 border-indigo-500/75'>        
        {itemsData.map(item => (
          <div key={item._id}>
            <div className="md:flex p-3 bg-white border border-gray-200 rounded-lg shadow mb-2">
              <div className=" h-full w-[100%]">
               <img className="w-full h-full object-cover rounded-t-lg" src={item.image} alt={item.name} />
              </div>
              <div className="p-2">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{item.name}</h5>
                <span class="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                  <span class="w-2 h-2 me-1 bg-green-500 rounded-full animate-ping"></span>
                  Live Biddng
                </span>
                <p className="mb-3 font-normal text-gray-700">{item.detail}</p>
                <Link to={'/bidding'}>
                  <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                    Click Here
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default BrowserBid