import React from "react";
import "./style.css";

export default function SkeletonMyOrders() {
  return (
    <>
      <div className="my-orders-item-container loading mt-4 flex items-center justify-center ">
        <div className="flex items-center justify-between">
          <div className="skeleton-info-my-order-item ml-8 bg-white"></div>

          <div className="skeleton-info-my-order-item bg-white"></div>

          <div className="skeleton-info-my-order-item mr-8 bg-white"></div>
        </div>
      </div>
    </>
  );
}
