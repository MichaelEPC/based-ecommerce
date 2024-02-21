import { ProductContext } from "../../Context";
import InfoFillProduct from "../../Hooks/InfoFillProduct";
import addTo from '../../imgs/add.sm.png';
import './style.css';

function Card({data, setItemNumber, itemNumber, setinfoProductOpen, setProductInfoFill, shoppingProducts, setShoppingProducts, setisOpenShoppingCart}) {

    // Render Product Infomation : Saves Info product / Open aside info product
    const renderInfoProduct = () => {
        setProductInfoFill(data);    
        openAsideInfo()
    }

    // Add To cart : Add Product To The Shopping Cart Array 
    const addToCart = (data) => {
        setItemNumber(itemNumber + 1);
        const cartProducts = shoppingProducts;
        cartProducts.push(data);    
        setShoppingProducts(cartProducts);
        openAsideCart();
    }

    // Open Product Info : Open aside with the product information
    const openAsideInfo = () => {
        setinfoProductOpen(true);
        setisOpenShoppingCart(false);
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
                <img src={addTo} alt="" onClick={() => addToCart(data) }/>
            </div>

            <img src={data.image} alt="product-img" className="image-product-card w-full object-cover rounded-2xl"
            onClick={() => renderInfoProduct(data)}/>

            <div className="bg-white w-full">
                <span className="tag-name-card absolute bottom-2 left-4 bg-white text-black pr-2 pl-1 font-semibold rounded-e-2xl">
                    {data.category}
                </span>
            </div>

        </figure>

        <div className="flex justify-between w-full h-full">
            <span className="product-name-card ml-2 truncate">{data.title}</span>
            <span className="price-name-card font-semibold pr-2 pl-1">{`$${data.price}`}</span>
        </div>
        
       </div>
      </>
    )
  }
  
  export default Card