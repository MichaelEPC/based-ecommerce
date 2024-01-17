import React from 'react';
import MyOrderItem from './MyOrderItem';
import {sumProductCart, totalProductCart} from '../../Utils'
import './style.css'

function MyOrderCont({ previousOrder }) {
   
    return (
      <>
        <div className='my-order-container  flex flex-col'>
            <div className=''>
                <p className='text-center font font-semibold mt-6 mb-2 w-full font text-lg underline'>My Order</p>
            </div>
            <div className='my-order-products-container flex flex-col overflow-auto rounded-lg bg-gray-100 '>
                {
                previousOrder?.map(previousOrder => (
                <MyOrderItem key={previousOrder.id} previousOrder={previousOrder}
                />))
                }
            </div>
            <div className='w-full flex justify-between bg-white mt-2'>
            <p className='text-lg font-semibold underline ml-16'>{`Total Products: ${previousOrder.length}`}</p>
            <p className='bg-green-500 font-semibold text-white text-lg rounded-lg h-8 pl-2 pr-2 mr-16 mb-1'>{`Price: $${sumProductCart(previousOrder)}`}</p>
            </div>
        </div>
      </>
    )
}
  
export default MyOrderCont