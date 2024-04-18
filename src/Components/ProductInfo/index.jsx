import React from "react";
import { ProductContext } from "../../Context";
import xMark from "../../imgs/x-sm.png";
import "./style.css";

function ProductInfo({ ProductInfoFill }) {
  const {
    setItemNumber,
    itemNumber,
    infoProductOpen,
    setinfoProductOpen,
    shoppingProducts,
    setShoppingProducts,
    setisOpenShoppingCart,
  } = React.useContext(ProductContext);

  // Add To cart : Add Product To The Shopping Cart Array
  const addToCart = (data) => {
    setItemNumber(itemNumber + 1);
    const cartProducts = shoppingProducts;
    cartProducts.push(data);
    setShoppingProducts(cartProducts);
    openAsideCart();
  };

  // Open Cart View : Open aside cart with products in it
  const openAsideCart = () => {
    setinfoProductOpen(false);
    setisOpenShoppingCart(true);
  };

  return (
    <>
      <aside
        className={`${infoProductOpen ? " product-info fixed right-0 border-black bg-gray-100" : "hidden"}`}
      >
        <div className="flex items-end justify-end">
          <div className="div-product-info-xmark rounded-full">
            <img
              src={xMark}
              alt=""
              className="w-7 cursor-pointer"
              onClick={() => setinfoProductOpen(false)}
            />
          </div>
        </div>

        <div className="mt-5 flex flex-col items-center justify-between">
          <p className="product-info-title ml-2 mt-6 text-center font-semibold">
            {ProductInfoFill.title}
          </p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <img
            src={ProductInfoFill.image}
            alt="product-image"
            className="product-info-image mt-10 object-cover"
          />
          <div className="div-product-info-price-category mt-1 flex items-center justify-between">
            <div className="div-description">
              <p className="overflow-auto">{ProductInfoFill.description}</p>
            </div>
            <p className="div-product-info-price-in rounded-full bg-green-500 p-2 pl-2 pr-2 font-semibold text-white">{`$${ProductInfoFill.price}`}</p>
          </div>
          <button
            className="add-to-cart-button bg-green-500 font-semibold text-white"
            onClick={() => {
              addToCart(ProductInfoFill);
            }}
          >
            Add to Cart ⚡
          </button>
        </div>
      </aside>
    </>
  );
}

export default ProductInfo;
