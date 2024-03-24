import React from 'react';
import dateIcon from '../../../imgs/computadora-sm.png';
import shoppCart from '../../../imgs/carrito-de-supermercado-sm.png';
import simbolMoney from '../../../imgs/dinero-sm.png';
import './style.css'

function MyOrderItem({myOrders}) {
    return (
      <>
        <div className='my-orders-item-container bg-white mt-4 '>
            <div className='flex justify-between items-center'>

                <div className='info-my-order-item ml-2'>
                    <p className='font-semibold underline'>{`Date: ${myOrders.date}`}</p>     
                    <img src={dateIcon} alt="" className='ml-2'/> 
                </div>

                <div className='info-my-order-item'>
                    <p className='font-semibold underline'>{`Total Products: ${myOrders.totalproducts}`}</p>
                    <img src={shoppCart} alt="" />
                </div>

                <div className='info-my-order-item mr-2'>
                    <p className='font-semibold underline'>{`Price: $${myOrders.price}`}</p>
                    <img src={simbolMoney} alt="" />
                </div>
                
            </div>
        </div>
      </>
    )
}
  
export default MyOrderItem