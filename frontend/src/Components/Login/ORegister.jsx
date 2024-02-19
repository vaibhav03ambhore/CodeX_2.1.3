import React from 'react'
import { Link , useNavigate} from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';

const ORegister = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        address: '',
        organization:{
            name: '',
            address: ''
        }
    });

    const handleChange = (e) => {
        if(e.target.name==='organization') setFormData({ ...formData, [e.target.name]: {
            name: e.target.value,
        }})
        else setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();
        console.log(formData)
        const emptyFields = Object.values(formData).some(value => value === '');
        if (emptyFields) {
            alert('Please fill in all the details.');
            return;
        }

        try {
            const response = await axios.post('http://localhost:3000/api/organizer/register', formData);
            console.log(response); 
            if(response) {
                alert("registered successfully")
                navigate('/ologin')
            }
            
        } catch (error) {
            console.error('Error registering user:', error.response.data);
            alert(error.response.data.message)
        }
    };

    
    return (
        <div className=''>
            <section className="bg-gray-50 flex items-center justify-center pt-[80px]">
                <div className="py-4 px-4 mx-auto max-w-screen-xl lg:py-16">
                    <div>
                        <div className="w-full lg:max-w-xl p-6 space-y-4 sm:p-4 bg-white rounded-lg shadow-xl">
                            <h2 className="text-2xl font-bold text-gray-900">
                                Register For Auction Katta
                            </h2>
                            <form className="mt-8 space-y-6" action="#">
                                <div>
                                    <label for="username" className="block mb-2 text-sm font-medium text-gray-900">Organiser Name</label>
                                    <input type="name" name="username" id="name" value={formData.username} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="User Name" required />
                                </div>
                                <div>
                                    <label for="email" className="block mb-2 text-sm font-medium text-gray-900">Organiser email</label>
                                    <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="yourname@gmail.com" required />
                                </div>
                                <div>
                                    <label for="password" className="block mb-2 text-sm font-medium text-gray-900">Your password</label>
                                    <input type="password" name="password" id="password" value={formData.password} onChange={handleChange} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                                </div>
                                <div>
                                    <label for="name" className="block mb-2 text-sm font-medium text-gray-900">Organization Name</label>
                                    <input type="name" name="organization" id="name" value={formData.organization.name} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Organization Name" required />
                                </div>
                                <div>
                                    <label for="address" className="block mb-2 text-sm font-medium text-gray-900">Your Address</label>
                                    <input type="address" name="address" id="address" value={formData.address} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="your address" required />
                                </div>
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="remember" aria-describedby="remember" name="remember" type="checkbox" className="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300" required />
                                    </div>
                                    <div className="ms-3 text-sm">
                                        <label for="remember" className="font-medium text-gray-500 ">Remember this device</label>
                                    </div>
                                </div>
                                <button type="submit" onClick={handleSubmit} className="w-full px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto">Register</button>
                                <div className="text-sm font-medium text-gray-900">
                                    Already registered ? <Link to={'/ologin'}><a className="text-blue-600 hover:underline ">Click Here Login</a></Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default ORegister