import React from 'react';
import { ProductContext } from '../../Context';
import { Link } from 'react-router-dom';
import  backIcon from '../../imgs/flecha-izquierda.png'
import './style.css'
import storeIcon from '../../imgs/storeIcon.png'; 

function SignUpCont() {

  const {
    users, 
    setUsers, 
    userID, 
    setUserID,
  } = React.useContext(ProductContext)

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
      orders: [],
      onCart: [],
    }
    const copyOfUser = users;
    copyOfUser.push(newUser);
    console.log(copyOfUser);
    setUsers(copyOfUser);
    window.location.href = '/based-online-product-store/';
};

return (
  <>
  <div className='flex flex-col justify-center items-center w-full h-full'>
    <div className='signup-container flex flex-col items-center mt-4 rounded-lg'>
      <div className='flex flex-col items-center'>
        <div className='div-icon rounded-full w-48'>
          <Link to={'/based-online-product-store/home'}>
            <img className='store-icon' src={storeIcon} alt="icon" />
          </Link>
        </div>
      </div>
    <p className='sign-in-title underlined underline-clip font-semibold'>¡Create yor account!</p>

    <div className='input-container flex justify-center rounded-lg'>
      <form className='sign-in-form' action="" onSubmit={handleSubmit}>
        <div className='flex flex-col mt-10'>
            <p className='input-sign-in-text font-semibold mr-10 mt-2 cursor-default mb-2'>Email:</p>
            <input type="text" name='email' placeholder='' className='form-input-sing-in rounded-lg p-2 focus:outline-green-500'
            required/>
        </div>

        <div className='flex-col mt-10'>
            <p className='input-sign-in-text font-semibold text-left mr-3 mt-2 cursor-default mb-2'>Password:</p>
            <input type="password" name='password' placeholder='' className='form-input-sing-in rounded-lg p-2 focus:outline-green-500'
            required
            />
        </div>

        <div className='flex-col mt-10'>
            <p className='input-sign-in-text font-semibold text-left mr-3 mt-2 cursor-default mb-2'>Adress:</p>
            <input type="text" name='adress' placeholder='' className='form-input-sing-in rounded-lg p-2 focus:outline-green-500'
            required
            />
        </div>
        
        <div className='flex-col mt-10'>
            <p className='input-sign-in-text font-semibold text-left mr-3 mt-2 cursor-default mb-2'>Complete Name:</p>
            <input type="name" name='name' placeholder='' className='form-input-sing-in rounded-lg p-2 focus:outline-green-500'
            required
            />
        </div>

          <div className='div-sign-in-button flex flex-col items-center'>
            <button type='submit' className='sign-button rounded-lg font-semibold text-white bg-green-500'>Create account</button>
          </div>
      </form>

      <div>
        <Link to={'/based-online-product-store/sing-in'}>
        <img src={backIcon} alt="back" className='absolute bottom-2 left-2 cursor-pointer'/>
        </Link>
      </div>

      </div>
    </div>
  </div>
  </>
  )
}
  
export default SignUpCont