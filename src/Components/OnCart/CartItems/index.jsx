import React from 'react';
import { ProductContext } from '../../../Context';
import xMark from '../../../imgs/boton-x-color-sm.png';
import './style.css';

function CartItems({ data, setinfoProductOpen, itemNumber, setItemNumber}) {
    // Props Drealing FIx Isue
    const {
      setShoppingProducts,
      shoppingProducts,
    } = React.useContext(ProductContext);

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
    }

    return (
      <>
      <div className='cart-items bg-white rounded-2xl flex justify-center items-center mt-4 ml-2 cursor-default'>
        <img src={data.image} alt="product-image" className='image-product-cart object-cover'/>
        <div className='flex justify-between items-center mt-1'>
            <p className='name-product-cart font-semibold rounded-lg  p-2 ml-5 truncate'>{data.title}</p> 
            <div className='price-product-cart'>
              <p className='bg-green-500 font-semibold p-2 pr-2 pl-2 text-white rounded-full mr-2'>{`$${data.price}`}</p>
            </div>
            <img src={xMark} alt="" className='xmark-cart cursor-pointer mb-12'
            onClick={() => deleteFromCart(data)}/>
        </div>
        </div>
      </>
    )
}
  
export default CartItems