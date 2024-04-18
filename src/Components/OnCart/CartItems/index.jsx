import React from "react";
import { ProductContext } from "../../../Context";
import xMark from "../../../imgs/boton-x-color-sm.png";
import "./style.css";

function CartItems({ data, setinfoProductOpen, itemNumber, setItemNumber }) {
  // Props Drealing FIx Isue
  const { setShoppingProducts, shoppingProducts } =
    React.useContext(ProductContext);

  // Delete from the cart : Add Product To The Shopping Cart Array
  const deleteFromCart = (data) => {
    if (itemNumber > 0) {
      setItemNumber(itemNumber - 1);
      const cartProducts = shoppingProducts;
      for (let i = 0; i < cartProducts.length; i++) {
        if (cartProducts[i].title === data.title) {
          cartProducts.splice(i, 1);
          break;
        }
      }
      setShoppingProducts(cartProducts);
    }
  };

  return (
    <>
      <div className="cart-items ml-2 mt-4 flex cursor-default items-center justify-center rounded-2xl bg-white">
        <img
          src={data.image}
          alt="product-image"
          className="image-product-cart object-cover"
        />
        <div className="mt-1 flex items-center justify-between">
          <p className="name-product-cart ml-5 truncate  rounded-lg p-2 font-semibold">
            {data.title}
          </p>
          <div className="price-product-cart">
            <p className="mr-2 rounded-full bg-green-500 p-2 pl-2 pr-2 font-semibold text-white">{`$${data.price}`}</p>
          </div>
          <img
            src={xMark}
            alt=""
            className="xmark-cart mb-12 cursor-pointer"
            onClick={() => deleteFromCart(data)}
          />
        </div>
      </div>
    </>
  );
}

export default CartItems;
