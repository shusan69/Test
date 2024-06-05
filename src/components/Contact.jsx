import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import Nav from "./Nav"

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        contactNumber: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        
        navigate('/');
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <Nav></Nav>
            <section className="text-center p-8 bg-white shadow-lg rounded-lg max-w-md w-full">
                <h1 className="text-4xl font-bold text-blue-200 mb-4">Contact Me</h1>
                <div className="mb-6">
                    <p className="text-lg text-gray-700">Email: spariyar@my.centennialcollege.ca</p>
                    <p className="text-lg text-gray-700">Phone: (437) 259-4300</p>
                </div>
                <form onSubmit={handleSubmit} className="w-full">
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="firstName">First Name</label>
                        <input 
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="lastName">Last Name</label>
                        <input 
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="contactNumber">Contact Number</label>
                        <input 
                            type="text"
                            id="contactNumber"
                            name="contactNumber"
                            value={formData.contactNumber}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="email">Email Address</label>
                        <input 
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
                        <textarea 
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded"
                            rows="4"
                            required
                        />
                    </div>
                    <button type="submit" className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
                        Send Message
                    </button>
                </form>
            </section>
        </div>
    );
}

export default Contact;