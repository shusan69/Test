import React from 'react';
import { useForm } from 'react-hook-form';

const SignUpUser = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }

    } = useForm(); //initializing use Form hook


    const onSubmit = data => {

            // Show alert with form data
    alert(JSON.stringify(data, null, 2));


        console.log(data); // console log 

        // Prevent default form submission
  preventDefault();


//   for password
if (data.password !== data.confirmPassword) {
    alert("Passwords do not match!");
    return;
  }
    }

    
    return (
        <div className="max-w-md mx-auto p-6 bg-gradient-to-br via-indigo-500 to-violet-500 shadow-xl rounded-lg">
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
            
          />
           {errors.firstName && (
            <p className="text-black-500 text-xs  mt-1">{errors.firstName.message}</p>
          )}

 {/* Input field for Last Name */}
 <div className="mb-4">
          <label htmlFor="lastName" className="block text-green-700 text-sm font-bold mb-3">
            Last Name:
          </label>
          <input
            id="lastName"
            type="text"
            {...register('lastName', {
              required: 'Last name is required'
            })}
            className="w-full px-3 py-2 border-b-2 border-gray-300 focus:outline-none focus:border-cyan-700"
          />
          {errors.lastName && (
            <p className="text-black-500 text-xs mt-1">{errors.lastName.message}</p>
          )}
        </div>




 {/* Input field for Username */}
 <div className="mb-4">
          <label htmlFor="username" className="block text-yellow-700 text-sm font-bold mb-3">
            Username:
          </label>
          <input
            id="username"
            type="text"
            {...register('userName', {
              required: 'Usernam is required',
              validate: value => value !== 'admin' || 'Nice try!'
            })}
            className="w-full px-3 py-2 border-b-2 border-gray-300 focus:outline-none focus:border-cyan-700"
          />
          {errors.userName && (
            <p className="text-black-500 text-xs mt-1">{errors.userName.message}</p>
          )}
        </div>



         {/* Input field for Email */}
         <div className="mb-4">
          <label htmlFor="email" className="block text-orange-700 text-sm font-bold mb-3">
            Email:
          </label>
          <input
            id="email"
            type="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address'
              }
            })}
            className="w-full px-3 py-2 border-b-2 border-gray-300 focus:outline-none focus:border-cyan-700"
          />
          {errors.email && (
            <p className="text-black-500 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>


{/* Input field for Password */}
<div className="mb-4">
          <label htmlFor="password" className="block text-violet-700 text-sm font-bold mb-3">
            Password:
          </label>
          <input
            id="password"
            type="password"
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 6,
                message: 'Password must have at least 6 characters'
              }
            })}
            className="w-full px-3 py-2 border-b-2 border-gray-300 focus:outline-none focus:border-cyan-700"
          />
          {errors.password && (
            <p className="text-black-500 text-xs mt-1">{errors.password.message}</p>
          )}
        </div>



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
