import React from 'react'
import { ProductContext } from '../../Context'
import Layout from "../../Components/Layout"
import Navbar from "../../Components/Navbar"
import MyOrdersCont from "../../Components/MyOrdersCont"

function MyOrders() {
  const {
    myOrders,
    previousOrder,
    setPreviousOrder,
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
        <p className="font-semibold text-lg">My Orders</p>
        <MyOrdersCont myOrders={myOrders} previousOrder={previousOrder} setPreviousOrder={setPreviousOrder}/>
      </Layout>
    </>
  )
  }
  
  export default MyOrders