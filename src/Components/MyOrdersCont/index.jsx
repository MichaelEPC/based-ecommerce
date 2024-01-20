import React from 'react';
import { Link } from 'react-router-dom';
import MyOrderItem from './MyOrderItem';
import './style.css'

function MyOrdersCont({myOrders, setPreviousOrder}) {
  return (
    <>
      <div className='my-orders-container flex flex-col items-center bg-gray-100 rounded-lg mt-5 overflow-auto'>
        {
          myOrders?.map(myOrders => (
            <Link to={`/based-online-product-store/my-order/${myOrders.id}`} onClick={() =>{
              setPreviousOrder(myOrders.products)
            }}>
            <MyOrderItem key={myOrders.id} myOrders={myOrders}/>
            </Link>
          ))
        }
        
      </div>
    </>
  )
}
  
export default MyOrdersCont