import React from "react";
import "./style.css";

function MyOrderItem({ previousOrder }) {
  return (
    <>
      <div className="my-order-items ml-2  mr-2 mt-4 flex cursor-default rounded-2xl bg-white">
        <div className="mt-1 flex w-full items-center justify-between">
          <img
            src={previousOrder.image}
            alt="product-image"
            className="ml-3 object-cover"
          />
          <p className="ml-5 w-60 truncate p-2 font-semibold">
            {previousOrder.title}
          </p>
          <p className="mr-2 rounded-full bg-green-500 p-2 pl-2 pr-2 font-semibold text-white ">{`$${previousOrder.price}`}</p>
        </div>
      </div>
    </>
  );
}

export default MyOrderItem;
