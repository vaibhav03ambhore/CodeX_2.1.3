import React, { useState } from 'react'
import Img1 from '../Images/Asset.jpg'
import Timer from '../Components/Timer'
const Bidding = () => {
    const [bid, setBid] = useState(50);
    function increament() {
        setBid(bid + 10);
    }
    return (
        <section className='pt-[80px] font-cus bg-nc'>
            <div className='md:h-[100vh] bg-gray-50 bg-nc'>
                <div className="p-[20px] w-full sm:flex items-center bg-nc">
                    <div className="left md:w-[40%] h-[100%] sm:flex-col">
                        <img className="border-double border-5 border-orange-500/100 rounded-t-lg md:max-w-[100%] rounded-3xl max-h-[50%]" src={Img1} />
                        <div className='text-center'>
                            <div className='md:flex m-4'>
                                <div className='flex-col text-center'>
                                    <p className='m-2 font-bold text-blue-600'>Category</p>
                                    <p className=' text-2xl'>CaroX</p>
                                </div>
                                <div className='flex-col text-center'>
                                    <p className='m-2 font-bold text-blue-600'>Base Price</p>
                                    <p className=' text-2xl'>50K</p>
                                </div>
                                <div className='flex-col text-center'>
                                    <p className='m-2 font-bold text-blue-600'>Increament Per Bid</p>
                                    <p className=' text-2xl'>10K</p>
                                </div>
                                <div className='flex-col text-center'>
                                    <p className='m-2 font-bold text-blue-600'>Organiser</p>
                                    <p className=' text-2xl'>Org Name</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right md:w-[60%] py-2 md:flex-col">
                        <div className='justify-center font-cus'>
                            <p className='text-4xl text-center text-red-600 font-bold p-2'>Live <span className='text-black'>Bidding</span></p>
                            <h3 className='text-6xl'></h3>
                            <p className='text-1xl font-cus m-4 text-start'>I am offering for sale my [Year] [Make] [Model] aircraft, a [brief description of the aircraft's overall condition and any standout features]. This [Year] [Make] [Model] is [color], with [mention any distinctive features of the exterior]. The interior is [color] and in excellent condition. The total flight hours are [total hours], and the aircraft has been meticulously maintained, with a detailed log of service history. It is equipped with [key features], including [highlight any noteworthy avionic systems or features]. The asking price for this aircraft is [Asking Price]. For more information or to schedule a viewing, please contact me at [Your Phone Number] or [Your Email Address]. The plane is currently located at [Location], and serious inquiries are welcome to arrange a demonstration flight to experience this [Year] [Make] [Model] aircraft firsthand.</p>
                        </div>
                        <div className='flex-col text-center'>
                            <Timer />
                            <p className='m-2 font-bold text-lime-600'>Current Bid Price</p>
                            <p className='p-2 text-2xl'>{bid}K</p>
                            <button onClick={increament} type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 m-2">Bid Here</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Bidding