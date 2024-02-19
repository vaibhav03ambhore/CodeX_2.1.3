import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';

const BidForm = () => {
  
    const [formData, setFormData] = useState({
        name: '',
        category: '',
        detail: '',
        price: '',
        rules: '',
        fixedIncrement: ''

    });


      const [selectedFile, setSelectedFile] = useState(null);
  
      const handleFileChange=(event)=>{
        console.log('file changed')
        const file=event.target.files[0];
        setSelectedFile(file);
        // console.log(event.target.files)
        console.log('selected file is : ',file)
      }
  
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
     
      const handleSubmit = async(event) => {
        event.preventDefault();   //prevent to submit the form traditional way
  
        const formDataToSend = new FormData();
  
        Object.entries(formData).forEach(([key, value]) => {

           formDataToSend.append(key, value);
         
        });
  
        formDataToSend.append('image', selectedFile);
  
        console.log("form data to send is ",formDataToSend);
            for (let pair of formDataToSend.entries()) {
             console.log(pair[0] + ' - ' + pair[1]);
        }
        const emptyFields = Object.values(formData).some(value => value === '');
        if (emptyFields) {
            alert('Please fill in all the details.');
            return; // Exit early if any field is empty
        }
         
        try {
        
            const response = await axios.post('http://localhost:3000/api/bid-items/create',formDataToSend,{
                 headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
    
      
          console.log(response.data); 
    
        } catch (error) {
          console.error("Error submitting items:", error);
          alert(error.response.data.message);
        }
          
         
    };

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
                                    <input type="name" name="name" id="name" value={formData.name} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Bid Name" required />
                                </div>
                                <div>
                                    <label for="category" className="block mb-2 text-sm font-medium text-gray-900">Bid Category</label>
                                    <input type="category" name="category" id="category" value={formData.category} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="bid category" required />
                                </div>
                                <div>
                                    <label for="file" className="block mb-2 text-sm font-medium text-gray-900">Bid Image</label>
                                    <input type="file" name="image" onChange={handleFileChange} id="file"/>
                                </div>
                                <div>
                                    <label for="detail" className="block mb-2 text-sm font-medium text-gray-900">Bid Details</label>
                                    <input type="detail" name="detail" id="detail" placeholder="description/details" value={formData.detail} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                                </div>
                                <div>
                                    <label for="price" className="block mb-2 text-sm font-medium text-gray-900">Base Price</label>
                                    <input type="number" name="price" id="price" value={formData.price} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="bid base Price" required />
                                </div>
                                <div>
                                    <label for="fixedIncrement" className="block mb-2 text-sm font-medium text-gray-900">Bid Increament</label>
                                    <input type="number" name="fixedIncrement" id="fixedIncrement" value={formData.fixedIncrement} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="your bid increament" required />
                                </div>
                                <div>
                                    <label for="rules" className="block mb-2 text-sm font-medium text-gray-900">Bid Rules</label>
                                    <input type="text" name="rules" id="rules" value={formData.rules} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5" placeholder="type your rules" required />
                                </div>
                                <button type="submit" onClick={handleSubmit} className="w-full px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto">Create Bid</button>
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