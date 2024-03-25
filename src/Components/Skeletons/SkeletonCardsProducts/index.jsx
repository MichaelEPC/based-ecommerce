import React from 'react';
import './style.css';

function SkeletonCardsProducts({ item }) {
  return (
    <>
    <div className="main-skeleton-card loading relative flex flex-col-reverse rounded-lg">

        <div className="absolute top-0 right-0 bg-white rounded-full w-6 m-2">
        </div>

      <div className='bg-gray-100 flex justify-between items-center'>
        <span className="loading"></span>
        <span className="loading"></span>
      </div>
    </div>
    </>
  )
}

export default SkeletonCardsProducts