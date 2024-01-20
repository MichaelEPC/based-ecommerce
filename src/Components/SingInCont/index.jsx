import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'


function SignInCont({users, setIsUserSingIn, setCurrentUser}) {

  const handleSubmit = (event) => {
    event.preventDefault();

    const emailValue = event.target.elements.email.value;
    const passwordValue = event.target.elements.password.value;

    const copyOfUser = users;
    for (const user of copyOfUser) {
      if (user.email === emailValue) {
        if (user.password === passwordValue) {
          window.location.href = '/based-online-product-store/home';
          setCurrentUser(user)
          setIsUserSingIn(true);
        }
      } else {

      }
    }
};

  return (
    <>
    <div className='flex flex-col justify-center items-center w-full h-full'>
    <div className='sign-cont flex flex-col items-center mt-4 rounded-lg'>
    <p className='font-semibold text-2xl mt-2 alig  '>Sign in</p>
      <form action="" onSubmit={handleSubmit}>
        <div className='flex mt-10'>
            <p className='font-semibold text-lg mr-10 mt-2 cursor-default'>Email:</p>
            <input type="text" name='email' placeholder='' className='email-input-singin input-sign-e w-72 h-10 rounded-lg p-2 focus:outline-green-500'/>
        </div>

        <div className='flex mt-10'>
            <p className='font-semibold text-left text-lg mr-3 mt-2 cursor-default'>Password:</p>
            <input type="password" name='password' placeholder='' className='password-input-singin input-sign-e w-72 h-10 rounded-lg p-2 focus:outline-green-500'
            required
            />
        </div>
        
        <div className='flex flex-col justify-center items-center h-32'>
          <p className='mt-5 cursor-pointer text-green-500 underline'>¿Forgot password?</p>
          <button type='submit' className='sign-button rounded-lg font-semibold text-white bg-green-500 w-80 h-44 mt-5'>Sign in</button>
        </div>
      </form>
        
        <div className='flex flex-col justify-center items-center mt-32'>
          <p className='mt-5 cursor-pointer text-green-500 underline'>Create your account</p>
          <Link to={'/based-online-product-store/sing-up'}>
          <button className='sign-button rounded-lg font-semibold text-white bg-green-500 w-80 h-14 mt-2'>Sing Up</button>
          </Link>
        </div>
    </div>
    </div>
    </>
  )
}
  
export default SignInCont