import React from "react";
import { Link } from "react-router-dom";
import MyOrderItem from "./MyOrderItem";
import { sumProductCart, totalProductCart } from "../../Utils";
import "./style.css";
import backIcon from "../../imgs/flecha-izquierda.png";

function MyOrderCont({ previousOrder }) {
  return (
    <>
      <div className="my-order-container flex flex-col">
        <div className="title-my-order">
          <Link to={"/based-ecommerce/my-orders"}>
            <img
              src={backIcon}
              alt="back"
              className="absolute left-auto top-36 cursor-pointer"
            />
          </Link>
          <p className="font mb-2 mt-12 text-center font-semibold">Order</p>
        </div>
        <div className="my-order-products-container flex flex-col overflow-auto rounded-lg bg-gray-100 ">
          {previousOrder?.map((previousOrder) => (
            <MyOrderItem key={previousOrder.id} previousOrder={previousOrder} />
          ))}
        </div>
        <div className="order-info-container">
          <div className="info-div-my-order flex items-center justify-between bg-white">
            <p className="font-semibold">{`Total Products: ${previousOrder.length}`}</p>
            <p className="rounded-lg bg-green-500 pl-2 pr-2 font-semibold text-white">{`Price: $${sumProductCart(previousOrder)}`}</p>
          </div>
          <a className="a-my-order" href="">
            Have any problem
          </a>
        </div>
      </div>
    </>
  );
}

export default MyOrderCont;
