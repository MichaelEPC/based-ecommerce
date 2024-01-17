import React from 'react';
import MyOrderItem from './MyOrderItem';
import './style.css'
import { Link } from 'react-router-dom';

function MyOrdersCont({myOrders}) {
  console.log(myOrders);
  return (
    <>
      <div className='my-orders-container flex flex-col items-center bg-gray-100 rounded-lg mt-5 overflow-auto'>
        {
          myOrders?.map(myOrders => (
            <Link key={myOrders.id} to={`'my-orders/${myOrders.id}'`}>
            <MyOrderItem key={myOrders.id} myOrders={myOrders}/>
            </Link>
          ))
        }
        
      </div>
    </>
  )
}
  
export default MyOrdersCont