import React from 'react';
import {sumProductCart, totalProductCart} from '../../../Utils'
import './style.css'

function MyOrderItem({myOrders}) {
    return (
      <>
        <div className='my-orders-item-container bg-white mt-4 '>
            <div className='flex justify-between items-center'>

                <div className='flex items-center mt-5'>
                <p className='font-semibold underline ml-2'>{`${myOrders.date}`}</p>     
                <img src="src/imgs/computadora-sm.png" alt="" className='ml-2'/> 
                </div>

                <div className='flex items-center mt-5 mr-6'>
                    <p className='font-semibold underline'>{`Total Products: ${myOrders.totalproducts}`}</p>
                    <img src="src/imgs/carrito-de-supermercado-sm.png" alt="" />
                </div>

                <div className='flex items-center mt-5 mr-4'>
                    <p className='font-semibold underline'>{`$${myOrders.totalprice}`}</p>
                    <img src="src/imgs/dinero-sm.png" alt="" />
                </div>
                
            </div>
        </div>
      </>
    )
}
  
export default MyOrderItem