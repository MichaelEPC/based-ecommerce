import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'

function SignInCont({}) {
  return (
    <>
    <div className='flex flex-col justify-center items-center w-full h-full'>
    <div className='sign-cont flex flex-col items-center mt-4 rounded-lg'>
    <p className='font-semibold text-2xl mt-2 alig  '>Sign in</p>
      <form action="">
        <div className='flex mt-10'>
            <p className='font-semibold text-lg mr-10 mt-2 cursor-default'>Email:</p>
            <input type="text" placeholder='' className='input-sign-e w-72 h-10 rounded-lg p-2 focus:outline-green-500'/>
        </div>

        <div className='flex mt-10'>
            <p className='font-semibold text-left text-lg mr-3 mt-2 cursor-default'>Password:</p>
            <input type="password" name='password' placeholder='' className='input-sign-e w-72 h-10 rounded-lg p-2 focus:outline-green-500'
            required
            />
        </div>
        
        <div className='flex flex-col justify-center items-center h-32'>
          <p className='mt-5 cursor-pointer text-green-500 underline'>¿Forgot password?</p>
          <button className='sign-button rounded-lg font-semibold text-white bg-green-500 w-80 h-44 mt-5'>Sign in</button>
        </div>
      </form>

        <div className='flex flex-col justify-center items-center mt-32'>
          <p className='mt-5 cursor-pointer text-green-500 underline'>Create your account</p>
          <button className='sign-button rounded-lg font-semibold text-white bg-green-500 w-80 h-14 mt-2'>Sing Up</button>
        </div>
    </div>
    </div>
    </>
  )
}
  
export default SignInCont