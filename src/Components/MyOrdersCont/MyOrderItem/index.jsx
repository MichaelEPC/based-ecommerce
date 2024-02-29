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

                <div className='flex items-center mt-5'>
                <p className='font-semibold underline ml-2'>{`Date: ${myOrders.date}`}</p>     
                <img src={dateIcon} alt="" className='ml-2'/> 
                </div>

                <div className='flex items-center mt-5 mr-6'>
                    <p className='font-semibold underline'>{`Total Products: ${myOrders.totalproducts}`}</p>
                    <img src={shoppCart} alt="" />
                </div>

                <div className='flex items-center mt-5 mr-4'>
                    <p className='font-semibold underline'>{`Price: $${myOrders.price}`}</p>
                    <img src={simbolMoney} alt="" />
                </div>
                
            </div>
        </div>
      </>
    )
}
  
export default MyOrderItem