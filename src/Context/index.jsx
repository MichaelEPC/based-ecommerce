import React from "react";
import CallForProducts from "../Hooks/CallForProducts";

const ProductContext = React.createContext();

function ProductProvider({children}) {
    const [productCard, setProductCard] = React.useState([]);
    const [itemNumber, setItemNumber] = React.useState(0);
    const [infoProductOpen, setinfoProductOpen] = React.useState(false);
    const [ProductInfoFill, setProductInfoFill] = React.useState([]);
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
        }}>
            {children}
        </ProductContext.Provider>
    )
}
export {ProductContext, ProductProvider,}