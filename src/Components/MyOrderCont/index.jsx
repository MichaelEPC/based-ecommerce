import React from 'react';
import { Link } from 'react-router-dom';
import MyOrderItem from './MyOrderItem';
import {sumProductCart, totalProductCart} from '../../Utils'
import './style.css'
import  backIcon from '../../imgs/flecha-izquierda.png'

function MyOrderCont({ previousOrder }) {
   
    return (
      <>
        <div className='my-order-container flex flex-col'>
            <div className='title-my-order'>
              <Link to={'/based-online-product-store/my-orders'}>
              <img src={backIcon} alt="back" className='absolute top-36 left-auto cursor-pointer'/>
              </Link>
              <p className='text-center font font-semibold mt-12 mb-2'>Order</p>
            </div>
            <div className='my-order-products-container flex flex-col overflow-auto rounded-lg bg-gray-100 '>
              {
              previousOrder?.map(previousOrder => (
              <MyOrderItem key={previousOrder.id} previousOrder={previousOrder}
              />))
              }
            </div>
            <div className='order-info-container'>
              <div className='info-div-my-order flex justify-between items-center bg-white'>
              <p className='font-semibold'>{`Total Products: ${previousOrder.length}`}</p>
              <p className='bg-green-500 font-semibold text-white rounded-lg pl-2 pr-2'>{`Price: $${sumProductCart(previousOrder)}`}</p>
              </div>
              <a className='a-my-order' href="">Have any problem</a>
            </div>
        </div>
      </>
    )
}
  
export default MyOrderCont