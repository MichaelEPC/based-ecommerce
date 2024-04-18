import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { ProductContext } from "../../Context";
import MyOrderItem from "./MyOrderItem";
import SkeletonMyOrders from "../Skeletons/SkeletonMyOrders";
import { sumTotalPriceOrder } from "../../Utils";

function MyOrdersCont() {
  const {
    currentUser,
    setPreviousOrder,
    setMyOrders,
    myOrders,
    setLoadingSkeletonItemOrders,
    loadingSkeletonItemOrders,
  } = React.useContext(ProductContext);

  const items = [1, 2, 3, 4, 5, 6, 7, 8];

  // Updates constatly the MyOrders section
  React.useEffect(() => {
    setTimeout(() => {
      (function () {
        setMyOrders(currentUser.orders);
        setLoadingSkeletonItemOrders(false);
      })();
    }, 1000);
  });

  return (
    <>
      <div className="title-my-orders">
        <span className="underline-clip underlined mt-8 font-semibold">
          My orders
        </span>
      </div>
      <div className="my-orders-container mt-5 flex flex-col items-center overflow-auto rounded-lg bg-gray-100">
        {loadingSkeletonItemOrders &&
          items?.map((item) => <SkeletonMyOrders key={item} />)}
        {!loadingSkeletonItemOrders &&
          myOrders?.map((myOrders) => (
            <Link
              to={`/based-online-product-store/my-order/${myOrders.id}`}
              onClick={() => {
                setPreviousOrder(myOrders.products);
              }}
            >
              <MyOrderItem key={myOrders.id} myOrders={myOrders} />
            </Link>
          ))}
      </div>
      <div className="flex flex-col items-center">
        <div className="info-div-my-orders flex items-center justify-between bg-white">
          <p className="mr-4 font-semibold">{`Complete orders: ${myOrders.length}`}</p>
          <p className="rounded-lg bg-green-500 pl-2 pr-2 font-semibold text-white">{`Total spent: $${sumTotalPriceOrder(myOrders)}`}</p>
        </div>
      </div>
    </>
  );
}

export default MyOrdersCont;
