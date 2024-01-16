import React from 'react';
import CartItems from './CartItems';
import { ProductContext } from '../../Context'
import { data } from 'autoprefixer';
import { sumProductCart, totalProductCart } from '../../Utils';
import './style.css'

function OnCart() {
    // Props for global context
    const {
        setItemNumber,
        itemNumber,
        setinfoProductOpen,
        setShoppingProducts,
        shoppingProducts,
        setisOpenShoppingCart,
        isOpenShoppingCart,
      } = React.useContext(ProductContext);

    // Add To cart : Add Product To The Shopping Cart Array 
    const addToCart = (data) => {
        setItemNumber(itemNumber + 1);
        const cartProducts = shoppingProducts;
        cartProducts.push(data);    
        setShoppingProducts(cartProducts);
    }

    return (
      <>
       <aside className={`${isOpenShoppingCart ? 'card-box fixed bg-gray-100 border-black right-4' : 'hidden'}`}>
            <div className='flex justify-between items-center'>
                <p className='text-center font-semibold mt-6 w-full font text-lg underline'>My Cart</p>
                <img src="src/imgs/x-sm.png" alt="" className='absolute cursor-pointer w-5 right-2 '
                onClick={() => setisOpenShoppingCart(false)}/>
            </div>
            <div className='products-container flex flex-col overflow-auto'>
            {
            shoppingProducts?.map(shoppingProducts => (
            <CartItems 
            key={shoppingProducts.id} data={shoppingProducts} setinfoProductOpen={setinfoProductOpen} 
            itemNumber={itemNumber} setItemNumber={setItemNumber}
            />))}
            </div>
            <div className='info-cart-container flex justify-between'>
              <p className='font-semibold p-1 ml-4 mt-2'>{`Products: ${totalProductCart(shoppingProducts)}`}</p>
              <p className='bg-green-500 text-white font-semibold rounded-lg p-1 mr-6 mt-2'>{`Total Price: $${sumProductCart(shoppingProducts)}`}</p>
            </div>
       </aside>
      </>
    )
}
  
export default OnCart