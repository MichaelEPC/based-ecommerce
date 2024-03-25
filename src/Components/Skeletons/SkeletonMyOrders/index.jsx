import React from 'react';
import './style.css';

export default function SkeletonMyOrders() {
  return (
    <>
    <div className='my-orders-item-container flex justify-center items-center loading mt-4 '>
        <div className='flex justify-between items-center'>

            <div className='skeleton-info-my-order-item bg-white ml-8'>
            </div>

            <div className='skeleton-info-my-order-item bg-white'>
            </div>

            <div className='skeleton-info-my-order-item bg-white mr-8'>
            </div>
            
        </div>
    </div>
    </>
  )
}
