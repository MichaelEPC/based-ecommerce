import React from "react";
import { ProductContext } from '../../Context'
import Layout from "../../Components/Layout"
import Navbar from "../../Components/Navbar"
import MyOrderCont from "../../Components/MyOrderCont";

function MyOrder() {
    const {
    itemNumber,
    setinfoProductOpen,
    setisOpenShoppingCart,
    setCategorySelected,
    filterProductsByCategory,
    isUserSingIn,
    leftNav,
    leftRight,
    myOrders,
    previousOrder,
    } = React.useContext(ProductContext);

    return (
      <>
      <Navbar itemNumber={itemNumber} setisOpenShoppingCart={setisOpenShoppingCart} setinfoProductOpen={setinfoProductOpen} setCategorySelected={setCategorySelected}
      filterProductsByCategory={filterProductsByCategory} isUserSingIn={isUserSingIn} leftNav={leftNav} leftRight={leftRight}
      />
       <Layout>
        <MyOrderCont previousOrder={previousOrder} myOrders={myOrders}/>    
       </Layout>
      </>
    )
  }
  
  export default MyOrder