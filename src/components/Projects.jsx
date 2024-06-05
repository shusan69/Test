import React from 'react';
import Nav from './Nav';

const projects = () =>{
    return(
        <>
        
        <Nav></Nav>
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <section className="text-center p-8 bg-white shadow-lg rounded-lg">
                <h1 className="text-4xl font-bold text-blue-200 mb-4">Projects</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Project 1 */}
                    <div className="bg-gray-200 p-4 rounded-lg">
                        <img src="src\assets\haircutOne.png" alt="Project 1" className="w-full h-48 object-cover rounded-lg mb-4" />
                        <h2 className="text-xl font-bold text-blue-600 mb-2">Project 1 </h2>
                        <p className="text-gray-700">Mid fade on a straight hair</p>
                    </div>
                    {/* Project 2 */}
                    <div className="bg-gray-200 p-4 rounded-lg">
                        <img src="src\assets\haircutTwo.png" alt="Project 2" className="w-full h-48 object-cover rounded-lg mb-4" />
                        <h2 className="text-xl font-bold text-blue-600 mb-2">Project 2 Title</h2>
                        <p className="text-gray-700">burst fade on curly hair</p>
                    </div>
                    {/* Project 3 */}
                    <div className="bg-gray-200 p-4 rounded-lg">
                        <img src="src\assets\haircutThree.png" alt="Project 3" className="w-full h-48 object-cover rounded-lg mb-4" />
                        <h2 className="text-xl font-bold text-blue-600 mb-2">Project 3 Title</h2>
                        <p className="text-gray-700">Custom haircut with straight line</p>
                    </div>
                </div>
            </section>
        </div>
        </>
    );
}

export default projects