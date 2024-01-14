import './style.css'

function ProductInfo({ title, image, tagProduct, productPrice, descriptionProduct, setItemNumber, itemNumber, infoProductOpen, setinfoProductOpen }) {

    return (
      <>
       <aside className={`${infoProductOpen ? 'product-info fixed bg-gray-100 border-black right-0' : 'hidden'}`}>
            <div className='flex justify-between items-center'>
                <p className='ml-5'>{title}</p>
                <div className='bg-white rounded-full mt-2'>
                    <img src="src/imgs/x-sm.png" alt="" className='cursor-pointer w-7'
                    onClick={() => setinfoProductOpen(false)}
                    />
                </div>
            </div>
            <div className='flex justify-center items-center flex-col'>
                <img src={image} alt="product-image " />
                <div className='flex justify-between items-center w-72'>
                <p>{tagProduct}</p> 
                <p>{productPrice}</p>
                </div>
                <p>{descriptionProduct}</p>
                <button className='bg-green-500 text-white font-semibold w-80 h-20'
                onClick={() => {
                    setItemNumber(itemNumber + 1);
                }}>Add to Cart ⚡</button>                
            </div>
       </aside>
      </>
    )
}
  
export default ProductInfo