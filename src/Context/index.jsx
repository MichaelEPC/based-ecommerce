import React from "react";
import CallForProducts from "../Hooks/CallForProducts";


const ProductContext = React.createContext();

function ProductProvider({children}) {
    const [productCard, setProductCard] = React.useState([]);
    CallForProducts(setProductCard);

    return (
        <ProductContext.Provider value={{
            setProductCard,
            productCard,
            CallForProducts,
        }}>
            {children}
        </ProductContext.Provider>
    )
}
export {ProductContext, ProductProvider}