import React from "react";
import { ProductContext } from '../../Context'
import Layout from "../../Components/Layout"
import Navbar from "../../Components/Navbar"
import MyOrderCont from "../../Components/MyOrderCont";

function MyOrder() {
    const {
      previousOrder,
    } = React.useContext(ProductContext);

    return (
      <>
        <Navbar/>
       <Layout>
        <MyOrderCont previousOrder={previousOrder}/>    
       </Layout>
      </>
    )
  }
  
  export default MyOrder