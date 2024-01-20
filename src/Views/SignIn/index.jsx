import React from 'react'
import { ProductContext } from '../../Context'
import Layout from "../../Components/Layout"
import Navbar from '../../Components/Navbar'
import SignInCont from '../../Components/SingInCont'
import './style.css'

function SignIn() {
  const {
    users,
    setIsUserSingIn,
    setCurrentUser,
    itemNumber,
    setinfoProductOpen,
    setisOpenShoppingCart,
    setCategorySelected,
    filterProductsByCategory,
    isUserSingIn,
    leftNav,
    leftRight,
  } = React.useContext(ProductContext);

  return (
    <>
    <Navbar itemNumber={itemNumber} setisOpenShoppingCart={setisOpenShoppingCart} setinfoProductOpen={setinfoProductOpen} setCategorySelected={setCategorySelected}
      filterProductsByCategory={filterProductsByCategory} isUserSingIn={isUserSingIn} leftNav={leftNav} leftRight={leftRight}
    />
    <Layout>
      <SignInCont users={users} setIsUserSingIn={setIsUserSingIn} setCurrentUser={setCurrentUser}/>
    </Layout>
    </>
  )
}
  
  export default SignIn