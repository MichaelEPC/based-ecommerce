import React from 'react';
import { Link } from 'react-router-dom';
import { ProductContext } from '../../Context';
import './style.css'
import storeIcon from '../../imgs/storeIcon.png';


function SignInCont() {

  const {
    users, 
    setIsUserSingIn, 
    setCurrentUser,
    currentUser,
  } = React.useContext(ProductContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const emailValue = event.target.elements.email.value;
    const passwordValue = event.target.elements.password.value;

    for (const copyOfUser of users) {
      if (copyOfUser.email === emailValue) {
        if (copyOfUser.password === passwordValue) {
          setCurrentUser(copyOfUser);
          setIsUserSingIn(true);
          window.location.href = '/based-online-product-store/home';
        } 
      } 
    }
}

return (
  <>
  <div className='flex flex-col justify-center items-center w-full h-full'>
    <div className='main-container'>

    <div className='flex flex-col items-center'>
      <div className='div-icon rounded-full w-48'>
        <Link to={'/based-online-product-store/home'}>
          <img className='store-icon' src={storeIcon} alt="icon" />
        </Link>
      </div>
    </div>

    <div className='flex flex-col items-center'>
      <div className='input-container flex flex-col items-center rounded-lg'>
      <p className='sing-up-title font-semibold'>Sign in</p>
      <form action="" onSubmit={handleSubmit}>
        <div className=' mt-10'>
            <p className='info-text font-semibold mt-1 cursor-default'>Email:</p>
            <input type="email" name='email' placeholder='' className='form-input rounded-lg focus:outline-green-500' required/>
        </div>

        <div className='mt-10'>
            <p className='info-text font-semibold cursor-default'>Password:</p>
            <input type="password" name='password' placeholder='*********' className='form-input rounded-lg p-2 focus:outline-green-500'
            required/>
        </div>

        <div className='flex flex-col justify-center items-center mb-12'>
          <p className='forgot-text cursor-pointer text-green-500 underline'>¿Forgot password?</p>
          <button type='submit' className='sign-button rounded-lg font-semibold text-white bg-green-500'>Continue</button>
        </div>
      </form>
      </div>
    </div>

    <div className='flex flex-col items-center'>
      <Link to={'/based-online-product-store/sing-up'}>
        <a className='createAccount-text rounded-lg font-semibold text-green-500 bg-transparent' href="">Create new account</a>
      </Link>
      </div>
    </div>
  </div>
  </>
)
}
  
export default SignInCont