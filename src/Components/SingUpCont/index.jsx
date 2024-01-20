import React from 'react';
import { Link } from 'react-router-dom';
import  backIcon from '../../imgs/flecha-izquierda.png'
import './style.css'

function SignUpCont({users, setUsers, userID, setUserID}) {

  const handleSubmit = (event) => {
    event.preventDefault();
    // We acces to inputs values
    const emailValue = event.target.elements.email.value;
    const passwordValue = event.target.elements.password.value;
    const nameValue = event.target.elements.name.value;
    const adressValue = event.target.elements.adress.value;

    const newUniqueID = parseInt(userID);
    setUserID(newUniqueID + 1);

    const newUser = { 
      id: newUniqueID,
      email: emailValue, 
      password: passwordValue, 
      name: nameValue,
      adress: adressValue,
    }
    const copyOfUser = users;
    copyOfUser.push(newUser);
    const parseCopyOfUser = JSON.stringify(copyOfUser);
    setUsers(parseCopyOfUser);

    window.location.href = '/based-online-product-store/';
};

  return (
    <>
    <div className='flex flex-col justify-center items-center w-full h-full'>
    <div className='signup-cont flex flex-col items-center mt-4 rounded-lg'>
    <p className='font-semibold text-2xl mt-3'>New account</p>
      <form action="" onSubmit={handleSubmit}>
        <div className='flex-col mt-10'>
            <p className='font-semibold text-lg mr-10 mt-2 cursor-default mb-2'>Email:</p>
            <input type="text" name='email' placeholder='' className='input-sign-e w-80 h-10 rounded-lg p-2 focus:outline-green-500'
            required/>
        </div>

        <div className='flex-col mt-10'>
            <p className='font-semibold text-left text-lg mr-3 mt-2 cursor-default mb-2'>Password:</p>
            <input type="password" name='password' placeholder='' className='input-sign-e w-80 h-10 rounded-lg p-2 focus:outline-green-500'
            required
            />
        </div>

        <div className='flex-col mt-10'>
            <p className='font-semibold text-left text-lg mr-3 mt-2 cursor-default mb-2'>Complete Name:</p>
            <input type="name" name='name' placeholder='' className='input-sign-e w-80 h-10 rounded-lg p-2 focus:outline-green-500'
            required
            />
        </div>

        <div className='flex-col mt-10'>
            <p className='font-semibold text-left text-lg mr-3 mt-2 cursor-default mb-2'>Adress:</p>
            <input type="text" name='adress' placeholder='' className='input-sign-e w-80 h-10 rounded-lg p-2 focus:outline-green-500'
            required
            />
        </div>
          <button type='submit' className='sign-button rounded-lg font-semibold text-white bg-green-500 w-80 h-14 mb-2 mt-12'>Create account</button>
      </form>
          <div>
            <Link to={'/based-online-product-store/sing-in'}>
            <img src={backIcon} alt="back" className='absolute bottom-2 left-2 cursor-pointer'/>
            </Link>
          </div>
    </div>
    </div>
    </>
  )
}
  
export default SignUpCont