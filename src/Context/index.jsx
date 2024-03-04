import React from "react";
import CallForProducts from "../Hooks/CallForProducts";
import { LocalStorageUser } from "./LocalStorageUser";
import { LocalStorageLogIn } from "./LocalStorageLogIn";
import { updateNav } from "../Utils/index.mjs";
import { LocalStorageConcurrenUser } from "./LocalStorageCurrentUser";
import { LocalStorageUniqueUserId } from "./LocalStorageUniqueIdUser";
import { KeepProductsInCart } from "./KeepProductsInCart";

const ProductContext = React.createContext();
function ProductProvider({children}) {
    // Options Nav : The navbar will update if the user doesnt have an account
    const [leftNav, setLeftNav] = React.useState([]);

    // Options Nav : The navbar will update if the user doesnt have an account
    const [leftRight, setRightNav] = React.useState([]);

    // Product Array : Get information products / API
    const [productCard, setProductCard] = React.useState([]);

    // Shopping cart : Count the number of items added on the cart
    const [itemNumber, setItemNumber] = React.useState(0);

    // Info Product : Open aside with product info
    const [infoProductOpen, setinfoProductOpen] = React.useState(false);

    // Array Info Product : Saves the info of the product selected in an array 
    const [ProductInfoFill, setProductInfoFill] = React.useState([]);
    
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
    
    // Get Category : Get the category that the user select in the Nav
    const [categorySelected, setCategorySelected ] = React.useState('');
    
    // Products Filtred : This array contains the producst filtred by category selected by user
    const [productsCategory, setproductsCategory ] = React.useState([]);
    
    // User Props Context
    
    // User registered : The state keeps the users that had been already created account
    const {users, updateUsers: setUsers} = LocalStorageUser();
    
    // Is User Log : The state veryfi if user is log
    const { isUserSingIn, updateIsUserSingIn : setIsUserSingIn } = LocalStorageLogIn();
    
    // Info User On : This states saves the information of the user that its on in his account
    const { currentUser, updateCurrenUser : setCurrentUser } = LocalStorageConcurrenUser();
    
    // User ID : Makes an unique ID for every user
    const {userID, updateUniqueId : setUserID } = LocalStorageUniqueUserId();
    
    // User account aside : An statement that open the aside account menu
    const [isAccountSideOpen, setIsAccountSideOpen] = React.useState(false);
    
    // User account Aside : An state that open the aside account from the un-sing in users
    const [isAccountSideOpenSingUp, setIsAccountSideOpenSingUp] = React.useState(false);

    // Array Products Cart : Saves products in an array that been added to the Shopping cart
    const [shoppingProducts, setShoppingProducts] = React.useState([]);
    
    const filterProductsByCategory = productCard.filter(
        product => {
            if (categorySelected) {
                const searchCategory = categorySelected.toLocaleLowerCase();
                const categoryProduct = product.category.toLowerCase();
                return categoryProduct.includes(searchCategory);
            }
            return productCard
        }
    )
    
    const filterProducts = filterProductsByCategory.filter(
        product => {
        const searchInput = SearchProducts.toLocaleLowerCase();
        const nameProduct = product.title.toLowerCase();
        return nameProduct.includes(searchInput);
        }
    )

    CallForProducts(setProductCard);

    updateNav(isUserSingIn, setLeftNav, setRightNav, currentUser);
    
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
            filterProducts,
            categorySelected,
            setCategorySelected,
            productsCategory,
            setproductsCategory,
            filterProductsByCategory,
            isUserSingIn,
            setIsUserSingIn,
            users,
            setUsers,
            userID,
            setUserID,
            leftNav,
            leftRight,
            currentUser,
            setCurrentUser,
            isAccountSideOpen,
            setIsAccountSideOpen,
            setIsAccountSideOpenSingUp,
            isAccountSideOpenSingUp
        }}>
            {children}
        </ProductContext.Provider>
    )
}
export {ProductContext, ProductProvider,}