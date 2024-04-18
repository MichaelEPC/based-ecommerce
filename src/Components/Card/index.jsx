import React from "react";
import { ProductContext } from "../../Context";
import addToCartIcon from "../../imgs/add.sm.png";
import "./style.css";

function Card({ products }) {
  const {
    setItemNumber,
    itemNumber,
    setinfoProductOpen,
    setProductInfoFill,
    setisOpenShoppingCart,
    setIsAccountSideOpen,
    setIsAccountSideOpenSingUp,
    setShoppingProducts,
    shoppingProducts,
    setCurrentUser,
    currentUser,
    setUsers,
    users,
  } = React.useContext(ProductContext);

  // Render Product Infomation : Saves Info product / Open aside info product
  const renderInfoProduct = () => {
    setProductInfoFill(products);
    openAsideInfo();
  };

  // Add To cart : Add Product To The Shopping Cart Array
  const addToCart = (products) => {
    setItemNumber(itemNumber + 1);
    let listOfProducts = shoppingProducts;
    listOfProducts.push(products);
    setShoppingProducts(listOfProducts);
    openAsideCart();
  };

  // Open Product Info : Open aside with the product information
  const openAsideInfo = () => {
    setinfoProductOpen(true);
    setisOpenShoppingCart(false);
    setIsAccountSideOpen(false);
    setIsAccountSideOpenSingUp(false);
  };

  // Open Cart View : Open aside cart with the products that been added
  const openAsideCart = () => {
    setisOpenShoppingCart(true);
    setinfoProductOpen(false);
    setIsAccountSideOpen(false);
    setIsAccountSideOpenSingUp(false);
  };

  return (
    <>
      <div className="div-info-product cursor-pointer rounded-lg bg-gray-100">
        <figure className="relative mb-4 w-full ">
          <div className="absolute right-0 top-0 m-2 flex h-8 w-8 items-center justify-center rounded-full bg-white">
            <img
              src={addToCartIcon}
              alt=""
              onClick={() => addToCart(products)}
            />
          </div>

          <img
            src={products.image}
            alt="product-img"
            className="image-product-card w-full rounded-2xl object-cover"
            onClick={() => renderInfoProduct(products)}
          />

          <div className="w-full bg-white">
            <span className="tag-name-card absolute bottom-2 left-4 rounded-e-2xl bg-white pl-1 pr-2 font-semibold text-black">
              {products.category}
            </span>
          </div>
        </figure>

        <div className="div-product-card-price-title flex justify-between">
          <span className="product-name-card ml-2 truncate">
            {products.title}
          </span>
          <span className="price-name-card pl-1 pr-2 font-semibold">{`$${products.price}`}</span>
        </div>
      </div>
    </>
  );
}

export default Card;
