import React from 'react'
import { useRoutes, BrowserRouter } from 'react-router-dom'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
import { ProductContext, ProductProvider} from '../../Context'
import CallForProducts from '../../Hooks/CallForProducts'
import './App.css'


const AppRoutes = () => {
  let routes = useRoutes([
    {path: '/', element: <Home/>},
    {path: '/my-account', element: <MyAccount/>},
    {path: '/my-order', element: <MyOrder/>},
    {path: '/my-orders', element: <MyOrders/>},
    {path: '/sing-in', element: <SignIn/>},
    {path: '/*', element: <NotFound/>},
  ])
  return routes
}

function App() {

  return (
    <>
    <ProductProvider>
    <BrowserRouter>
      <AppRoutes/>
    </BrowserRouter>
    </ProductProvider>
    </>
  )
}

export default App
