import React from 'react';
import { useForm } from 'react-hook-form';

const SignUpUser = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }

    } = useForm(); //initializing use Form hook


    const onSubmit = data => {
        console.log(data); // console log 
    }

    
    return (
        <div className="max-w-md mx-auto p-6 bg-gradient-to-br from-cyan-400 to-cyan-600 shadow-xl rounded-lg">
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* input field for first name */}
                <div className="mb-4">
                    <label htmlFor="firstName" className='block text-violet-700 text-sm font-bold mb-3'>
                        first name:
                    </label>
                    <input
            id="firstName"
            type="text"
            {...register('firstName', {
              required: 'First name is required'
            })}
            className="w-full px-3 py-2 border-b-2 border-gray-300 focus:outline-none focus:border-cyan-700"
            // Using 'border-b-2' to apply a bottom border with thickness 2
          />
           {errors.firstName && (
            <p className="text-black-500 text-xs  mt-1">{errors.firstName.message}</p>
          )}
                   <button
            type="submit"
            className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
            </div>
      </form>
        </div>
    );
};



export default SignUpUser;
