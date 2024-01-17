import React from 'react'
import { ProductContext } from '../../Context'
import Layout from "../../Components/Layout"
import Navbar from "../../Components/Navbar"
import MyOrdersCont from "../../Components/MyOrdersCont"

function MyOrders() {
  const {
    myOrders,
    setMyOrders,
  } = React.useContext(ProductContext);

  return (
    <>
    <Navbar/>
      <Layout>
        <p className="font-semibold text-lg">My Orders</p>
        <MyOrdersCont myOrders={myOrders}/>
      </Layout>
    </>
  )
  }
  
  export default MyOrders