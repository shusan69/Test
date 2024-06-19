// src/AddProduct.js
import React, { useState } from 'react';

const AddProduct = () => {
    const [formData, setFormData] = useState({
        Name: '',
        Description: '',
        Category: '',
        Quantity: '',
        Price: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(JSON.stringify(formData, null, 2));
        console.log(formData);
    };


        // Function to handle cancel button click (reset form data)
        const handleCancel = () => {
            setFormData({
                Name: '',
                Description: '',
                Category: '',
                Quantity: '',
                Price: ''
            });
        };


    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2"></label>
                <input 
                    type="text" 
                    name="Name" 
                    value={formData.Name} 
                    onChange={handleChange} 
                    placeholder="Name" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2"></label>
                <textarea 
                    name="Description" 
                    value={formData.Description} 
                    onChange={handleChange} 
                    placeholder="Description" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                ></textarea>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2"></label>
                <input 
                    type="text" 
                    name="Category" 
                    value={formData.Category} 
                    onChange={handleChange} 
                    placeholder="Category" 
                    className="w-full px-3 py-2 border border-black-300 rounded-md"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2"></label>
                <input 
                    type="text" 
                    name="Quantity" 
                    value={formData.Quantity} 
                    onChange={handleChange} 
                    placeholder="Quantity" 
                    className="w-full px-3 py-2 border border-black-300 rounded"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2"></label>
                <input 
                    type="text" 
                    name="Price" 
                    value={formData.Price} 
                    onChange={handleChange} 
                    placeholder="Price" 
                    className="w-full px-3 py-2 border border-black-300 rounded"
                />
            </div>
            <div className="flex justify-between">
                <button 
                    type="submit" 
                    className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded"
                >
                    Submit
                </button>
                <button 
                    type="button" 
                    onClick={handleCancel} 
                    className="bg-gray-400 hover:bg-gray-300 text-white font-bold py-2 px-4 rounded"
                >
                    Cancel
                </button>
            </div>
        </form>
    );
};

export default AddProduct;
