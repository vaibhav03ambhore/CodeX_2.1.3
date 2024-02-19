import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';


const OLogin = () => {

    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const emptyFields = Object.values(formData).some(value => value === '');
        if (emptyFields) {
            alert('Please fill in all the details.');
            return; 
        }
        try {
            console.log(formData);
            const response = await axios.post('http://localhost:3000/api/organizer/login', formData,
            {
                withCredentials: true,
            });

            console.log(response.data);
            if (response.status === 201) {
                alert('Login successful');
                // Optionally, redirect the user or perform any other actions needed after successful login
                navigate('/bidobject')
            }
            if(response.status==401) alert('credential are not correct!')
            
        } catch (error) {
            console.error('Error logging in:', error.response.data);
            alert(error.response.data.message)

        }
    };

    return (
        <div>
            <section className="bg-nc flex items-center justify-center pt-[80px]">
                <div className="py-4 px-4 mx-auto max-w-screen-xl lg:py-16">
                    <div>
                        <div className="w-full lg:max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-xl">
                            <h2 className="text-2xl font-bold text-gray-900">
                                Sign in to Auction Katta
                            </h2>
                            <form className="mt-8 space-y-6" action="#">
                                <div>
                                    <label for="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                                    <input type="email" name="email" id="email"  value={formData.email} onChange={handleChange}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@company.com" required />
                                </div>
                                <div>
                                    <label for="password" className="block mb-2 text-sm font-medium text-gray-900 ">Your password</label>
                                    <input type="password" name="password" id="password"  value={formData.password} onChange={handleChange}  placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                                </div>
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="remember" aria-describedby="remember" name="remember" type="checkbox" className="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300" required />
                                    </div>
                                    <div className="ms-3 text-sm">
                                        <label for="remember" className="font-medium text-gray-500">Remember this device</label>
                                    </div>
                                    <a href="#" className="ms-auto text-sm font-medium text-blue-600 hover:underline">Forgot Password?</a>
                                </div>
                                <button type="submit" onClick={handleSubmit} className="w-full px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto">Login to your account</button>
                                <div className="text-sm font-medium text-gray-900">
                                    Not registered yet? <Link to={'/oregister'}><a className="text-blue-600 hover:underline ">Create account</a></Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default OLogin