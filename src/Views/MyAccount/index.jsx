import React from 'react';
import { ProductContext } from '../../Context'
import Layout from '../../Components/Layout'
import Navbar from '../../Components/Navbar'
import MyAccountCont from '../../Components/MyAccountCont';

function MyAccount() {
  const {
    itemNumber,
    setinfoProductOpen,
    setisOpenShoppingCart,
    setCategorySelected,
    filterProductsByCategory,
    isUserSingIn,
    leftNav,
    leftRight,
    currentUser,
    users,
    setIsUserSingIn,
    setCurrentUser,
    setUsers,
  } = React.useContext(ProductContext);

    return (
      <>
      <Navbar itemNumber={itemNumber} setisOpenShoppingCart={setisOpenShoppingCart} setinfoProductOpen={setinfoProductOpen} setCategorySelected={setCategorySelected}
      filterProductsByCategory={filterProductsByCategory} isUserSingIn={isUserSingIn} leftNav={leftNav} leftRight={leftRight}
      />
      <Layout>
      <MyAccountCont currentUser={currentUser} users={users} setIsUserSingIn={setIsUserSingIn} setCurrentUser={setCurrentUser}
       setUsers={setUsers}
      />
      </Layout>
      </>
    )
  }
  
  export default MyAccount