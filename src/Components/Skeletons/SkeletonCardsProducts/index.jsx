import React from "react";
import "./style.css";

function SkeletonCardsProducts({ item }) {
  return (
    <>
      <div className="main-skeleton-card loading relative flex flex-col-reverse rounded-lg">
        <div className="absolute right-0 top-0 m-2 w-6 rounded-full bg-white"></div>

        <div className="flex items-center justify-between bg-gray-100">
          <span className="loading"></span>
          <span className="loading"></span>
        </div>
      </div>
    </>
  );
}

export default SkeletonCardsProducts;
