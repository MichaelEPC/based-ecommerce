import React from "react";
import { ProductContext } from "../../Context";
import Layout from "../../Components/Layout";
import Navbar from "../../Components/Navbar";
import MyOrdersCont from "../../Components/MyOrdersCont";

function MyOrders() {
  const { myOrders, previousOrder, setPreviousOrder } =
    React.useContext(ProductContext);

  return (
    <>
      <Navbar />
      <Layout>
        <p className="text-lg font-semibold">My Orders</p>
        <MyOrdersCont
          myOrders={myOrders}
          previousOrder={previousOrder}
          setPreviousOrder={setPreviousOrder}
        />
      </Layout>
    </>
  );
}

export default MyOrders;
