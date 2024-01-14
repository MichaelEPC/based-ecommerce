import React from "react";
import CallForProducts from "../Hooks/CallForProducts";


const ProductContext = React.createContext();

function ProductProvider({children}) {
    const [productCard, setProductCard] = React.useState([]);
    const [itemNumber, setItemNumber] = React.useState(0);
    CallForProducts(setProductCard);
    
    return (
        <ProductContext.Provider value={{
            setProductCard,
            productCard,
            CallForProducts,
            setItemNumber,
            itemNumber,
        }}>
            {children}
        </ProductContext.Provider>
    )
}
export {ProductContext, ProductProvider}