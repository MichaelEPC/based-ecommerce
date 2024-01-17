import React from "react";
import CallForProducts from "../Hooks/CallForProducts";

const ProductContext = React.createContext();

function ProductProvider({children}) {
    // Product Array : Get information products / API
    const [productCard, setProductCard] = React.useState([]);

    // Shopping cart : Count the number of items added on the cart
    const [itemNumber, setItemNumber] = React.useState(0);

    // Info Product : Open aside with product info
    const [infoProductOpen, setinfoProductOpen] = React.useState(false);

    // Array Info Product : Saves the info of the product selected in an array 
    const [ProductInfoFill, setProductInfoFill] = React.useState([]);

    // Array Products Cart : Saves products in an array that been added to the Shopping cart
    const [shoppingProducts, setShoppingProducts ] = React.useState([]);

    // Aside Products Cart : Show the aside cart with the products that been addedn array that been added to the Shopping cart
    const [isOpenShoppingCart, setisOpenShoppingCart ] = React.useState(false);

    // Array Products Order : Saves products in an array to be seen in a previous Order
    const [previousOrder, setPreviousOrder ] = React.useState([]);
    
    // Array Products Orders : Saves products in an array that been added to the Orders section
    const [myOrders, setMyOrders ] = React.useState([]);

    // Array an ID for Products Orders : Nake an state to provide ID to objects Orders that been added to the Orders section
    const [myOrdersId, setMyOrdersId ] = React.useState(0);

    // Search Products : Search products with an input value
    const [SearchProducts, setSearchProducts ] = React.useState('');

    CallForProducts(setProductCard);

    console.log(myOrders);
    return (
        <ProductContext.Provider value={{
            setProductCard,
            productCard,
            CallForProducts,
            setItemNumber,
            itemNumber,
            setinfoProductOpen,
            infoProductOpen,
            setProductInfoFill,
            ProductInfoFill,
            setShoppingProducts,
            shoppingProducts,
            setisOpenShoppingCart,
            isOpenShoppingCart,
            myOrders,
            setMyOrders,
            previousOrder,
            setPreviousOrder,
            myOrdersId,
            setMyOrdersId,
            SearchProducts,
            setSearchProducts,
        }}>
            {children}
        </ProductContext.Provider>
    )
}
export {ProductContext, ProductProvider,}