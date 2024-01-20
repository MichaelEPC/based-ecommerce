import React from 'react';
import { Link } from 'react-router-dom';
import { ProductContext } from '../../Context'
import  backIcon from '../../imgs/flecha-izquierda.png'

function MyAccountCont({}) {
  const {
    currentUser,
    setIsUserSingIn,
    setCurrentUser,
    setUsers,
    users,
  } = React.useContext(ProductContext);

  const logoutAccount = () => {
    setIsUserSingIn('false');
    setCurrentUser({});
    window.location.href = '/based-online-product-store/sing-in';
};

  const deleteAccount = () => {
    let index  = 0;
    for (const objectsUsers of users) {
      if (objectsUsers.id == currentUser.id) {
        break;
      }
      index = index + 1;
    }
    index = index - 1;
    let usersList = [...users];
    usersList = usersList.splice(index, 1);
    const parseCopyOfUser = JSON.stringify(usersList);
    setUsers(parseCopyOfUser);
    setIsUserSingIn('false');
    setCurrentUser({});
    window.location.href = '/based-online-product-store/sing-in';
};

  return (
    <>
    <div className='flex flex-col justify-center items-center w-full h-full'>
    <div className='signup-cont flex flex-col items-center mt-4 rounded-lg'>
    <p className='font-semibold text-2xl mt-3'>My account</p>
        <div className='flex-col justify-center items-center mt-10'>

          <div className='flex justify-between items-center'>
            <p className='font-semibold text-lg cursor-default mb-2'>Email: </p>
            <p className='font-semibold text-lg cursor-default mb-2'>{` ${currentUser.email}`}</p>
          </div>

          <div className='flex justify-between items-center'>
            <p className='font-semibold text-lg cursor-default mb-2'>Name: </p>
            <p className='font-semibold text-lg cursor-default mb-2'>{` ${currentUser.name}`}</p>
          </div>
          
          <div className='flex justify-between items-center'>
            <p className='font-semibold text-lg cursor-default mb-2'>Adress: </p>
            <p className='font-semibold text-lg cursor-default mb-2'>{` ${currentUser.adress}`}</p>
          </div>
          
          </div> 
          <button className='sign-button rounded-lg font-semibold text-white bg-red-700 w-80 h-14 mb-2 mt-12' 
          onClick={() => {
            logoutAccount();
          }}
          >Log out</button>
          <button className='sign-button rounded-lg font-semibold text-white bg-red-700 w-80 h-14 mb-2 mt-12' 
          onClick={() => {
            deleteAccount();
          }}
          >Delete account</button>
    </div>
    </div>
    </>
  )
}
  
export default MyAccountCont