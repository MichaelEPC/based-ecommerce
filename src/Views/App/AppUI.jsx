import React from "react";
import { ProductContext } from "../../Context";
import { useRoutes, BrowserRouter } from "react-router-dom";
import Home from "../Home";
import MyAccount from "../MyAccount";
import MyOrder from "../MyOrder";
import MyOrders from "../MyOrders";
import NotFound from "../NotFound";
import SignIn from "../SignIn";
import OnCart from "../../Components/OnCart";
import SingUp from "../SingUp";
import "./App.css";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/based-ecommerce/", element: <SignIn /> },
    { path: "/based-ecommerce/home", element: <Home /> },
    {
      path: "/based-ecommerce/home/mens-clothing",
      element: <Home />,
    },
    {
      path: "/based-ecommerce/home/womens-clothing",
      element: <Home />,
    },
    { path: "/based-ecommerce/home/jewelery", element: <Home /> },
    { path: "/based-ecommerce/home/electronics", element: <Home /> },
    { path: "/based-ecommerce/my-account", element: <MyAccount /> },
    { path: "/based-ecommerce/my-order", element: <MyOrder /> },
    { path: "/based-ecommerce/my-order/last", element: <MyOrder /> },
    { path: "/based-ecommerce/my-orders", element: <MyOrders /> },
    { path: "/based-ecommerce/my-order/:id", element: <MyOrder /> },
    { path: "/based-ecommerce/sign-in", element: <SignIn /> },
    { path: "/based-ecommerce/sign-up", element: <SingUp /> },
    { path: "/*", element: <NotFound /> },
  ]);
  return routes;
};

function AppUI() {
  const {
    setItemNumber,
    itemNumber,
    setinfoProductOpen,
    setShoppingProducts,
    shoppingProducts,
    setisOpenShoppingCart,
    isOpenShoppingCart,
    myOrders,
    setMyOrders,
    setPreviousOrder,
    setMyOrdersId,
    myOrdersId,
  } = React.useContext(ProductContext);

  return (
    <>
      <BrowserRouter>
        <AppRoutes />
        <OnCart
          setItemNumber={setItemNumber}
          itemNumber={itemNumber}
          setinfoProductOpen={setinfoProductOpen}
          setShoppingProducts={setShoppingProducts}
          shoppingProducts={shoppingProducts}
          setisOpenShoppingCart={setisOpenShoppingCart}
          isOpenShoppingCart={isOpenShoppingCart}
          myOrders={myOrders}
          setMyOrders={setMyOrders}
          setPreviousOrder={setPreviousOrder}
          setMyOrdersId={setMyOrdersId}
          myOrdersId={myOrdersId}
        />
      </BrowserRouter>
    </>
  );
}

export default AppUI;
