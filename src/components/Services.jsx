import React from 'react';
import Nav from './Nav';

const services = () =>{
    return(
        <>
          <Nav></Nav>
          <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <section className="text-center p-8 bg-white shadow-lg rounded-lg">
                <h1 className="text-4xl font-bold text-blue-200 mb-4">Services</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Service 1: Haircut */}
                    <div className="bg-gray-200 p-4 rounded-lg">
                        <img src="src\assets\haircutOne.png" alt="Haircut" className="w-full h-48 object-cover rounded-lg mb-4" />
                        <h2 className="text-xl font-bold text-blue-600 mb-2">Haircut</h2>
                        <p className="text-gray-700">Professional haircut services for men and women.</p>
                    </div>
                    {/* Service 2: Photo Editing */}
                    <div className="bg-gray-200 p-4 rounded-lg">
                        <img src="src\assets\photoEditor.png" alt="Photo Editing" className="w-full h-48 object-cover rounded-lg mb-4" />
                        <h2 className="text-xl font-bold text-blue-600 mb-2">Photo Editing</h2>
                        <p className="text-gray-700">High-quality photo editing services for personal and professional use.</p>
                    </div>
                    {/* Service 3: Web Page Designing */}
                    <div className="bg-gray-200 p-4 rounded-lg">
                        <img src="src\assets\webpage.png" alt="Web Page Designing" className="w-full h-48 object-cover rounded-lg mb-4" />
                        <h2 className="text-xl font-bold text-blue-600 mb-2">Web Page Designing</h2>
                        <p className="text-gray-700">Custom web page designing services tailored to your needs.</p>
                    </div>
                </div>
            </section>
        </div>
          </>
      
    );
}

export default services