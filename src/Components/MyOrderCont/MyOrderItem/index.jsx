import React from 'react';
import './style.css'

function MyOrderItem({ previousOrder }) {

    return (
        <>
        <div className='my-order-items bg-white  rounded-2xl flex mt-4 ml-2 mr-2 cursor-default'>
            <div className='flex justify-between items-center w-full mt-1'>
                <img src={previousOrder.image} alt="product-image" className='ml-3 object-cover'/>
                <p className='p-2 font-semibold w-60 ml-5 truncate'>{previousOrder.title}</p> 
                <p className='bg-green-500 font-semibold p-2 pr-2 pl-2 text-white rounded-full mr-2 '>{`$${previousOrder.price}`}</p>
            </div>
        </div>
        </> 
    )
}

export default MyOrderItem