import xMark from '../../imgs/x-sm.png'
import './style.css'

function ProductInfo({ setItemNumber, itemNumber, infoProductOpen, setinfoProductOpen, ProductInfoFill, shoppingProducts, setShoppingProducts, setisOpenShoppingCart }) {
    
    // Add To cart : Add Product To The Shopping Cart Array 
    const addToCart = (data) => {
        setItemNumber(itemNumber + 1);
        const cartProducts = shoppingProducts;
        cartProducts.push(data);    
        setShoppingProducts(cartProducts);
        openAsideCart()
    }

    // Open Cart View : Open aside cart with products in it
    const openAsideCart = () => {
        setinfoProductOpen(false);
        setisOpenShoppingCart(true);
    }
  
    return (
      <>
       <aside className={`${infoProductOpen ? 'product-info fixed bg-gray-100 border-black right-0' : 'hidden'}`}>
        
       <div className='flex justify-end items-end'>
            <div className='div-product-info-xmark rounded-full'>
                <img src={xMark} alt="" className='cursor-pointer w-7'
                onClick={() => setinfoProductOpen(false)}
                />
            </div>
        </div>
        
       <div className='flex flex-col justify-between items-center mt-5'>
            <p className='product-info-title text-center font-semibold mt-6 ml-2'>{ProductInfoFill.title}</p>
        </div>

        <div className='flex justify-center items-center flex-col'>
            <img src={ProductInfoFill.image} alt="product-image" className='product-info-image object-cover mt-10'/>
            <div className='div-product-info-price-category flex justify-between items-center mt-1'>
                <div className='div-description'>
                <p className='overflow-auto'>{ProductInfoFill.description}</p>
                </div>
                <p className='div-product-info-price-in bg-green-500 font-semibold rounded-full p-2 pr-2 pl-2 text-white'>{`$${ProductInfoFill.price}`}</p>
            </div>
            <button className='add-to-cart-button bg-green-500 text-white font-semibold'
            onClick={() => {
                addToCart(ProductInfoFill);
            }}>Add to Cart ⚡</button>                
        </div>
       </aside>
      </>
    )
}
  
export default ProductInfo