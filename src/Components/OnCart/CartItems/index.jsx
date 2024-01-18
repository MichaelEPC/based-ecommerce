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
        <img src={data.image} alt="product-image" className='w-10 object-cover'/>
        <div className='flex justify-between items-center w-72 mt-1'>
            <p className='p-2 font-semibold w-60 rounded-lg ml-5 truncate'>{data.title}</p> 
            <p className='bg-green-500 font-semibold p-2 pr-2 pl-2 text-white rounded-full mr-2'>{`$${data.price}`}</p>
            <img src={xMark} alt="" className='cursor-pointer w-6 mb-12'
            onClick={() => deleteFromCart(data)}/>
        </div>
        </div>
      </>
    )
}
  
export default CartItems