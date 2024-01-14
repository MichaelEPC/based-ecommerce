import './style.css'

function ProductInfo({ setItemNumber, itemNumber, infoProductOpen, setinfoProductOpen, ProductInfoFill, shoppingProducts, setShoppingProducts, }) {
    
    // Add To cart : Add Product To The Shopping Cart Array 
    const addToCart = (data) => {
        setItemNumber(itemNumber + 1);
        const cartProducts = shoppingProducts;
        cartProducts.push(data);    
        setShoppingProducts(cartProducts);
    }

    return (
      <>
       <aside className={`${infoProductOpen ? 'product-info fixed bg-gray-100 border-black right-0' : 'hidden'}`}>
            <div className='flex justify-between items-center'>
                <p className='text-center font-semibold mt-6 ml-2 w-96'>{ProductInfoFill.title}</p>
                <div className='bg-white rounded-full mt-2'>
                    <img src="src/imgs/x-sm.png" alt="" className='cursor-pointer w-7'
                    onClick={() => setinfoProductOpen(false)}
                    />
                </div>
            </div>
            <div className='flex justify-center items-center flex-col'>
                <img src={ProductInfoFill.image} alt="product-image" className='w-96 h-96 object-cover mt-10'/>
                <div className='flex justify-between items-center w-72 mt-1'>
                <p className='bg-green-500 p-2 font-semibold w-28 rounded-lg text-white'>{ProductInfoFill.category}</p> 
                <p className='bg-green-500 font-semibold p-2 pr-2 pl-2 text-white rounded-full'>{`$${ProductInfoFill.price}`}</p>
                </div>
                <div className='div-description'>
                    <p className='w-80 h-44 mt-4 mb-4 overflow-auto'>{ProductInfoFill.description}</p>
                </div>
                <button className='bg-green-500 text-white font-semibold w-80 h-20'
                onClick={() => {
                    addToCart(ProductInfoFill);
                }}>Add to Cart ⚡</button>                
            </div>
       </aside>
      </>
    )
}
  
export default ProductInfo