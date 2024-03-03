import React from 'react';
import { ProductContext } from '../../Context'
import Layout from '../../Components/Layout'
import Navbar from '../../Components/Navbar'
import MyAccountCont from '../../Components/MyAccountCont';

function MyAccount() {
  const {
    currentUser,
    users,
    setIsUserSingIn,
    setCurrentUser,
    setUsers,
  } = React.useContext(ProductContext);

  return (
    <>
    <Navbar/>
    <Layout>
    <MyAccountCont currentUser={currentUser} users={users} setIsUserSingIn={setIsUserSingIn} setCurrentUser={setCurrentUser}
      setUsers={setUsers}
    />
    </Layout>
    </>
  )
}
  
  export default MyAccount