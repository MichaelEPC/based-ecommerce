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

    // Array Products Orders : Saves products in an array that been added to the Orders section
    const [myOrders, setMyOrders ] = React.useState([]);
    
    console.log(myOrders);
    CallForProducts(setProductCard);
    
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
        }}>
            {children}
        </ProductContext.Provider>
    )
}
export {ProductContext, ProductProvider,}