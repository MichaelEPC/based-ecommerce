import React from 'react';
import { Link } from 'react-router-dom';
import { ProductContext } from '../../Context'
import storeIcon from '../../imgs/storeIcon.png';
import './style.css';

function MyAccountCont({}) {
  const {
    currentUser,
    setIsUserSingIn,
    setCurrentUser,
    setUsers,
    users,
  } = React.useContext(ProductContext);

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
    setUsers(usersList);
    setIsUserSingIn('false');
    setCurrentUser({});
    window.location.href = '/based-online-product-store/sing-in';
};

const handleEditAccount = (event) => {

  event.preventDefault();
  const emailValue = event.target.elements.email.value;
  const nameValue = event.target.elements.name.value;
  let firstPasswordValue = event.target.elements.passwordFirst.value;
  const secondPasswordValue = event.target.elements.passwordSecond.value;
  const adress = event.target.elements.adress.value;
  
  const dataUser = currentUser.id;
  let usersTemporalList = [...users];
  
  if (firstPasswordValue != secondPasswordValue) {
    return;
  }

  if (firstPasswordValue.length <= 0  || secondPasswordValue.length <= 0) {
    firstPasswordValue = currentUser.password;
  }
  
  for (let index = 0; index < usersTemporalList.length; index++) {
    if (dataUser === usersTemporalList[index].id) {
      usersTemporalList[index].email = emailValue;
      usersTemporalList[index].password = firstPasswordValue;
      usersTemporalList[index].name = nameValue;
      usersTemporalList[index].adress = adress;
    }
    const copyListChanged = [...usersTemporalList];
    console.log(copyListChanged);
    setUsers(copyListChanged);
    
  }
}

return (
  <>
  <div className='my-account-main-container'>
    <form className='my-account-main-container flex items-center' action=""  onSubmit={handleEditAccount}>
      <div className='my-account-edit-container flex flex-col items-center rounded-lg'>
        <p className='underlined underline-clip font-semibold mt-8'>My account</p>
        <div className='flex justify-center items-center'>
        <button className='my-account-red-button rounded-lg font-semibold text-white bg-red-700 mt-12' onClick={() => {deleteAccount()}}
          >Delete account</button>
        </div>
      </div>
      <div className='my-account-container rounded-lg'>
        <div className='flex flex-col items-center'>
           <div className='div-icon rounded-full w-48'>
              <Link to={'/based-online-product-store/home'}>
                <img className='store-icon' src={storeIcon} alt="icon" />
              </Link>
          </div>
        </div>
        <div className='flex-col justify-center items-center'>

          <div className='my-account-input-container flex justify-center'>
            <span>¡Change your data!</span>
          </div>

          <div className='my-account-input-container flex flex-col'>
            <p className='font-semibold cursor-default mb-2'>Email: </p>
            <div>
              <input className='my-account-input focus:outline-green-500' name='email' type="email" defaultValue={currentUser.email} minLength={8} maxLength={89}/>

            </div>
          </div>

          <div className='my-account-input-container flex flex-col'>
            <p className='font-semibold cursor-default mb-2'>Name: </p>
            <input className='my-account-input focus:outline-green-500' type="text" name='name' defaultValue={currentUser.name} minLength={4} maxLength={89}/>
          </div>

          <div className='my-account-input-container flex flex-col'>
            <p className='font-semibold cursor-default mb-2'>Password: </p>
            <input className='my-account-input focus:outline-green-500' type="password" name='passwordFirst' placeholder='**********' minLength={5} maxLength={89}/>
          </div>

          <div className='my-account-input-container flex flex-col'>
            <p className='font-semibold cursor-default mb-2'>Confirm Password: </p>
            <input className='my-account-input focus:outline-green-500' type="password" name='passwordSecond' placeholder='*********' minLength={5} maxLength={89}/>
          </div>

          <div className='my-account-input-container flex flex-col'>
            <p className='font-semibold cursor-default mb-2'>Adress: </p>
            <input className='my-account-input focus:outline-green-500' type="text" name='adress' defaultValue={currentUser.adress} minLength={8} maxLength={89}/>
          </div>
          
          </div>
          
          <div className='flex justify-center'>
            <button type='submit' className='my-account-green-button bg-green-500 rounded-lg font-semibold text-white'>Edit account</button>
          </div>
      </div>
    </form>
  </div>
  </>
)
}
  
export default MyAccountCont