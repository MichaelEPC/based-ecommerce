import React from "react";
import { ProductContext } from "../../Context";
import addToCartIcon from '../../imgs/add.sm.png';
import './style.css';

function Card({ products, }) {

    const {
        setItemNumber, 
        itemNumber, 
        setinfoProductOpen, 
        setProductInfoFill, 
        shoppingProducts, 
        setShoppingProducts, 
        setisOpenShoppingCart,
        setIsAccountSideOpen,
        setIsAccountSideOpenSingUp,
    } = React.useContext(ProductContext);
    // Render Product Infomation : Saves Info product / Open aside info product
    const renderInfoProduct = () => {
        setProductInfoFill(products);    
        openAsideInfo()
    }

    // Add To cart : Add Product To The Shopping Cart Array 
    const addToCart = (products) => {
        setItemNumber(itemNumber + 1);
        const cartProducts = shoppingProducts;
        cartProducts.push(products);    
        setShoppingProducts(cartProducts);
        openAsideCart();
    }

    // Open Product Info : Open aside with the product information
    const openAsideInfo = () => {
        setinfoProductOpen(true);
        setisOpenShoppingCart(false);
        setIsAccountSideOpen(false)
        setIsAccountSideOpenSingUp(false)
    }

    // Open Cart View : Open aside cart with the products that been added
    const openAsideCart = () => {
        setinfoProductOpen(false);
        setisOpenShoppingCart(true);
    }

    return (
      <>
       <div className="div-info-product bg-gray-100 rounded-lg cursor-pointer">

        <figure className="relative mb-4 w-full ">
            
            <div className="absolute top-0 right-0 flex justify-center items-center bg-white rounded-full w-8 h-8 m-2">
                <img src={ addToCartIcon } alt="" onClick={() => addToCart(products) }/>
            </div>

            <img src={ products.image } alt="product-img" className="image-product-card w-full object-cover rounded-2xl"
            onClick={() => renderInfoProduct( products )}/>

            <div className="bg-white w-full">
                <span className="tag-name-card absolute bottom-2 left-4 bg-white text-black pr-2 pl-1 font-semibold rounded-e-2xl">
                    { products.category }
                </span>
            </div>

        </figure>

        <div className="div-product-card-price-title flex justify-between">
            <span className="product-name-card ml-2 truncate">{ products.title }</span>
            <span className="price-name-card font-semibold pr-2 pl-1">{`$${ products.price }`}</span>
        </div>
        
       </div>
      </>
    )
  }
  
  export default Card