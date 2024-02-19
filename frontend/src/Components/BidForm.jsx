import React from 'react'
import { Link } from 'react-router-dom'
const BidForm = () => {
  // const [selectedFile, setSelectedFile] = useState(null);

  // const handleFileChange=(event)=>{
  //   setSelectedFile(event.target.files[0]);
  //   // console.log(event.target.files)
  // }
    return (
        <div className=''>
            <section className="bg-gray-50 flex grid justify-items-center pt-[80px]">
                <div className="py-4 px-4 max-w-screen-xl md:w-[50%] md:py-16">
                    <div>
                        <div className="md:w-full p-6 space-y-4 md:p-9 bg-white rounded-lg shadow-xl">
                            <h2 className="text-2xl font-bold text-gray-900">
                                Create New Bid 
                            </h2>
                            <form className="mt-8 space-y-6" action="#">
                                <div>
                                    <label for="name" className="block mb-2 text-sm font-medium text-gray-900">Bid Name</label>
                                    <input type="name" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Bid Name" required />
                                </div>
                                <div>
                                    <label for="email" className="block mb-2 text-sm font-medium text-gray-900">Bid Category</label>
                                    <input type="category" name="category" id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="bid category" required />
                                </div>
                                <div>
                                    <label for="password" className="block mb-2 text-sm font-medium text-gray-900">Bid Image</label>
                                    <input type="file" name="file" id="file"/>
                                </div>
                                <div>
                                    <label for="password" className="block mb-2 text-sm font-medium text-gray-900">Bid Details</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                                </div>
                                <div>
                                    <label for="name" className="block mb-2 text-sm font-medium text-gray-900">Base Price</label>
                                    <input type="name" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="bid base Price" required />
                                </div>
                                <div>
                                    <label for="address" className="block mb-2 text-sm font-medium text-gray-900">Bid Increament</label>
                                    <input type="bid increament" name="bid increament" id="bid increament" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="your bid increament" required />
                                </div>
                                <div>
                                    <label for="rules" className="block mb-2 text-sm font-medium text-gray-900">Bid Rules</label>
                                    <input type="address" name="address" id="address" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5" placeholder="type your rules" required />
                                </div>
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="remember" aria-describedby="remember" name="remember" type="checkbox" className="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300" required />
                                    </div>
                                    <div className="ms-3 text-sm">
                                        <label for="remember" className="font-medium text-gray-500 ">Remember this device</label>
                                    </div>
                                </div>
                                <button type="submit" className="w-full px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto">Create Bid</button>
                                <div className="text-sm font-medium text-gray-900">
                                    Already registered ? <Link to={'/'}><a className="text-blue-600 hover:underline ">Click Here Login</a></Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default BidForm