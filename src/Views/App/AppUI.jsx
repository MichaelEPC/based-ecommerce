import React from 'react'
import { ProductContext } from '../../Context'
import { useRoutes, BrowserRouter } from 'react-router-dom'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
import OnCart from '../../Components/OnCart'
import './App.css'

const AppRoutes = () => {
  let routes = useRoutes([
    {path: '/', element: <Home/>},
    {path: '/mens-clothing', element: <Home/>},
    {path: '/womens-clothing', element: <Home/>},
    {path: '/jewelery', element: <Home/>},
    {path: '/electronics', element: <Home/>},
    {path: '/my-account', element: <MyAccount/>},
    {path: '/my-order', element: <MyOrder/>},
    {path: '/my-order/last', element: <MyOrder/>},
    {path: '/my-orders', element: <MyOrders/>},
    {path: '/my-order/:id', element: <MyOrder/>},
    {path: '/sing-in', element: <SignIn/>},
    {path: '/*', element: <NotFound/>},
  ])
  return routes
}

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
      <AppRoutes/>
      <OnCart setItemNumber={setItemNumber} itemNumber={itemNumber} 
      setinfoProductOpen={setinfoProductOpen} setShoppingProducts={setShoppingProducts} 
      shoppingProducts={shoppingProducts} setisOpenShoppingCart={setisOpenShoppingCart}
      isOpenShoppingCart={isOpenShoppingCart} myOrders={myOrders}
      setMyOrders={setMyOrders} setPreviousOrder={setPreviousOrder} setMyOrdersId= {setMyOrdersId} myOrdersId={myOrdersId}
      />
    </BrowserRouter>
    </> 
  )
}

export default AppUI